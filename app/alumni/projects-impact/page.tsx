import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { alumniProjects } from "@/data/alumni";

export const metadata: Metadata = { title: "Projects & Impact", description: "Confirmed current and completed ANSSOSA projects supporting ANSECO." };

export default function ProjectsImpactPage() {
  return <div className="bg-[#F8F7F3]"><PageHeader eyebrow="Alumni" title="Projects & Impact" description="Confirmed projects completed or currently being led by ANSSOSA Global, Diaspora and year groups." /><div className="mx-auto grid max-w-[1160px] gap-5 px-5 py-20 sm:px-8 md:grid-cols-2 lg:px-12">{alumniProjects.map((project) => <article key={project.title} className="flex min-h-[310px] flex-col border border-[#0D2E6B]/10 bg-white p-7"><div className="flex flex-wrap items-center justify-between gap-3"><span className="bg-[#0D2E6B] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">{project.status}</span><span className="text-xs font-black uppercase tracking-[0.12em] text-[#9A7300]">{project.owner}</span></div><h2 className="font-display mt-8 text-3xl font-bold text-[#0D2E6B]">{project.title}</h2><p className="mt-4 text-sm leading-7 text-[#64748B]">{project.description}</p><a href={project.href} target="_blank" rel="noreferrer" className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B] hover:text-[#C9990A]">Read source <ExternalLink size={14} /></a></article>)}</div></div>;
}
