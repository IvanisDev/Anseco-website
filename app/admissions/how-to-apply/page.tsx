import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { admissionSteps } from "@/lib/admissions-content";

export const metadata: Metadata = { title: "How to Apply", description: "Steps for joining Anlo Senior High School through CSSPS." };

export default function HowToApplyPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader eyebrow="Admissions" title="How to Apply" description="Follow these steps to prepare for placement, reporting and registration at ANSECO." />
      <main className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="space-y-4">
          {admissionSteps.map(([number, title, description]) => (
            <article key={number} className="grid gap-4 border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_14px_34px_rgba(13,46,107,0.05)] sm:grid-cols-[64px_1fr]">
              <div className="font-display text-3xl font-bold text-[#C9990A]">{number}</div>
              <div><h2 className="text-lg font-black text-[#0D2E6B]">{title}</h2><p className="mt-2 text-sm leading-7 text-[#475569]">{description}</p></div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
