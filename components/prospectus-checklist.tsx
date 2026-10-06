"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { boardingItems, cleaningGroups, dayStudentItems, requiredDocuments, uniformItems } from "@/lib/admissions-content";

type StudentType = "boarding" | "day";

export function ProspectusChecklist() {
  const [studentType, setStudentType] = useState<StudentType>("boarding");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setChecked((current) => ({ ...current, [key]: !current[key] }));
  const categories = studentType === "boarding"
    ? [
        { value: "documents", title: "Required Documents", items: requiredDocuments },
        { value: "basic-needs", title: "Basic Needs", items: boardingItems.slice(0, 17) },
        { value: "uniform", title: "Uniform & Clothing", items: uniformItems },
        { value: "academic-items", title: "Academic Items", items: boardingItems.slice(17, 21) }
      ]
    : [
        { value: "documents", title: "Required Documents", items: requiredDocuments },
        { value: "personal-items", title: "Academic & Personal Items", items: dayStudentItems },
        { value: "uniform", title: "Uniform & Personal Items", items: uniformItems }
      ];

  return (
    <section id="requirements" className="scroll-mt-28">
      <div className="mb-8">
        <h2 className="font-display text-4xl font-bold text-[#1A1A1A]">Who are you preparing for?</h2>
        <p className="mt-3 text-sm leading-7 text-[#666666]">Choose a student type to see the relevant requirements. Checks are temporary and remain only while this page is open.</p>
        <div className="mt-6 grid max-w-xl grid-cols-2 gap-3" role="group" aria-label="Choose student type">
          {(["boarding", "day"] as const).map((type) => (
            <button key={type} type="button" onClick={() => setStudentType(type)} aria-pressed={studentType === type} className={`min-h-12 rounded-[8px] border px-4 py-3 text-sm font-black transition-colors ${studentType === type ? "border-[#0D2E6B] bg-[#0D2E6B] text-white" : "border-[#0D2E6B]/20 bg-white text-[#1A1A1A] hover:border-[#C9990A]"}`}>
              {type === "boarding" ? "Boarding Student" : "Day Student"}
            </button>
          ))}
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["documents"]} className="space-y-4">
        {categories.map((category, index) => (
          <ChecklistAccordion key={`${studentType}-${category.value}`} value={category.value} number={String(index + 1).padStart(2, "0")} title={category.title} items={category.items} checked={checked} toggle={toggle} />
        ))}
        <AccordionItem value="cleaning" className="rounded-[12px] border border-[#0D2E6B]/10 bg-white px-5 shadow-[0_12px_30px_rgba(13,46,107,0.04)] sm:px-7">
          <AccordionTrigger className="py-6 text-left hover:no-underline"><span className="flex items-center gap-4"><span className="font-display text-2xl font-bold text-[#8A6700]">{String(categories.length + 1).padStart(2, "0")}</span><span className="text-base font-black text-[#1A1A1A] sm:text-lg">Cleaning Materials</span></span></AccordionTrigger>
          <AccordionContent className="border-t border-[#0D2E6B]/10 pb-7 pt-6">{studentType === "boarding" ? <div className="mb-5"><Checklist items={boardingItems.slice(21)} prefix="boarding-general-cleaning" checked={checked} toggle={toggle} /></div> : null}<div className="grid gap-5 md:grid-cols-3">{cleaningGroups.map((group) => <div key={group.title} className="rounded-[8px] border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5"><h3 className="text-sm font-black leading-6 text-[#1A1A1A]">{group.students}</h3><Checklist items={group.items} prefix={`${studentType}-${group.title}`} checked={checked} toggle={toggle} /></div>)}</div></AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

function ChecklistAccordion({ value, number, title, items, checked, toggle }: { value: string; number: string; title: string; items: readonly string[]; checked: Record<string, boolean>; toggle: (key: string) => void }) {
  return <AccordionItem value={value} className="rounded-[12px] border border-[#0D2E6B]/10 bg-white px-5 shadow-[0_12px_30px_rgba(13,46,107,0.04)] sm:px-7"><AccordionTrigger className="py-6 text-left hover:no-underline"><span className="flex items-center gap-4"><span className="font-display text-2xl font-bold text-[#8A6700]">{number}</span><span className="text-base font-black text-[#1A1A1A] sm:text-lg">{title}</span></span></AccordionTrigger><AccordionContent className="border-t border-[#0D2E6B]/10 pb-7 pt-6"><Checklist items={items} prefix={value} checked={checked} toggle={toggle} /></AccordionContent></AccordionItem>;
}

function Checklist({ items, prefix, checked, toggle }: { items: readonly string[]; prefix: string; checked: Record<string, boolean>; toggle: (key: string) => void }) {
  return <ul className="mt-4 grid gap-3 sm:grid-cols-2">{items.map((item) => { const key = `${prefix}-${item}`; return <li key={key}><label className={`flex min-h-12 cursor-pointer gap-3 rounded-[8px] border p-4 text-sm leading-6 transition-colors ${checked[key] ? "border-[#C9990A] bg-[#FFF9E8] text-[#1A1A1A]" : "border-transparent bg-[#F8F7F3] text-[#333333]"}`}><input type="checkbox" checked={Boolean(checked[key])} onChange={() => toggle(key)} className="sr-only" /><span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border ${checked[key] ? "border-[#8A6700] bg-[#8A6700] text-white" : "border-[#777777] bg-white"}`}>{checked[key] ? <Check size={14} strokeWidth={3} /> : null}</span><span>{item}</span></label></li>; })}</ul>;
}
