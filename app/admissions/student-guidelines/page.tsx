import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { reportingNotices, studentGuidelines } from "@/lib/admissions-content";

export const metadata: Metadata = { title: "School Regulations", description: "Reporting notices and student guidelines for ANSECO." };

export default function StudentGuidelinesPage() {
  return <div className="bg-[#F8F7F3]"><PageHeader eyebrow="Admissions" title="School Regulations" description="Important reporting instructions, visiting procedures and conduct guidelines for students and families." /><main className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12"><section className="border-l-4 border-[#C9990A] bg-[#0D2E6B] p-8 text-white"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#E4B52B]">Reporting Requirement</p><h2 className="mt-3 font-display text-3xl font-bold">All students must report to the Senior Housemaster or Senior Housemistress</h2></section><section className="mt-8 border border-[#C9990A]/40 bg-[#FFF9E8] p-7"><div className="flex items-center gap-3 text-[#8A6700]"><AlertTriangle size={22} /><h2 className="text-sm font-black uppercase tracking-[0.18em]">Important Reporting Notice</h2></div><ul className="mt-5 space-y-4 text-sm leading-7 text-[#4B5563]">{reportingNotices.map((notice) => <li key={notice}>- {notice}</li>)}</ul></section><section className="mt-14 divide-y divide-[#0D2E6B]/10 border-y border-[#0D2E6B]/10">{studentGuidelines.map((item, index) => <article key={item.title} className="grid gap-4 py-7 md:grid-cols-[64px_220px_1fr]"><div className="font-display text-3xl font-bold text-[#C9990A]">{String(index + 1).padStart(2, "0")}</div><h2 className="text-lg font-black text-[#0D2E6B]">{item.title}</h2><p className="text-sm leading-7 text-[#475569] sm:text-base">{item.content}</p></article>)}</section></main></div>;
}
