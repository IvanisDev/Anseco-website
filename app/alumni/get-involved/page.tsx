import Link from "next/link";
import { ArrowRight, HandHeart, Mail, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Get Involved",
  description: "Ways ANSECO alumni can reconnect, volunteer, mentor and support the school.",
  path: "/alumni/get-involved/"
});

const ways = ["Reconnect through ANSSOSA", "Join a recognized year group or chapter", "Volunteer expertise and time", "Mentor current students", "Support approved school projects", "Attend alumni and school activities"];

export default function GetInvolvedPage() {
  return <div className="bg-[#F8F7F3]"><PageHeader eyebrow="Alumni" title="Get Involved" description="Old students can strengthen ANSECO through connection, service, mentorship and approved support." /><div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 lg:px-12"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{ways.map((way) => <article key={way} className="flex min-h-44 items-center border border-[#0D2E6B]/10 bg-white p-7"><h2 className="max-w-sm text-xl font-black leading-8 text-[#1A1A1A]">{way}</h2></article>)}</div><section className="mt-12 grid gap-6 overflow-hidden rounded-[12px] bg-[#0D2E6B] p-8 text-white sm:p-10 md:grid-cols-[1fr_auto] md:items-center"><div><div className="flex items-center gap-3 text-[#FACC15]"><HandHeart size={20} /><p className="text-xs font-black uppercase tracking-[0.2em]">Take the next step</p></div><h2 className="font-display mt-3 text-3xl font-bold">Connect through an approved channel</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">Diaspora alumni may use ANSSOSA Diaspora&apos;s published contact. Other alumni enquiries may be directed through the school until additional official association channels are confirmed.</p></div><div className="flex flex-col gap-3"><a href="mailto:anssosadiaspora@gmail.com" className="inline-flex items-center gap-3 bg-[#FACC15] px-6 py-4 text-xs font-black uppercase tracking-[0.1em] text-[#1A1A1A]"><Mail size={16} /> Diaspora contact</a><Link href="/contact" className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-xs font-black uppercase tracking-[0.1em] text-white"><Users size={16} /> Contact ANSECO <ArrowRight size={14} /></Link></div></section></div></div>;
}
