import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Download, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import { getDownloads, getProgrammes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Admissions steps, checklist, FAQs and downloads for ANSECO parents and guardians."
};

const steps = [
  ["01", "Check Your CSSPS Placement", "Confirm placement through the official placement process and keep a printed copy for reporting."],
  ["02", "Download & Review the Reporting Checklist", "Read the reporting checklist carefully before arrival day."],
  ["03", "Gather Your Documents", "Prepare originals and photocopies of required documents early."],
  ["04", "Report on the Official Date", "Arrive on the published reporting date with a parent or guardian where required."],
  ["05", "Complete Registration", "Submit documents and complete the school registration process."],
  ["06", "Settle In", "Collect guidance on classes, boarding, uniforms and orientation."]
];

const documents = [
  "Original BECE certificate or result slip",
  "Passport photographs",
  "Birth certificate or national ID copy",
  "CSSPS placement letter or admission printout",
  "National Health Insurance card if available",
  "Parent or guardian ID card",
  "Completed school health information where applicable",
  "Items listed in the reporting checklist"
];

export default function AdmissionsPage() {
  const programmes = getProgrammes();

  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Admissions Guide" eyebrow="Joining ANSECO" description="Step-by-step guidance for new students and parents. Prepare early, download the checklist and contact the school when you need help." />
      <section id="admission-overview" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-4xl font-black tracking-tight text-[#1A1A2E] sm:text-5xl">Admission Overview</h2>
          <div className="space-y-7 text-lg leading-9 text-[#3F3F46]">
            <p>
              Anlo Senior High School is a respected senior high school in Anloga with a strong tradition of academic discipline, character formation and service. Admission into ANSECO is guided by Ghana Education Service procedures and the Computerized School Selection and Placement System, with the school supporting placed students and parents through reporting, registration and orientation.
            </p>
            <p>
              <strong className="font-black text-[#2F2F35]">Eligibility:</strong> To be eligible for admission, applicants must have completed Junior High School and must satisfy the requirements of the national placement process. Students placed at ANSECO are expected to report with the required documents, personal items and parent or guardian information listed in the school reporting checklist.
            </p>
            <p>
              <strong className="font-black text-[#2F2F35]">Computerized School Selection and Placement System (CSSPS):</strong> Senior high school admission in Ghana is normally coordinated through CSSPS. The system places qualified students into schools and programmes based on national placement guidelines, student choices, available vacancies and examination performance.
            </p>
            <p>
              <strong className="font-black text-[#2F2F35]">Placement and Programme Selection:</strong> Students admitted to ANSECO join one of the school&apos;s academic pathways, including General Arts, General Science, Business, Agricultural Science, Home Economics and Visual Arts. Programme placement should be reviewed carefully by parents and students before reporting, especially where specific subject combinations are required.
            </p>
            <p>
              <strong className="font-black text-[#2F2F35]">Merit and Readiness:</strong> ANSECO welcomes students who are prepared to learn, live responsibly and contribute positively to the school community. The admissions process is designed to help new students begin senior high school with the right documents, expectations and support.
            </p>
            <p>
              We look forward to welcoming new students and families to ANSECO. Parents are encouraged to read the full admissions guide below, download the reporting checklist and contact the school office early if they need clarification before reporting day.
            </p>
          </div>
        </div>
      </section>
      <section id="how-to-apply" className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Step by Step</p>
            <h2 className="font-display text-2xl text-[#0D2E6B] sm:text-3xl">How to Join ANSECO</h2>
          </div>
          <div className="space-y-4">
            {steps.map(([num, title, desc]) => (
              <div key={num} className="flex gap-5 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="w-10 shrink-0 text-2xl font-bold text-[#C9990A]">{num}</div>
                <div>
                  <h3 className="mb-1 font-bold text-[#0D2E6B]">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Academic Programmes</p>
              <h2 className="font-display text-2xl text-[#0D2E6B] sm:text-3xl">Programmes Available for New Students</h2>
            </div>
            <Link href="/programmes" className="inline-flex w-fit items-center rounded-lg bg-[#C9990A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#b88b08]">
              View all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.slice(0, 6).map((programme) => (
              <Link
                key={programme.slug}
                href={`/programmes/${programme.slug}`}
                className="group rounded-xl border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9990A]/40 hover:bg-white hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-[#0D2E6B] transition-colors group-hover:text-[#C9990A]">{programme.name}</h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">{programme.overview}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">What to Bring</p>
            <h2 className="font-display mb-5 text-2xl text-[#0D2E6B]">Required Documents</h2>
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#0D2E6B]" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <div id="downloads">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Resources</p>
            <h2 className="font-display mb-5 text-2xl text-[#0D2E6B]">Download Documents</h2>
            <div className="space-y-3">
              {getDownloads().map((item) => (
                <a key={item.filePath} href={item.filePath} className="group flex items-center gap-4 rounded-xl border border-[#0D2E6B]/10 bg-[#EDF1F9] p-4 transition-all hover:bg-[#dde6f5]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0D2E6B] transition-colors group-hover:bg-[#C9990A]">
                    <Download size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#0D2E6B]">{item.title}</div>
                    <div className="mt-0.5 text-xs text-gray-500">{item.category} document</div>
                  </div>
                  <span className="shrink-0 rounded bg-white px-2 py-1 text-[10px] font-bold text-[#0D2E6B]/50">PDF</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Common Questions</p>
            <h2 className="font-display text-2xl text-[#0D2E6B] sm:text-3xl">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              ["Is ANSECO a boarding or day school?", "ANSECO serves boarding and day students. Contact the school for current boarding availability."],
              ["Where do parents get the reporting checklist?", "Use the downloads on this page or contact the admissions office for guidance."],
              ["Can I apply if I was not placed at ANSECO?", "Admission is normally through the placement system. Contact the admissions office for current guidance."],
              ["What programmes does ANSECO offer?", "ANSECO offers General Arts, General Science, Business, Agricultural Science, Home Economics and Visual Arts."]
            ].map(([q, a], index) => (
              <AccordionItem key={q} value={`faq-${index}`} className="rounded-xl border border-gray-100 bg-white px-5 shadow-sm">
                <AccordionTrigger className="text-[#0D2E6B]">{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-[#0D2E6B] py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Still Have Questions?</p>
          <h2 className="font-display mb-3 text-2xl sm:text-3xl">Contact Our Admissions Office</h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-white/70">Our admissions team can help parents prepare for reporting and registration.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`} className="flex items-center gap-2.5 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"><Phone size={16} /> {siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"><Mail size={16} /> {siteConfig.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
