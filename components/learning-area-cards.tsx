"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, BookOpen, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { LearningAreaSummary } from "@/data/learning-area-summaries";

export function LearningAreaCards({ areas, compact = false }: { areas: LearningAreaSummary[]; compact?: boolean }) {
  const [selectedArea, setSelectedArea] = useState<LearningAreaSummary | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedArea) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedArea(null);
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [selectedArea]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area, index) => (
          <button
            key={area.name}
            type="button"
            className={`group relative z-0 flex touch-manipulation cursor-pointer flex-col rounded-[12px] border border-[#0D2E6B]/10 bg-white text-left shadow-[0_18px_45px_rgba(13,46,107,0.06)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_26px_60px_rgba(13,46,107,0.12)] ${compact ? "min-h-[180px] p-6" : "min-h-[260px] p-7"}`}
            onClick={() => setSelectedArea(area)}
            aria-haspopup="dialog"
          >
            <span className="mb-8 text-xs font-black uppercase tracking-[0.22em] text-[#9A7300]">{String(index + 1).padStart(2, "0")}</span>
            <span className="mb-3 max-w-sm text-2xl font-black leading-tight text-[#0D2E6B] transition-colors group-hover:text-[#9A7300]">{area.name}</span>
            {!compact ? <span className="max-w-xl text-sm leading-7 text-gray-600">{area.description}</span> : null}
            <span className={`mt-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B] ${compact ? "pt-5" : "pt-8"}`}>
              View details <ArrowRight size={14} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {selectedArea ? (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#061A43]/80 p-4 backdrop-blur-sm sm:p-8"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) setSelectedArea(null);
          }}
        >
          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="learning-area-dialog-title"
            aria-describedby="learning-area-dialog-description"
            className="relative max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-[12px] bg-white p-6 shadow-[0_32px_90px_rgba(6,26,67,0.35)] sm:p-9"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute right-4 top-4 flex h-11 w-11 touch-manipulation items-center justify-center rounded-[12px] border border-[#0D2E6B]/15 text-[#0D2E6B] transition-colors hover:bg-[#EDF1F9]"
              aria-label={`Close ${selectedArea.name} details`}
              onClick={() => setSelectedArea(null)}
            >
              <X size={21} aria-hidden="true" />
            </button>

            <p className="pr-14 text-xs font-black uppercase tracking-[0.24em] text-[#9A7300]">Learning Area</p>
            <h2 id="learning-area-dialog-title" className="font-display mt-3 pr-14 text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">
              {selectedArea.name}
            </h2>
            <p id="learning-area-dialog-description" className="mt-5 max-w-2xl text-base leading-8 text-[#475569]">
              {selectedArea.description}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[12px] bg-[#F8F7F3] p-6">
                <div className="flex items-center gap-3 text-[#0D2E6B]">
                  <BookOpen size={20} aria-hidden="true" />
                  <h3 className="text-sm font-black uppercase tracking-[0.12em]">Major Areas of Study</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#475569]">
                  {selectedArea.majorAreas.map((major) => <li key={major} className="border-l-2 border-[#C9990A] pl-3">{major}</li>)}
                </ul>
              </div>

              <div className="rounded-[12px] bg-[#0D2E6B] p-6 text-white">
                <div className="flex items-center gap-3 text-[#FACC15]">
                  <BriefcaseBusiness size={20} aria-hidden="true" />
                  <h3 className="text-sm font-black uppercase tracking-[0.12em]">Career Paths</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">
                  {selectedArea.careerPaths.map((career) => <li key={career} className="border-l-2 border-[#FACC15] pl-3">{career}</li>)}
                </ul>
              </div>
            </div>

            <Link
              href={`/learning-areas#electives-${selectedArea.slug}`}
              className="mt-8 inline-flex items-center gap-3 rounded-[12px] bg-[#C9990A] px-6 py-4 text-xs font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#0D2E6B]"
              onClick={() => setSelectedArea(null)}
            >
              View subjects <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </section>
        </div>
      ) : null}
    </>
  );
}
