import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { sports } from "@/data/campus-life";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Sports & Athletics",
  description: "Sports, athletics and inter-house participation at ANSECO.",
  path: "/campus-life/sports-athletics/"
});

export default function SportsAthleticsPage() {
  return <div className="bg-[#F8F7F3]"><PageHeader eyebrow="Campus Life" title="Sports & Athletics" description="Sport at ANSECO supports fitness, teamwork, discipline and school spirit through supervised participation." /><div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12"><div className="mb-10 max-w-3xl"><h2 className="font-display mt-3 text-4xl font-bold text-[#1A1A1A]">Sporting activities</h2><p className="mt-5 text-base leading-8 text-[#666666]">Students participate in training, house competitions and approved school events across the following activities.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{sports.map((sport) => <article key={sport} className="flex min-h-52 flex-col justify-between border border-[#0D2E6B]/10 bg-white p-6"><Trophy size={24} className="text-[#8A6700]" /><h3 className="mt-12 text-xl font-black text-[#1A1A1A]">{sport}</h3></article>)}</div><div className="mt-12 flex flex-col gap-6 border-l-4 border-[#C9990A] bg-white p-7 sm:flex-row sm:items-center sm:justify-between"><p className="text-base text-[#666666]">View athletics, house competitions and sporting activities.</p><Link href="/gallery/sports" className="inline-flex w-fit items-center gap-3 bg-[#0D2E6B] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white hover:bg-[#C9990A]">View photos <ArrowRight size={15} /></Link></div></div></div>;
}
