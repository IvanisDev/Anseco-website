import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { HeartPulse, Landmark, Trophy, Utensils } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Campus Facilities",
  description: "Campus-life facilities supporting student welfare, activities and recreation at ANSECO."
};

type CampusFacility = {
  title: string;
  label: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  paragraphs: string[];
  note: string;
};

const campusFacilities: CampusFacility[] = [
  {
    title: "Assembly Hall",
    label: "Assembly and School Programmes",
    image: "/images/cultural-day.svg",
    imageAlt: "ANSECO assembly and school-programme facility",
    icon: Landmark,
    paragraphs: [
      "The Assembly Hall provides a shared space for school assemblies, ceremonies, presentations and approved programmes.",
      "It brings students and staff together for communication, recognition, cultural activities and important school occasions."
    ],
    note: "Use of the Assembly Hall follows the school programme and approved activity schedule."
  },
  {
    title: "Dining Hall",
    label: "Dining and Welfare",
    image: "/images/classroom.svg",
    imageAlt: "ANSECO dining and student-welfare facility",
    icon: Utensils,
    paragraphs: [
      "ANSECO's Dining Hall serves boarding students regular meals prepared by the school's kitchen team, using locally sourced ingredients where possible.",
      "Meal periods are coordinated with the academic timetable and evening prep. Students are expected to observe dining-hall routines and maintain the cleanliness of shared spaces.",
      "Parents should notify the school about relevant health conditions or dietary requirements when a student reports."
    ],
    note: "Meals and dining arrangements form part of the school's structured boarding programme."
  },
  {
    title: "Sick Bay",
    label: "Student Health and Welfare",
    image: "/images/campus.svg",
    imageAlt: "ANSECO student health and welfare facility",
    icon: HeartPulse,
    paragraphs: [
      "The Sick Bay provides a designated place for basic student health support and approved care arrangements during the school day.",
      "Students who feel unwell should follow school procedures and report promptly to the appropriate staff member for assistance."
    ],
    note: "Parents and guardians should provide accurate health information when a student reports to school."
  },
  {
    title: "Sports Field",
    label: "Sport and Recreation",
    image: "/images/sports.svg",
    imageAlt: "ANSECO sports and athletics facility",
    icon: Trophy,
    paragraphs: [
      "The Sports Field supports physical education, team training, athletics, recreation and approved school competitions.",
      "Students use the field under supervision to develop fitness, discipline, teamwork and school spirit."
    ],
    note: "Sporting activities follow the school timetable and the direction of supervising staff."
  }
];

export default function CampusFacilitiesPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Campus Life"
        title="Campus Facilities"
        description="Facilities that support student welfare, school activities, recreation and everyday campus life at ANSECO."
      />

      {campusFacilities.map((facility, index) => (
        <FacilitySection key={facility.title} facility={facility} imageFirst={index % 2 === 0} />
      ))}
    </div>
  );
}

function FacilitySection({ facility, imageFirst }: { facility: CampusFacility; imageFirst: boolean }) {
  const Icon = facility.icon;
  const visual = (
    <div className="relative min-h-[420px] overflow-hidden bg-[#EDF1F9]">
      <Image src={facility.image} alt={facility.imageAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-[#0D2E6B] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#FACC15]">{facility.label}</div>
    </div>
  );
  const content = (
    <div className={`flex flex-col justify-center ${imageFirst ? "lg:pl-6" : "lg:pr-6"}`}>
      <h2 className="font-display mt-3 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">{facility.title}</h2>
      <div className="mt-7 space-y-5 text-base leading-8 text-[#4A4A4A]">
        {facility.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
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
