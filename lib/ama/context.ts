import type { AmaKnowledgeEntry } from "@/data/ama-knowledge";
import { normalizeQuestion } from "@/lib/ama/matcher";

export type AmaConversationContext = {
  topic?: "admissions";
  lastIntent?: string;
  studentType?: "boarding" | "day";
};

function entryById(entries: AmaKnowledgeEntry[], id: string) {
  return entries.find((entry) => entry.id === id);
}

export function resolveContextualIntent(
  question: string,
  context: AmaConversationContext,
  entries: AmaKnowledgeEntry[]
) {
  const normalized = normalizeQuestion(question);
  const asksForCurrentNews = /\b(new|news|notice|announcement|latest|recent|reopening)\b/.test(normalized);
  const asksForDocuments = /\b(document|documents|paperwork|registration papers)\b/.test(normalized);
  const asksForItems = /\b(need|bring|item|items|requirement|requirements|cleaning material|cleaning materials)\b/.test(normalized);

  if (!asksForCurrentNews && asksForDocuments && (
    context.topic === "admissions" || /\b(admission|admissions|registration|reporting)\b/.test(normalized)
  )) {
    return entryById(entries, "admission-documents");
  }

  if (context.topic === "admissions") {
    if (/\b(what about )?boarding( student| students)?\b/.test(normalized)) {
      return entryById(entries, "boarding-requirements");
    }
    if (/\b(what about )?day student(s)?\b/.test(normalized)) {
      return entryById(entries, "day-requirements");
    }
    if (asksForItems && context.studentType === "boarding") {
      return entryById(entries, "boarding-requirements");
    }
    if (asksForItems && context.studentType === "day") {
      return entryById(entries, "day-requirements");
    }
  }

  return undefined;
}

export function updateConversationContext(context: AmaConversationContext, entry?: AmaKnowledgeEntry) {
  if (!entry) return;

  if (["apply", "admission-documents", "prospectus", "boarding-requirements", "day-requirements"].includes(entry.id)) {
    context.topic = "admissions";
    context.lastIntent = entry.id;
  }
  if (entry.id === "boarding-requirements") context.studentType = "boarding";
  if (entry.id === "day-requirements") context.studentType = "day";
}
