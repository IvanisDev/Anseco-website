import Image from "next/image";
import { BookOpen, Building2, ChevronRight, FlaskConical, Monitor, Palette } from "lucide-react";
import { PageHeader } from "@/components/page-header";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Facilities & Resources",
  description: "Educational and campus-life facilities available to ANSECO students.",
  path: "/resources/"
});

const educationalFacilities = [
  { title: "Science Laboratory", icon: FlaskConical, image: "/images/exams.svg", label: "Science and Practical Learning", description: "Practical spaces support scientific observation, investigation and curriculum-based laboratory work.", note: "Students use laboratory facilities during approved practical lessons under staff supervision." },
  { title: "ICT Laboratory", icon: Monitor, image: "/images/classroom.svg", label: "Digital Learning", description: "Networked computer workstations help students develop foundational digital and computing skills.", note: "ICT facilities support guided computing lessons, research and approved digital learning activities." },
  { title: "Classroom Blocks", icon: Building2, image: "/images/students.svg", label: "Teaching and Learning", description: "Classroom spaces support daily teaching, learning, assessment and collaborative academic work.", note: "Students are expected to care for classrooms and maintain an orderly learning environment." },
  { title: "Visual Arts Studio", icon: Palette, image: "/images/cultural-day.svg", label: "Creative and Practical Arts", description: "A dedicated studio supports practical work and creative development in Visual Arts.", note: "Studio activities follow approved lessons and the guidance of Visual Arts teachers." }
];

const tourItems = [
  "School Library",
  "Science Laboratory",
  "Classroom Blocks",
  "ICT Laboratory",
  "Visual Arts Studio"
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Facilities & Resources" eyebrow="Learning Environment" description="Educational and campus-life facilities that support learning, student welfare and everyday life at ANSECO." />

      <section id="educational-resources" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:px-12">
          <ResourceVisual image="/images/library.svg" label="Library and Study" />
          <div className="flex flex-col justify-center lg:pl-6">
            <SectionHeading eyebrow="Educational Resources" title="School Library" />
            <div className="space-y-5 text-base leading-8 text-[#4A4A4A]">
              <p>The ANSECO Library supports students with textbooks, reference materials, periodicals and learning resources across the school&apos;s learning areas.</p>
              <p>Students can use individual and group study spaces during approved periods to supplement classroom work, complete assignments and prepare for examinations.</p>
              <p>The library continues to grow through school investment and support from ANSSOSA and other approved partners.</p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-l-4 border-[#C9990A] bg-[#F8F7F3] p-5 text-sm leading-7 text-[#4A4A4A]"><BookOpen size={21} className="shrink-0 text-[#1A1A1A]" />Students are encouraged to use the library responsibly during free periods and approved study hours.</div>
          </div>
        </div>
      </section>

      {educationalFacilities.map((facility, index) => (
        <EducationalFacilitySection key={facility.title} facility={facility} imageFirst={index % 2 === 1} />
      ))}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid overflow-hidden bg-[#0D2E6B] text-white lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-8 sm:p-10 lg:p-12">
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
  return <div className="mb-7"><h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">{title}</h2></div>;
}

function ResourceVisual({ image, label }: { image: string; label: string }) {
  return <div className="relative min-h-[420px] overflow-hidden bg-[#EDF1F9]"><Image src={image} alt="" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-[#0D2E6B] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#FACC15]">{label}</div></div>;
}

function EducationalFacilitySection({ facility, imageFirst }: { facility: (typeof educationalFacilities)[number]; imageFirst: boolean }) {
  const Icon = facility.icon;
  const visual = <ResourceVisual image={facility.image} label={facility.label} />;
  const content = (
    <div className={`flex flex-col justify-center ${imageFirst ? "lg:pl-6" : "lg:pr-6"}`}>
      <SectionHeading eyebrow="Educational Resources" title={facility.title} />
      <p className="text-base leading-8 text-[#4A4A4A]">{facility.description}</p>
      <div className="mt-8 flex items-center gap-3 bg-white p-5 text-sm leading-7 text-[#4A4A4A]"><Icon size={21} className="shrink-0 text-[#1A1A1A]" />{facility.note}</div>
    </div>
  );

  return (
    <section className={`py-20 sm:py-24 ${imageFirst ? "bg-white" : ""}`}>
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-stretch lg:px-12">
        {imageFirst ? <>{visual}{content}</> : <>{content}{visual}</>}
      </div>
    </section>
  );
}
