import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Admissions", description: "Admissions overview and guidance for prospective ANSECO students and families." };

const admissionPages = [
  { title: "How to Apply", href: "/admissions/how-to-apply", description: "Follow the placement, reporting and registration process step by step." },
  { title: "Prospectus & Requirements", href: "/admissions/prospectus", description: "Review required documents and approved items for boarding and day students." },
  { title: "School Regulations", href: "/admissions/student-guidelines", description: "Read reporting notices, visiting procedures, dress requirements and health guidance." },
  { title: "Frequently Asked Questions", href: "/admissions/faqs", description: "Find answers to common questions from students, parents and guardians." }
];

export default function AdmissionsPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Admissions Overview" eyebrow="Joining ANSECO" description="Everything prospective students and families need to prepare for placement, reporting and registration." />
      <main>
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
            <div><p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Admission to ANSECO</p><h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B]">Begin your journey with confidence</h2></div>
            <div className="space-y-5 text-base leading-8 text-[#3F3F46]"><p>Anlo Senior High School welcomes students through Ghana Education Service procedures and the Computerized School Selection and Placement System. Placed students and their families receive guidance throughout reporting, registration and orientation.</p><p>Eligible applicants must have completed Junior High School and satisfied the national placement requirements. Students should carefully review their programme placement, required documents, personal items and school regulations before reporting.</p><p>ANSECO welcomes learners who are ready to study, live responsibly and contribute positively to the school community.</p></div>
          </div>
        </section>
        <section className="py-20"><div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:px-12">{admissionPages.map((page, index) => <Link key={page.href} href={page.href} className="group flex min-h-56 flex-col border border-[#0D2E6B]/10 bg-white p-7 shadow-[0_16px_38px_rgba(13,46,107,0.05)] transition-all hover:-translate-y-1 hover:border-[#C9990A]"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-7 text-2xl font-black text-[#0D2E6B]">{page.title}</h2><p className="mt-3 text-sm leading-7 text-[#64748B]">{page.description}</p><span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B]">Open page <ArrowRight size={15} /></span></Link>)}</div></section>
        <section className="bg-[#0D2E6B] py-20 text-white"><div className="mx-auto max-w-4xl px-5 text-center sm:px-8"><p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Need Assistance?</p><h2 className="font-display text-3xl font-bold">Contact the Admissions Office</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">The admissions team can help families prepare for reporting and registration.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10"><Phone size={16} />{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10"><Mail size={16} />{siteConfig.email}</a></div></div></section>
      </main>
    </div>
  );
}
