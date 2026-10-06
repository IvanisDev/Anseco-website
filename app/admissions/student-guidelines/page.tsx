import type { Metadata } from "next";
import { AlertTriangle, Scale } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { reportingNotices, studentGuidelines } from "@/lib/admissions-content";
import { conductCategories } from "@/lib/conduct-content";

export const metadata: Metadata = {
  title: "School Regulations",
  description: "School regulations, student conduct and disciplinary guidelines for ANSECO."
};

export default function StudentGuidelinesPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader eyebrow="Admissions" title="School Regulations" description="Reporting instructions, student guidelines and the approved standards of conduct for the ANSECO community." />
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12">
        <section className="border-l-4 border-[#C9990A] bg-[#0D2E6B] p-8 text-white">
          <h2 className="mt-3 font-display text-3xl font-bold">All students must report to the Senior Housemaster or Senior Housemistress</h2>
        </section>
        <section className="mt-8 border border-[#C9990A]/40 bg-[#FFF9E8] p-7">
          <div className="flex items-center gap-3 text-[#8A6700]"><AlertTriangle size={22} /><h2 className="text-sm font-black uppercase tracking-[0.18em]">Important Reporting Notice</h2></div>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#4B4B4B]">{reportingNotices.map((notice) => <li key={notice}>- {notice}</li>)}</ul>
        </section>
        <section className="mt-14 divide-y divide-[#0D2E6B]/10 border-y border-[#0D2E6B]/10">
          {studentGuidelines.map((item, index) => <article key={item.title} className="grid gap-4 py-7 md:grid-cols-[64px_220px_1fr]"><div className="font-display text-3xl font-bold text-[#8A6700]">{String(index + 1).padStart(2, "0")}</div><h2 className="text-lg font-black text-[#1A1A1A]">{item.title}</h2><p className="text-sm leading-7 text-[#4A4A4A] sm:text-base">{item.content}</p></article>)}
        </section>

        <section id="student-conduct-discipline" className="scroll-mt-28 pt-20">
          <div className="grid gap-7 border-l-4 border-[#C9990A] bg-white p-7 shadow-[0_18px_45px_rgba(13,46,107,0.06)] md:grid-cols-[auto_1fr] md:p-9">
            <div className="flex h-14 w-14 items-center justify-center bg-[#0D2E6B] text-[#E4B52B]"><Scale size={26} /></div>
            <div><h2 className="mt-2 font-display text-3xl font-bold text-[#1A1A1A] sm:text-4xl">Discipline is the key to success</h2><p className="mt-4 max-w-4xl text-base leading-8 text-[#4A4A4A]">Self-discipline, rather than coercion, should guide every student. Misconduct is handled according to the Ghana Education Service approved code of conduct and the gravity, circumstances and persistence of the offence.</p></div>
          </div>
          <Accordion type="single" collapsible className="mt-8 space-y-4">
            {conductCategories.map((category, categoryIndex) => (
              <AccordionItem key={category.title} value={`category-${categoryIndex}`} className="border border-[#0D2E6B]/10 bg-white px-5 shadow-[0_10px_30px_rgba(13,46,107,0.04)] sm:px-7">
                <AccordionTrigger className="gap-5 py-6 text-left hover:no-underline"><span><span className="block text-lg font-black text-[#1A1A1A]">{category.title}</span><span className="mt-1 block text-sm font-normal leading-6 text-[#666666]">{category.description}</span></span></AccordionTrigger>
                <AccordionContent className="pb-7"><div className="space-y-5 border-t border-[#0D2E6B]/10 pt-6">
                  {category.items.map((entry) => (
                    <article key={entry.item} className="border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3"><span className="bg-[#0D2E6B] px-3 py-1 text-xs font-black text-[#E4B52B]">{entry.item}</span><h3 className="text-lg font-black text-[#1A1A1A]">{entry.offence}</h3></div>
                      {entry.details ? <div className="mt-5"><h4 className="text-xs font-black uppercase tracking-[0.16em] text-[#9A7300]">Acts included</h4><ul className="mt-3 grid gap-2 text-sm leading-6 text-[#4A4A4A] lg:grid-cols-2">{entry.details.map((detail) => <li key={detail} className="border-l-2 border-[#C9990A]/50 pl-3">{detail}</li>)}</ul></div> : null}
                      <div className="mt-5 border-t border-[#0D2E6B]/10 pt-5"><h4 className="text-xs font-black uppercase tracking-[0.16em] text-[#9A7300]">Guidelines for sanctions</h4><ul className="mt-3 grid gap-x-8 gap-y-2 text-sm leading-6 text-[#4A4A4A] lg:grid-cols-2">{entry.sanctions.map((sanction) => <li key={sanction} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#C9990A]" />{sanction}</li>)}</ul></div>
                    </article>
                  ))}
                </div></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 border-t border-[#0D2E6B]/10 pt-6 text-sm leading-7 text-[#666666]">Sanctions are applied according to the circumstances and gravity of each case. Students and families should contact the school administration for clarification or the current official policy.</p>
        </section>
      </div>
    </div>
  );
}
