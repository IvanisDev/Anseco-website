import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { boardingItems, cleaningGroups, dayStudentItems, requiredDocuments, sharedStudentItems } from "@/lib/admissions-content";

export const metadata: Metadata = { title: "Prospectus & Requirements", description: "Documents and personal items required for new ANSECO students." };

export default function ProspectusPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader eyebrow="Admissions" title="Prospectus & Requirements" description="Required documents and approved items for boarding and day students reporting to ANSECO." />
      <main className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12">
        <section>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">What to Bring</p>
          <h2 className="font-display text-3xl font-bold text-[#0D2E6B]">Required Documents</h2>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {requiredDocuments.map((item) => <li key={item} className="flex gap-3 bg-white p-4 text-sm text-[#334155]"><CheckCircle size={17} className="shrink-0 text-[#0D2E6B]" />{item}</li>)}
          </ul>
        </section>
        <ProspectusTable title="Boarding Students Only" subtitle="Category 1 - Basic Needs (Must Have)" items={boardingItems} />
        <ProspectusTable title="Boarding and Day Students" subtitle="Items Required" items={sharedStudentItems} />
        <ProspectusTable title="Day Students Only" subtitle="Personal Items" items={dayStudentItems} />
        <section className="mt-14">
          <div className="bg-[#0D2E6B] px-6 py-5 text-white"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">Boarding and Day Students</p><h2 className="mt-2 text-xl font-black">Category 2 - Cleaning Materials</h2></div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {cleaningGroups.map((group) => <div key={group.title} className="border border-[#0D2E6B]/10 bg-white p-6"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">{group.title}</p><h3 className="mt-3 font-black text-[#0D2E6B]">{group.students}</h3><ul className="mt-5 space-y-2 text-sm leading-6 text-[#475569]">{group.items.map((item) => <li key={item}>- {item}</li>)}</ul></div>)}
          </div>
        </section>
      </main>
    </div>
  );
}

function ProspectusTable({ title, subtitle, items }: { title: string; subtitle: string; items: string[] }) {
  return <section className="mt-12 overflow-hidden border border-[#0D2E6B]/10 bg-white"><div className="bg-[#0D2E6B] px-6 py-5 text-white"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">{title}</p><h2 className="mt-2 text-xl font-black">{subtitle}</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left"><thead className="bg-[#EDF1F9] text-xs uppercase tracking-[0.12em] text-[#0D2E6B]"><tr><th className="w-20 px-5 py-3">S/N</th><th className="px-5 py-3">Description</th></tr></thead><tbody className="divide-y divide-[#0D2E6B]/10">{items.map((item, index) => <tr key={`${title}-${index}`}><td className="px-5 py-4 align-top font-black text-[#C9990A]">{index + 1}</td><td className="px-5 py-4 text-sm leading-6 text-[#334155]">{item}</td></tr>)}</tbody></table></div></section>;
}
