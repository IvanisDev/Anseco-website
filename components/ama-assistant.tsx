"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { amaKnowledge } from "@/data/ama-knowledge";
import { resolveAcademicQuestion, type AcademicContext } from "@/lib/ama/academics";
import { matchAmaIntent } from "@/lib/ama/matcher";

type AmaMessage = {
  id: number;
  role: "user" | "ama";
  text: string;
  result?: { href: string; linkLabel: string };
  followUps?: string[];
};

type AmaAnswer = {
  answer: string;
  href?: string;
  linkLabel?: string;
  followUps?: string[];
};

type SiteKnowledgeChunk = {
  answer: string;
  href: string;
  pageTitle: string;
  searchText: string;
};

const siteRoutes = [
  "/",
  "/about",
  "/about/our-history",
  "/about/school-administration",
  "/academic-calendar",
  "/admissions",
  "/admissions/faqs",
  "/admissions/how-to-apply",
  "/admissions/prospectus",
  "/admissions/student-guidelines",
  "/alumni",
  "/alumni/get-involved",
  "/alumni/leadership",
  "/alumni/projects-impact",
  "/alumni/transcript-records",
  "/campus-life",
  "/campus-life/boarding-day-students",
  "/campus-life/clubs-societies",
  "/campus-life/sports-athletics",
  "/contact",
  "/events",
  "/final-year-students",
  "/gallery",
  "/learning-areas",
  "/news",
  "/resources"
];

const searchStopWords = new Set([
  "a", "about", "an", "and", "are", "at", "be", "can", "do", "does", "for", "from", "give", "how", "i", "in", "is", "it", "list", "me", "of", "on", "or", "please", "school", "tell", "the", "their", "there", "to", "what", "when", "where", "which", "who", "why", "with"
]);

const defaultSuggestions = ["How do I apply?", "What are the Learning Areas?", "What are the four houses?", "How do I request a transcript?"];

function suggestionsForPath(pathname: string) {
  if (pathname.startsWith("/admissions")) return ["How do I apply?", "What documents are required?", "What do boarding students need?", "Show me the school regulations"];
  if (pathname.startsWith("/final-year-students")) return ["How should I prepare for WASSCE?", "Where is the WASSCE timetable?", "What are the examination rules?", "How do I request a transcript?"];
  if (pathname.startsWith("/learning-areas") || pathname.startsWith("/resources")) return ["What are the Learning Areas?", "What are the subject combinations?", "What academic resources are available?"];
  if (pathname.startsWith("/campus-life")) return ["What are the four houses?", "What clubs are available?", "What sports are offered?", "Where are the school regulations?"];
  if (pathname.startsWith("/alumni")) return ["How do I request a transcript?", "What is ANSSOSA?", "How can alumni get involved?"];
  if (pathname.startsWith("/news") || pathname.startsWith("/events")) return ["What are the upcoming events?", "Where can I find school news?", "How can I contact ANSECO?"];
  return defaultSuggestions;
}

function normalizedWords(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .match(/[a-z0-9]+/g)
    ?.map((word) => {
      if (word.length > 5 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
      if (word.length > 4 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
      return word;
    })
    .filter((word) => word.length > 2 && !searchStopWords.has(word)) ?? [];
}

function cleanText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function routeFromLink(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    if (/\.(?:pdf|png|jpe?g|gif|svg|webp|ico|zip)$/i.test(url.pathname)) return null;
    return url.pathname.replace(/\/$/, "") || "/";
  } catch {
    return null;
  }
}

async function readPublishedPage(route: string) {
  const response = await fetch(route, { headers: { Accept: "text/html" } });
  if (!response.ok) return { chunks: [] as SiteKnowledgeChunk[], links: [] as string[] };

  const documentNode = new DOMParser().parseFromString(await response.text(), "text/html");
  const main = documentNode.querySelector("main");
  if (!main) return { chunks: [] as SiteKnowledgeChunk[], links: [] as string[] };

  const pageTitle = cleanText(main.querySelector("h1")?.textContent || documentNode.title.split("|")[0] || "ANSECO");
  const headings: Record<number, string> = {};
  const chunks: SiteKnowledgeChunk[] = [];

  main.querySelectorAll("[data-ama-section], h1, h2, h3, h4, p, li, dt, dd").forEach((element) => {
    const text = cleanText(element.textContent || "");
    if (!text) return;
    if (element.hasAttribute("data-ama-section")) {
      if (text.length <= 2200) {
        const sectionLabel = element.getAttribute("data-ama-section") || "";
        chunks.push({
          answer: text,
          href: element.id ? `${route}#${element.id}` : route,
          pageTitle,
          searchText: cleanText(`${pageTitle} ${sectionLabel} ${text}`).toLowerCase()
        });
      }
      return;
    }
    const level = /^H[1-4]$/.test(element.tagName) ? Number(element.tagName.slice(1)) : 0;

    if (level) {
      headings[level] = text;
      for (let deeper = level + 1; deeper <= 4; deeper += 1) delete headings[deeper];
      return;
    }

    if (text.length < 3 || text.length > 900) return;
    const context = [headings[1], headings[2], headings[3], headings[4]].filter(Boolean);
    const answer = context.at(-1) && !text.toLowerCase().startsWith(context.at(-1)!.toLowerCase())
      ? `${context.at(-1)}: ${text}`
      : text;
    chunks.push({
      answer,
      href: route,
      pageTitle,
      searchText: cleanText(`${pageTitle} ${context.join(" ")} ${text}`).toLowerCase()
    });
  });

  const links = Array.from(main.querySelectorAll<HTMLAnchorElement>("a[href]"))
    .map((link) => routeFromLink(link.getAttribute("href") || ""))
    .filter((link): link is string => Boolean(link));

  return { chunks, links };
}

async function buildSiteIndex() {
  const visited = new Set<string>();
  const queued = new Set(siteRoutes);
  const chunks: SiteKnowledgeChunk[] = [];

  while (queued.size && visited.size < 64) {
    const routes = Array.from(queued).filter((route) => !visited.has(route)).slice(0, 12);
    if (!routes.length) break;
    routes.forEach((route) => {
      queued.delete(route);
      visited.add(route);
    });
    const pages = await Promise.all(routes.map(async (route) => {
      try {
        return await readPublishedPage(route);
      } catch {
        return { chunks: [] as SiteKnowledgeChunk[], links: [] as string[] };
      }
    }));
    pages.forEach((page) => {
      chunks.push(...page.chunks);
      page.links.forEach((link) => {
        if (!visited.has(link)) queued.add(link);
      });
    });
  }

  return chunks;
}

function searchSiteIndex(question: string, chunks: SiteKnowledgeChunk[]): AmaAnswer | undefined {
  const queryWords = Array.from(new Set(normalizedWords(question)));
  if (!queryWords.length) return undefined;

  let best: { chunk: SiteKnowledgeChunk; score: number; matches: number } | undefined;
  chunks.forEach((chunk) => {
    const words = new Set(normalizedWords(chunk.searchText));
    let matches = 0;
    let score = 0;
    queryWords.forEach((word) => {
      if (words.has(word)) {
        matches += 1;
        score += word.length >= 7 ? 6 : 4;
      }
    });
    if (chunk.searchText.includes(question.toLowerCase())) score += 12;
    if (!best || score > best.score || (score === best.score && matches > best.matches)) best = { chunk, score, matches };
  });

  if (!best || best.score < 6 || (queryWords.length >= 3 && best.matches < 2)) return undefined;
  return {
    answer: best.chunk.answer,
    href: best.chunk.href,
    linkLabel: `View ${best.chunk.pageTitle}`
  };
}

export function AmaAssistant() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<AmaMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const messageId = useRef(0);
  const responseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const siteIndexPromiseRef = useRef<Promise<SiteKnowledgeChunk[]> | null>(null);
  const academicContextRef = useRef<AcademicContext | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function handlePointerDown(event: PointerEvent) {
      if (panelRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ block: "nearest" });
  }, [isTyping, messages]);

  useEffect(() => {
    return () => {
      if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (open && !isTyping) inputRef.current?.focus();
  }, [isTyping, open]);

  async function askAma(value: string) {
    const trimmed = value.trim();
    if (!trimmed || isTyping) return;
    const academicAnswer = resolveAcademicQuestion(trimmed, academicContextRef.current);
    if (academicAnswer) academicContextRef.current = academicAnswer.context;
    const intent = matchAmaIntent(trimmed, amaKnowledge);
    const match = academicAnswer ? undefined : intent.entry;
    const clarification = academicAnswer ? undefined : intent.clarification;
    const fallback = "I do not have verified information about that yet. Please contact ANSECO for an approved answer. Do not share student names, grades, admission numbers, or other personal records here.";
    const userId = ++messageId.current;
    setMessages((current) => [...current, { id: userId, role: "user", text: trimmed }]);
    setQuestion("");
    setIsTyping(true);

    if (!academicAnswer && !match && !clarification && !siteIndexPromiseRef.current) siteIndexPromiseRef.current = buildSiteIndex();
    const typingDelay = new Promise<void>((resolve) => {
      responseTimerRef.current = setTimeout(resolve, 5000);
    });
    const [siteIndex] = await Promise.all([
      academicAnswer || match || clarification ? Promise.resolve([] as SiteKnowledgeChunk[]) : siteIndexPromiseRef.current!,
      typingDelay
    ]);
    responseTimerRef.current = null;
    const retrieved = academicAnswer || match || clarification ? undefined : searchSiteIndex(trimmed, siteIndex);
    const answer: AmaAnswer | undefined = academicAnswer
      ? academicAnswer
      : match
        ? { answer: match.answer, href: match.href, linkLabel: match.linkLabel, followUps: match.followUps }
        : clarification
          ? { answer: "I can help with that. Which requirements are you looking for?", followUps: clarification }
          : retrieved;
    const reply: AmaMessage = {
      id: ++messageId.current,
      role: "ama",
      text: answer?.answer || fallback,
      result: answer?.href && answer.linkLabel ? { href: answer.href, linkLabel: answer.linkLabel } : answer ? undefined : { href: "/contact", linkLabel: "Contact ANSECO" },
      followUps: answer?.followUps
    };

    setMessages((current) => [...current, reply]);
    setIsTyping(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    askAma(question);
  }

  const suggestions = suggestionsForPath(pathname);

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      {open ? (
        <section
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="ama-title"
          className="flex h-[min(620px,calc(100dvh-2rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[12px] border border-[#0D2E6B]/15 bg-white shadow-none sm:shadow-[0_28px_80px_rgba(6,26,67,0.3)]"
        >
          <header className="flex items-center justify-between gap-4 bg-[#0D2E6B] px-5 py-4 text-white">
            <div>
              <p id="ama-title" className="text-lg font-black">Ama</p>
              <p className="text-xs font-semibold text-white/75">ANSECO Information Assistant</p>
            </div>
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-[12px] text-white hover:bg-white/10" aria-label="Close Ama" onClick={() => setOpen(false)}>
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto bg-[#F8F7F3] p-4" aria-live="polite">
            <div className="max-w-[90%] rounded-[12px] rounded-tl-none bg-white p-4 text-sm leading-6 text-[#334155] shadow-sm">
              <p className="font-black text-[#0D2E6B]">Woezɔ! I&apos;m Ama.</p>
              <p className="mt-1">I can help you find approved information about admissions, Learning Areas, campus life, events, school history, alumni services, and contact details.</p>
            </div>

            {messages.length === 0 ? (
              <div className="mt-5">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#64748B]">Suggested questions</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button key={suggestion} type="button" disabled={isTyping} className="rounded-[12px] border border-[#0D2E6B]/15 bg-white px-3 py-2 text-left text-xs font-bold leading-5 text-[#0D2E6B] hover:border-[#C9990A] disabled:cursor-wait disabled:opacity-60" onClick={() => askAma(suggestion)}>
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={message.role === "user" ? "ml-auto max-w-[88%] rounded-[12px] rounded-br-none bg-[#0D2E6B] p-4 text-sm leading-6 text-white" : "max-w-[90%] rounded-[12px] rounded-tl-none bg-white p-4 text-sm leading-6 text-[#334155] shadow-sm"}>
                  <p>{message.text}</p>
                  {message.role === "ama" && message.result ? (
                    <Link href={message.result.href} className="mt-3 inline-flex items-center gap-2 font-black text-[#0D2E6B] underline decoration-[#C9990A] decoration-2 underline-offset-4" onClick={() => setOpen(false)}>
                      {message.result.linkLabel} <span aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                  {message.role === "ama" && message.followUps?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.followUps.map((followUp) => (
                        <button key={followUp} type="button" disabled={isTyping} className="rounded-[12px] border border-[#0D2E6B]/15 bg-[#F8F7F3] px-3 py-2 text-left text-xs font-bold leading-5 text-[#0D2E6B] hover:border-[#C9990A] disabled:cursor-wait disabled:opacity-60" onClick={() => askAma(followUp)}>
                          {followUp}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              {isTyping ? (
                <div className="flex w-fit items-center gap-1.5 rounded-[12px] rounded-tl-none bg-white px-4 py-4 shadow-sm" role="status" aria-label="Ama is typing">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0D2E6B] [animation-delay:-0.3s]" aria-hidden="true" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0D2E6B] [animation-delay:-0.15s]" aria-hidden="true" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0D2E6B]" aria-hidden="true" />
                  <span className="sr-only">Ama is typing</span>
                </div>
              ) : null}
            </div>
            <div ref={messageEndRef} />
          </div>

          <form className="border-t border-[#0D2E6B]/10 bg-white p-3" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="ama-question">Ask Ama a question</label>
            <div className="flex items-center gap-2 rounded-[12px] border border-[#0D2E6B]/15 px-3 py-2 focus-within:border-[#C9990A]">
              <input
                ref={inputRef}
                id="ama-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                disabled={isTyping}
                className="min-w-0 flex-1 bg-transparent text-sm text-[#1A1A2E] outline-none placeholder:text-[#64748B] disabled:cursor-wait"
                placeholder={isTyping ? "Ama is typing..." : "Ask Ama a question..."}
                autoComplete="off"
              />
              <button type="submit" disabled={isTyping || !question.trim()} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#C9990A] text-white disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send question">
                <ArrowUp size={18} aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      ) : (
        <button type="button" className="inline-flex min-h-14 touch-manipulation items-center gap-3 rounded-[12px] bg-[#0D2E6B] px-5 py-3 font-black text-white shadow-none transition-transform hover:-translate-y-0.5 hover:bg-[#C9990A] sm:shadow-[0_18px_45px_rgba(6,26,67,0.28)]" aria-label="Open Ama, ANSECO Information Assistant" onClick={() => setOpen(true)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FACC15] text-[#0D2E6B]" aria-hidden="true"><MessageCircle size={19} /></span>
          <span>Ask Ama</span>
        </button>
      )}
    </div>
  );
}
