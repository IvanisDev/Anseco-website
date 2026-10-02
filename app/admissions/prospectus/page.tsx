import type { Metadata } from "next";
import { CheckCircle, Download, FileText } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { boardingItems, cleaningGroups, dayStudentItems, requiredDocuments, uniformItems } from "@/lib/admissions-content";

export const metadata: Metadata = {
  title: "Prospectus & Requirements",
  description: "Documents, uniforms and personal items required for new ANSECO boarding and day students."
};

export default function ProspectusPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader eyebrow="Admissions" title="Prospectus & Requirements" description="Review the category that applies to the student, then download the complete prospectus for saving, sharing or printing." />
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-12">
        <section className="mb-10 grid gap-6 bg-[#0D2E6B] p-7 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FACC15]">Printable Copy</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Keep the full list with you</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">Download the prospectus to save on a phone, share with a parent or guardian, or print while preparing for reporting day.</p>
          </div>
          <a href="/downloads/prospectus.pdf" download className="inline-flex items-center justify-center gap-3 bg-[#C9990A] px-6 py-4 text-sm font-black uppercase tracking-[0.09em] text-white transition-colors hover:bg-white hover:text-[#0D2E6B]">
            <Download size={18} /> Download Prospectus (PDF)
          </a>
        </section>

        <div className="mb-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Reporting Checklist</p>
          <h2 className="font-display text-4xl font-bold text-[#0D2E6B]">What to bring</h2>
          <p className="mt-3 text-sm leading-7 text-[#64748B]">Open each category to review the complete requirements.</p>
        </div>

        <Accordion type="single" defaultValue="documents" collapsible className="space-y-4">
          <RequirementAccordion value="documents" number="01" title="Required Documents">
            <RequirementList items={requiredDocuments} />
          </RequirementAccordion>
          <RequirementAccordion value="boarding" number="02" title="Boarding Student Requirements">
            <RequirementList items={boardingItems} numbered />
          </RequirementAccordion>
          <RequirementAccordion value="day" number="03" title="Day Student Requirements">
            <RequirementList items={dayStudentItems} numbered />
          </RequirementAccordion>
          <RequirementAccordion value="cleaning" number="04" title="Cleaning Materials">
            <div className="grid gap-5 md:grid-cols-3">
              {cleaningGroups.map((group) => (
                <div key={group.title} className="border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C9990A]">{group.title}</p>
                  <h3 className="mt-3 text-sm font-black leading-6 text-[#0D2E6B]">{group.students}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#475569]">
                    {group.items.map((item) => <li key={item} className="flex gap-2"><CheckCircle size={15} className="mt-1 shrink-0 text-[#C9990A]" />{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </RequirementAccordion>
          <RequirementAccordion value="uniform" number="05" title="Uniform Requirements">
            <RequirementList items={uniformItems} numbered />
          </RequirementAccordion>
        </Accordion>
      </div>
    </div>
  );
}

function RequirementAccordion({ value, number, title, children }: { value: string; number: string; title: string; children: React.ReactNode }) {
  return (
    <AccordionItem value={value} className="border border-[#0D2E6B]/10 bg-white px-5 shadow-[0_12px_30px_rgba(13,46,107,0.04)] sm:px-7">
      <AccordionTrigger className="py-6 text-left hover:no-underline">
        <span className="flex items-center gap-4">
          <span className="font-display text-2xl font-bold text-[#C9990A]">{number}</span>
          <span className="text-base font-black text-[#0D2E6B] sm:text-lg">{title}</span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="border-t border-[#0D2E6B]/10 pb-7 pt-6 text-[#475569]">{children}</AccordionContent>
    </AccordionItem>
  );
}

function RequirementList({ items, numbered = false }: { items: string[]; numbered?: boolean }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 bg-[#F8F7F3] p-4 text-sm leading-6 text-[#334155]">
          {numbered ? <span className="font-black text-[#C9990A]">{String(index + 1).padStart(2, "0")}</span> : <FileText size={16} className="mt-1 shrink-0 text-[#0D2E6B]" />}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
