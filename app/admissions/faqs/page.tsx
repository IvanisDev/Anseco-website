import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { admissionFaqGroups } from "@/lib/admissions-content";

export const metadata: Metadata = { title: "Admissions FAQs", description: "Frequently asked questions about admission to ANSECO." };

export default function AdmissionsFaqsPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader eyebrow="School Information" title="FAQs" description="Answers grouped by school fees, general information, new student enrolment and Learning Areas." />
      <div className="mx-auto max-w-4xl space-y-14 px-5 py-20 sm:px-8">
        {admissionFaqGroups.map((group, groupIndex) => (
          <section key={group.title} aria-labelledby={`faq-group-${groupIndex}`}>
            <div className="mb-6">
              <h2 id={`faq-group-${groupIndex}`} className="font-display text-3xl font-bold text-[#1A1A1A] sm:text-4xl">{group.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#666666]">{group.description}</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {group.questions.map(([question, answer], questionIndex) => (
                <AccordionItem key={question} value={`faq-${groupIndex}-${questionIndex}`} className="border border-[#0D2E6B]/10 bg-white px-6">
                  <AccordionTrigger className="text-left font-black text-[#1A1A1A]">{question}</AccordionTrigger>
                  <AccordionContent className="leading-7 text-[#4A4A4A]">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </div>
  );
}
