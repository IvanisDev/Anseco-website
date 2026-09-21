import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { admissionFaqs } from "@/lib/admissions-content";

export const metadata: Metadata = { title: "Admissions FAQs", description: "Frequently asked questions about admission to ANSECO." };

export default function AdmissionsFaqsPage() {
  return <div className="bg-[#F8F7F3]"><PageHeader eyebrow="Admissions" title="Frequently Asked Questions" description="Clear answers to common questions from prospective students, parents and guardians." /><main className="mx-auto max-w-3xl px-5 py-20 sm:px-8"><Accordion type="single" collapsible className="space-y-3">{admissionFaqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className="border border-[#0D2E6B]/10 bg-white px-6"><AccordionTrigger className="text-left font-black text-[#0D2E6B]">{question}</AccordionTrigger><AccordionContent className="leading-7 text-[#475569]">{answer}</AccordionContent></AccordionItem>)}</Accordion></main></div>;
}
