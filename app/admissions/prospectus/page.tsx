import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ProspectusChecklist } from "@/components/prospectus-checklist";

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
            <h2 className="mt-3 font-display text-3xl font-bold">Keep the full list with you</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">Download the prospectus to save on a phone, share with a parent or guardian, or print while preparing for reporting day.</p>
          </div>
          <a href="/downloads/prospectus.pdf" download className="inline-flex items-center justify-center gap-3 bg-[#C9990A] px-6 py-4 text-sm font-black uppercase tracking-[0.09em] text-white transition-colors hover:bg-white hover:text-[#1A1A1A]">
            <Download size={18} /> Download Prospectus (PDF)
          </a>
        </section>

        <ProspectusChecklist />
      </div>
    </div>
  );
}
