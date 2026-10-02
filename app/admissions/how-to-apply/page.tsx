import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { admissionSteps } from "@/lib/admissions-content";

export const metadata: Metadata = { title: "How to Apply", description: "Application and reporting steps for students and parents or guardians joining Anlo Senior High School through CSSPS." };

export default function HowToApplyPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader eyebrow="Admissions" title="How to Apply" description="Students and their parents or guardians should follow these steps together to prepare for placement, reporting and registration at ANSECO." />
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="space-y-4">
          {admissionSteps.map(([number, title, description]) => (
            <article key={number} className="grid gap-4 border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_14px_34px_rgba(13,46,107,0.05)] sm:grid-cols-[64px_1fr]">
              <div className="font-display text-3xl font-bold text-[#C9990A]">{number}</div>
              <div><h2 className="text-lg font-black text-[#0D2E6B]">{title}</h2><p className="mt-2 text-sm leading-7 text-[#475569]">{description}</p></div>
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
