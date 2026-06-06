import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, ChevronRight, FlaskConical, Monitor, Utensils } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Resources",
  description: "Campus resources and facilities available to ANSECO students."
};

const libraryStats = [
  ["5,000+", "Textbooks & References"],
  ["120", "Study Seats"],
  ["Mon-Sat", "Opening Days"],
  ["GHC45K+", "OSA Donation (2024)"]
];

const mealTimes = [
  ["Breakfast", "6:00 AM - 7:00 AM"],
  ["Lunch", "12:30 PM - 1:30 PM"],
  ["Dinner", "6:30 PM - 7:30 PM"]
];

const labs = [
  {
    title: "Science Laboratory",
    icon: FlaskConical,
    description:
      "Fully equipped Physics, Chemistry, and Biology labs supporting all science programmes. Practical sessions are a core part of the General Science curriculum."
  },
  {
    title: "ICT Laboratory",
    icon: Monitor,
    description:
      "Computer lab with networked workstations. Students across all programmes receive foundational ICT training as part of the core curriculum."
  },
  {
    title: "Home Economics Lab",
    icon: Utensils,
    description:
      "Specialised kitchen and workshop space for the Home Economics programme. Students practise food preparation, textiles, and household management skills."
  }
];

const tourItems = [
  "Classroom blocks and administration building",
  "Science, ICT, and Home Economics laboratories",
  "Library and study areas",
  "Boarding houses (male and female)",
  "Dining hall and kitchen facilities",
  "Sports fields and athletics track"
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Resources" eyebrow="Campus" description="Facilities and resources available to ANSECO students across the campus." />

      <section id="library" className="bg-white py-20">
        <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <SectionIntro title="Library" />
            <div className="space-y-5 text-sm leading-7 text-[#334155]">
              <p>
                The ANSECO Library is the academic heart of the school, housing a growing collection of textbooks, reference materials, periodicals, and student resources across all six programmes.
              </p>
              <p>
                The library is open Monday to Friday from 7:00 AM to 9:00 PM, and Saturday mornings during term. Study cubicles, group study areas, and a small reading room are available to students.
              </p>
              <p>
                In 2024, the Old Students Association donated over <strong>GHC45,000</strong> worth of new library resources, significantly expanding the collection.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {libraryStats.map(([value, label]) => (
                <div key={label} className="rounded-lg bg-[#EDF1F9] p-4">
                  <div className="text-lg font-black text-[#0D2E6B]">{value}</div>
                  <div className="mt-1 text-xs text-[#64748B]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <ResourceImageCard
            image="/images/library.svg"
            icon={<BookOpen size={17} />}
            text="Students are encouraged to use the library during prep hours, free periods, and weekends to supplement classroom learning."
          />
        </div>
      </section>

      <section id="dining" className="py-20">
        <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <ResourceImageCard
            image="/images/classroom.svg"
            icon={<Utensils size={17} />}
            text="Boarding students receive three nutritious meals daily, prepared by dedicated kitchen staff on campus."
          />

          <div>
            <SectionIntro title="Dining Hall" />
            <div className="space-y-5 text-sm leading-7 text-[#334155]">
              <p>
                ANSECO&apos;s dining hall serves all boarding students three meals daily: breakfast, lunch, and dinner. Meals are prepared by the school&apos;s kitchen staff using locally sourced ingredients where possible.
              </p>
              <p>
                Meal times are structured to fit around the academic timetable and evening prep. Day students may purchase meals from the dining hall during lunch hours.
              </p>
              <p>
                Students with specific dietary requirements or health conditions should notify the school at the start of term so appropriate accommodations can be made.
              </p>
            </div>
            <div className="mt-7 space-y-3">
              {mealTimes.map(([meal, time]) => (
                <div key={meal} className="flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm shadow-sm">
                  <span className="font-bold text-[#0D2E6B]">{meal}</span>
                  <span className="text-xs text-[#64748B]">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="labs" className="bg-white py-20">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-12">
          <SectionIntro title="Laboratories" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {labs.map((lab) => {
              const Icon = lab.icon;
              return (
                <div key={lab.title} className="rounded-xl bg-[#F8F7F3] p-7 shadow-[0_10px_26px_rgba(13,46,107,0.06)]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-[#0D2E6B] text-[#C9990A]">
                    <Icon size={19} />
                  </div>
                  <h3 className="mb-3 text-lg font-black text-[#0D2E6B]">{lab.title}</h3>
                  <p className="text-sm leading-7 text-[#475569]">{lab.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="campus-tour" className="bg-[#0D2E6B] py-20 text-white">
        <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Visit Us</p>
            <h2 className="font-display mb-5 text-3xl font-bold leading-tight sm:text-4xl">Campus Tour</h2>
            <p className="mb-7 text-sm leading-7 text-white/70">
              Prospective students and their families are welcome to visit the ANSECO campus. Tours are conducted on school days between 9:00 AM and 3:00 PM. Prior notice is appreciated.
            </p>
            <div className="space-y-4">
              {tourItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-white/78">
                  <ChevronRight size={15} className="mt-0.5 shrink-0 text-[#C9990A]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-9 text-xs text-white/45">To schedule a visit, contact the school office at least 48 hours in advance.</p>
          </div>

          <div className="relative h-72 overflow-hidden rounded-2xl bg-white/10 sm:h-80">
            <Image src="/images/campus.svg" alt="ANSECO campus illustration" fill sizes="580px" className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionIntro({ title }: { title: string }) {
  return (
    <>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Campus Resources</p>
      <h2 className="font-display mb-6 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">{title}</h2>
    </>
  );
}

function ResourceImageCard({ image, icon, text }: { image: string; icon: React.ReactNode; text: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-[#F8F7F3] shadow-[0_12px_30px_rgba(13,46,107,0.07)]">
      <div className="relative h-64 bg-[#EDF1F9]">
        <Image src={image} alt="" fill sizes="580px" className="object-cover" />
      </div>
      <div className="p-5">
        <div className="mb-3 text-[#C9990A]">{icon}</div>
        <p className="text-sm leading-7 text-[#475569]">{text}</p>
      </div>
    </div>
  );
}
