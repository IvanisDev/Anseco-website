import Link from "next/link";
import { ArrowRight, Mail, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { alumniChapters } from "@/data/alumni";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Alumni & ANSSOSA",
  description: "The Anlo Secondary School Old Students Association, its chapters, purpose and connection to Anlo Senior High School.",
  path: "/alumni/"
});

const alumniPages = [
  { title: "Transcript & Records", description: "Find the correct school contact for academic record requests.", href: "/alumni/transcript-records", priority: true },
  { title: "Alumni Leadership", description: "Meet confirmed ANSSOSA Global and Diaspora executives.", href: "/alumni/leadership" },
  { title: "Projects & Impact", description: "Explore current and completed alumni contributions to ANSECO.", href: "/alumni/projects-impact" },
  { title: "Get Involved", description: "Reconnect, volunteer, mentor and support the school community.", href: "/alumni/get-involved" }
];

export default function AlumniPage() {
  return <div className="bg-[#F8F7F3]"><PageHeader title="ANSSOSA" eyebrow="Alumni" description="The Anlo Secondary School Old Students Association connects ANSECO graduates and supports the school through service, projects and collective action." /><section className="bg-white py-20 sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-12"><div><h2 className="font-display mt-4 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">Connected by a shared ANSECO story</h2></div><div className=""><p className="text-lg leading-9 text-[#4A4A4A]">ANSSOSA brings together generations of ANSECO old students across Ghana and beyond. Its members strengthen alumni relationships, organize year groups and chapters, and deliver practical support for students and the school.</p></div></div></section><section className="py-20 sm:py-24"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><div className="grid gap-5 md:grid-cols-2">{alumniPages.map((page) => <Link key={page.href} href={page.href} className={`group flex min-h-56 flex-col rounded-[12px] border p-7 transition-colors hover:border-[#C9990A] ${page.priority ? "border-[#0D2E6B] bg-[#0D2E6B] text-white" : "border-[#0D2E6B]/10 bg-white"}`}><h2 className={`text-2xl font-black ${page.priority ? "text-white" : "text-[#1A1A1A]"}`}>{page.title}</h2><p className={`mt-4 max-w-2xl text-sm leading-7 ${page.priority ? "text-white/75" : "text-[#666666]"}`}>{page.description}</p><span className={`mt-auto inline-flex items-center gap-2 pt-7 text-xs font-black uppercase tracking-[0.12em] ${page.priority ? "text-[#FACC15]" : "text-[#1A1A1A]"}`}>Open page <ArrowRight size={14} /></span></Link>)}</div></div></section><section className="bg-white py-20"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12"><div><h2 className="font-display mt-3 text-4xl font-bold text-[#1A1A1A]">Year Groups & Chapters</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{alumniChapters.map((chapter) => <div key={chapter} className="flex items-center gap-4 rounded-[12px] border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5"><Users size={19} className="text-[#8A6700]" /><span className="font-black text-[#1A1A1A]">{chapter}</span></div>)}</div></div><div className="rounded-[12px] bg-[#F8F7F3] p-8"><h2 className="font-display mt-3 text-3xl font-bold text-[#1A1A1A]">Contact ANSSOSA Diaspora</h2><div className="mt-5 space-y-2 text-sm font-bold text-[#1A1A1A]"><a href="mailto:anssosadiaspora@gmail.com" className="block hover:text-[#8A6700]">anssosadiaspora@gmail.com</a><a href="tel:+16177925200" className="block hover:text-[#8A6700]">+1 617 792 5200</a></div><a href="https://anssosadiaspora.org" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 bg-[#0D2E6B] px-6 py-4 text-xs font-black uppercase tracking-[0.1em] text-white hover:bg-[#C9990A]"><Mail size={16} /> Visit ANSSOSA Diaspora</a></div></div></section></div>;
}
