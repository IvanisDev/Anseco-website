import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, ChevronRight, FlaskConical, Monitor, Utensils } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Resources",
  description: "Campus resources and facilities available to ANSECO students."
};

const labs = [
  { title: "Science Laboratories", icon: FlaskConical, description: "Physics, Chemistry and Biology laboratories support practical learning across the science curriculum." },
  { title: "ICT Laboratory", icon: Monitor, description: "Networked computer workstations help students develop foundational digital and computing skills." },
  { title: "Home Economics Centre", icon: Utensils, description: "Dedicated spaces support practical work in food preparation, textiles and household management." }
];

const tourItems = [
  "Classroom blocks and administration building", "Science, ICT and Home Economics laboratories", "Library and study areas",
  "Boarding houses", "Dining hall and kitchen facilities", "Sports fields and athletics track"
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Campus Resources" eyebrow="Learning Environment" description="The spaces, facilities and services that support learning, student welfare and life at ANSECO." />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:px-12">
          <ResourceVisual image="/images/library.svg" label="Library and Study" />
          <div className="flex flex-col justify-center lg:pl-6">
            <SectionHeading eyebrow="Academic Resources" title="Library" />
            <div className="space-y-5 text-base leading-8 text-[#475569]">
              <p>The ANSECO Library supports students with textbooks, reference materials, periodicals and learning resources across the school&apos;s learning areas.</p>
              <p>Students can use individual and group study spaces during approved periods to supplement classroom work, complete assignments and prepare for examinations.</p>
              <p>The library continues to grow through school investment and support from ANSSOSA and other approved partners.</p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-l-4 border-[#C9990A] bg-[#F8F7F3] p-5 text-sm leading-7 text-[#475569]"><BookOpen size={21} className="shrink-0 text-[#0D2E6B]" />Students are encouraged to use the library responsibly during free periods and approved study hours.</div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:px-12">
          <div className="flex flex-col justify-center lg:pr-6">
            <SectionHeading eyebrow="Student Welfare" title="Dining Hall" />
            <div className="space-y-5 text-base leading-8 text-[#475569]">
              <p>ANSECO&apos;s dining hall serves boarding students regular meals prepared by the school&apos;s kitchen team, using locally sourced ingredients where possible.</p>
              <p>Meal periods are coordinated with the academic timetable and evening prep. Students are expected to observe dining-hall routines and maintain the cleanliness of shared spaces.</p>
              <p>Parents should notify the school about relevant health conditions or dietary requirements when a student reports.</p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-l-4 border-[#C9990A] bg-white p-5 text-sm leading-7 text-[#475569]"><Utensils size={21} className="shrink-0 text-[#0D2E6B]" />Meals and dining arrangements form part of the school&apos;s structured boarding programme.</div>
          </div>
          <ResourceVisual image="/images/classroom.svg" label="Dining and Welfare" />
        </div>
      </section>

      <section className="bg-[#0D2E6B] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div><p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#FACC15]">Practical Learning</p><h2 className="font-display text-4xl font-bold sm:text-5xl">Laboratories and Specialist Spaces</h2></div>
            <p className="max-w-3xl text-base leading-8 text-white/65 lg:justify-self-end">Purpose-built spaces give students opportunities to test ideas, build practical skills and connect classroom theory with real experience.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {labs.map((lab) => { const Icon = lab.icon; return <article key={lab.title} className="flex min-h-[300px] flex-col border border-white/10 bg-white/[0.055] p-7"><div className="flex h-12 w-12 items-center justify-center border border-white/15 text-[#FACC15]"><Icon size={22} /></div><h3 className="mt-9 text-xl font-black">{lab.title}</h3><p className="mt-4 text-sm leading-7 text-white/60">{lab.description}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid overflow-hidden bg-[#0D2E6B] text-white lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#FACC15]">Virtual Visit</p>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">Tour ANSECO Campus</h2>
              <p className="mt-5 text-base leading-8 text-white/65">Explore the spaces where ANSECO students learn, live, study and build community.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{tourItems.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-white/75"><ChevronRight size={16} className="mt-1 shrink-0 text-[#FACC15]" />{item}</div>)}</div>
              <p className="mt-9 inline-flex bg-[#C9990A] px-7 py-4 text-sm font-black uppercase tracking-[0.1em]">Campus tour coming soon</p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden bg-[#EDF1F9]">
              <Image src="/images/campus.svg" alt="ANSECO campus" fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mb-7"><p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">{eyebrow}</p><h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">{title}</h2></div>;
}

function ResourceVisual({ image, label }: { image: string; label: string }) {
  return <div className="relative min-h-[420px] overflow-hidden bg-[#EDF1F9]"><Image src={image} alt="" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-[#0D2E6B] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#FACC15]">{label}</div></div>;
}
