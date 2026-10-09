import { UserRound } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { diasporaLeaders, globalLeaders } from "@/data/alumni";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Alumni Leadership",
  description: "Confirmed ANSSOSA Global and Diaspora executives.",
  path: "/alumni/leadership/"
});

export default function AlumniLeadershipPage() {
  return <div className="bg-[#F8F7F3]"><PageHeader eyebrow="Alumni" title="Alumni Leadership" description="Confirmed ANSSOSA Global and Diaspora executives are presented as distinct leadership structures." /><div className="mx-auto max-w-[1400px] space-y-16 px-5 py-20 sm:px-8 lg:px-12"><LeadershipGroup title="ANSSOSA Global Executives" leaders={globalLeaders} /><LeadershipGroup title="ANSSOSA Diaspora Executives" leaders={diasporaLeaders} /></div></div>;
}

function LeadershipGroup({ title, leaders }: { title: string; leaders: Array<{ role: string; name: string }> }) {
  return <section><h2 className="font-display text-3xl font-bold text-[#1A1A1A]">{title}</h2><div className="mt-7 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">{leaders.map((leader) => <article key={leader.role} className="border border-[#0D2E6B]/10 bg-white p-5"><div className="flex aspect-[4/5] items-center justify-center bg-[#EDF1F9] text-[#7B95C8]" aria-label={`Portrait frame for ${leader.name}`}><UserRound size={48} strokeWidth={1.4} /></div><h3 className="mt-6 min-h-14 text-lg font-black leading-7 text-[#1A1A1A]">{leader.name}</h3><p className="mt-3 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#9A7300]">{leader.role}</p></article>)}</div></section>;
}
