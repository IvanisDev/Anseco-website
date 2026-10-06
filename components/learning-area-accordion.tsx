"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type LearningAreaSection = {
  id: string;
  title: string;
  note: string;
  options: string[][];
};

export function LearningAreaAccordion({ sections }: { sections: LearningAreaSection[] }) {
  const [openArea, setOpenArea] = useState("");

  useEffect(() => {
    const openAreaFromHash = () => {
      const area = window.location.hash.replace("#electives-", "");
      if (sections.some((section) => section.id === area)) setOpenArea(area);
    };

    openAreaFromHash();
    window.addEventListener("hashchange", openAreaFromHash);
    return () => window.removeEventListener("hashchange", openAreaFromHash);
  }, [sections]);

  return (
    <Accordion type="single" collapsible value={openArea} onValueChange={setOpenArea} className="space-y-4">
      {sections.map((section, sectionIndex) => (
        <AccordionItem
          id={`electives-${section.id}`}
          data-ama-section="Learning Area Combinations"
          key={section.id}
          value={section.id}
          className="scroll-mt-28 border border-[#0D2E6B]/10 bg-white px-5 shadow-[0_14px_36px_rgba(13,46,107,0.05)] sm:px-7"
        >
          <AccordionTrigger className="gap-5 py-6 text-left hover:no-underline sm:py-7">
            <span className="flex min-w-0 items-center gap-4 sm:gap-6">
              <span className="font-display text-2xl font-bold text-[#8A6700]">{String(sectionIndex + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-display text-2xl font-bold text-[#1A1A1A] sm:text-3xl">{section.title}</span>
                <span className="mt-1 block text-xs font-black uppercase tracking-[0.14em] text-[#8A6700]">{section.note}</span>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-7">
            <div className="grid gap-4 border-t border-[#0D2E6B]/10 pt-6 md:grid-cols-2 xl:grid-cols-4">
              {section.options.map((subjects, optionIndex) => (
                <div key={`${section.id}-${optionIndex}`} className="bg-[#F8F7F3] p-5">
                  <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#1A1A1A]">Option {String.fromCharCode(65 + optionIndex)}</p>
                  <ol className="space-y-2 text-sm leading-6 text-[#333333]">
                    {subjects.map((subject) => <li key={subject} className="flex gap-3"><span className="font-black text-[#8A6700]">-</span><span>{subject}</span></li>)}
                  </ol>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
