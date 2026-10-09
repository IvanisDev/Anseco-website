import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { admissionSteps } from "@/lib/admissions-content";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "How to Apply",
  description: "Application and reporting steps for students and parents or guardians joining Anlo Senior High School through CSSPS.",
  path: "/admissions/how-to-apply/"
});

export default function HowToApplyPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader eyebrow="Admissions" title="How to Apply" description="Students and their parents or guardians should follow these steps together to prepare for placement, reporting and registration at ANSECO." />
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="relative space-y-4 before:absolute before:bottom-8 before:left-[2.45rem] before:top-8 before:w-px before:bg-[#C9990A]/40 sm:before:left-[3.55rem]">
          {admissionSteps.map(([number, title, description], index) => (
            <article key={number} className="relative grid gap-4 rounded-[12px] border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_14px_34px_rgba(13,46,107,0.05)] sm:grid-cols-[64px_1fr]">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F7F3] font-display text-2xl font-bold text-[#8A6700] sm:h-14 sm:w-14">{number}</div>
              <div><h2 className="text-lg font-black text-[#1A1A1A]">{title}</h2><p className="mt-2 text-sm leading-7 text-[#4A4A4A]">{description}</p>{index === 1 ? <Link href="/admissions/prospectus" className="mt-4 inline-flex min-h-11 items-center gap-2 font-bold text-[#1A1A1A] underline decoration-[#C9990A] decoration-2 underline-offset-4">View Prospectus <ArrowRight size={15} /></Link> : null}{index === 2 ? <Link href="/admissions/prospectus#requirements" className="mt-4 inline-flex min-h-11 items-center gap-2 font-bold text-[#1A1A1A] underline decoration-[#C9990A] decoration-2 underline-offset-4">View Required Documents <ArrowRight size={15} /></Link> : null}</div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/admissions/prospectus" className="inline-flex items-center gap-3 bg-[#C9990A] px-7 py-4 text-sm font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#0D2E6B]">
            View Prospectus &amp; Requirements
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
