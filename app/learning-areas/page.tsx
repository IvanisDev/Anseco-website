import Link from "next/link";
import { ArrowRight, BookOpenCheck, GraduationCap } from "lucide-react";
import { LearningAreaAccordion } from "@/components/learning-area-accordion";
import { LearningAreaCards } from "@/components/learning-area-cards";
import { PageHeader } from "@/components/page-header";
import { learningAreaSummaries } from "@/data/learning-area-summaries";
import { departmentHeads } from "@/data/school-leadership";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Learning Areas",
  description: "Explore academic learning areas, core subjects and elective combinations at Anlo Senior High School.",
  path: "/learning-areas/"
});

const coreSubjects = [
  "English Language",
  "General Science for non-science students",
  "Mathematics",
  "Social Studies",
  "ICT",
  "Physical Education and Health"
];

const electiveSections = [
  {
    id: "science",
    title: "Science",
    note: "Choose from Option A - E",
    options: [
      ["Add. Mathematics", "Physics", "Biology", "Chemistry", "Physical Education & Health Elective", "Economics"],
      ["Add. Mathematics", "Physics", "Biology", "Chemistry", "Agriculture", "Business Management"],
      ["Add. Mathematics", "Physics", "Chemistry", "Biology", "Computing", "Accounting"],
      ["Add. Mathematics", "Physics", "Chemistry", "Biology", "Geography", "Computing / French"],
      ["Add. Mathematics", "Physics", "Chemistry", "Biology", "Business Management", "Food and Nutrition"]
    ]
  },
  {
    id: "applied-technology",
    title: "Applied Technology",
    note: "Choose from Option A - B",
    options: [
      ["Additional Mathematics", "Physics", "Design and Communication Technology", "Building Construction and Wood Technology", "Computing"],
      ["Additional Mathematics", "Physics", "Design and Communication Technology", "Building Construction and Wood Technology", "Geography"]
    ]
  },
  {
    id: "home-economics",
    title: "Home Economics",
    note: "Choose from Option A - E",
    options: [
      ["Management in Living", "Food & Nutrition / Clothing & Textiles", "Biology / Chemistry", "Art & Design Foundation / French", "Economics / Agricultural Science"],
      ["Management in Living", "Food & Nutrition", "Biology", "Art & Design Foundation", "ICT"],
      ["Management in Living", "Food & Nutrition", "Biology", "Art & Design Foundation", "Business Management"],
      ["Management in Living", "Clothing & Textiles", "Biology / Chemistry", "Art & Design Foundation", "ICT"],
      ["Management in Living", "Clothing & Textiles", "Biology / Chemistry", "Art & Design Foundation", "Business Management"]
    ]
  },
  {
    id: "visual-performing-arts",
    title: "Visual and Performing Arts",
    note: "Choose from Option A - C",
    options: [
      ["Art and Design Foundation", "Art and Design Studio", "Additional Mathematics", "Computing", "Design and Communication Technology"],
      ["Art and Design Foundation", "Art and Design Studio", "Design and Communication Technology", "Agricultural Science", "Business Management"],
      ["Art and Design Foundation", "Art and Design Studio", "Performing Art", "Agricultural Science", "ICT"]
    ]
  },
  {
    id: "agricultural-science",
    title: "Agricultural Science",
    note: "Choose from Option A - C",
    options: [
      ["Agriculture", "Chemistry", "Physics", "Business Management", "ICT"],
      ["Agriculture", "Chemistry", "Physics", "Geography", "ICT"],
      ["Agriculture", "Chemistry", "Biology", "Business Management / Geography", "Additional Mathematics"]
    ]
  },
  {
    id: "business",
    title: "Business",
    note: "Choose from Option A - D",
    options: [
      ["Accounting", "Business Management", "Economics", "Additional Mathematics", "Agricultural Science"],
      ["Accounting", "Business Management", "Additional Mathematics", "Computing", "Physics / PEH Elective"],
      ["Accounting", "Business Management", "Economics", "ICT", "Government"],
      ["Accounting", "Business Management", "Economics", "French", "Literature in English"]
    ]
  },
  {
    id: "general-arts",
    title: "General Arts",
    note: "Choose from Option A - G",
    options: [
      ["Government", "Geography", "Economics", "Add. Mathematics", "Accounting"],
      ["Add. Mathematics", "Geography", "Economics", "Computing", "Design and Communication Technology"],
      ["Government", "Geography", "History", "Agriculture", "French / Art & Design Studio"],
      ["Government", "History", "Geography", "Ewe", "Food & Nutrition"],
      ["Government", "Economics", "Add. Mathematics", "Business Management", "Clothing & Textiles"],
      ["Government", "Economics", "Geography / History", "Agriculture", "Business Management"],
      ["Music", "CRS", "History", "ICT / PEH Elective", "Performing Arts"]
    ]
  },
  {
    id: "languages",
    title: "Languages",
    note: "Choose from Option A - C",
    options: [
      ["Ewe", "Lit. in English", "French", "Christian Religious Studies", "ICT"],
      ["Lit. in English", "Music", "Ewe", "Performing Arts", "History"],
      ["Literature in English", "C.R.S", "Government", "French / Ewe", "PEH Elective"]
    ]
  }
];

const electiveSectionOrder = [
  "science",
  "general-arts",
  "business",
  "agricultural-science",
  "home-economics",
  "visual-performing-arts",
  "applied-technology",
  "languages"
];

export default function LearningAreasPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        title="Academics at ANSECO"
        eyebrow="Learning Areas"
        description="Eight learning areas with core subjects and elective combinations that prepare learners for further study, work and responsible service."
      />

      <section id="learning-areas" className="scroll-mt-28 mx-auto max-w-[1260px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">
              Eight Learning Areas
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#333333]">
            <p>
              Anlo Senior High School currently has eight (8) learning areas. These learning areas are chosen by students when filling their BECE registration forms at the JHS level.
            </p>
            <p>
              Learners can now exit with a minimum of seven subjects, made up of four core subjects and three electives, and a maximum of nine subjects, made up of four core subjects and five electives, to be externally assessed by WAEC.
            </p>
            <p>
              Learners may also select additional subjects which can be studied for one year or two years instead of the full three years. These subjects are assessed in the school and captured on students&apos; transcripts to supplement tertiary admission requirements.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <LearningAreaCards areas={learningAreaSummaries} compact />
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A]">Subjects for SHS Form 1 and 2</h2>
            <p className="mt-5 text-base leading-8 text-[#333333]">
              All students in SHS Form 1 and 2 are expected to study the following core subjects. The first four are examinable under the West African Senior High School Certificate Examinations conducted by WAEC and form a key benchmark for further education and work.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreSubjects.map((subject, index) => (
              <div key={subject} className="flex min-h-[180px] flex-col rounded-[12px] border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_18px_45px_rgba(13,46,107,0.06)]">
                <span className="mb-8 text-xs font-black uppercase tracking-[0.22em] text-[#9A7300]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="flex flex-1 items-center justify-center text-center text-2xl font-black leading-tight text-[#1A1A1A]">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-10 max-w-4xl">
          <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A]">Learning Area Combinations</h2>
          <p className="mt-5 text-base leading-8 text-[#333333]">
            Students are expected to choose elective subjects from the learning area for which they are admitted. The combinations below show the available options.
          </p>
        </div>

        <LearningAreaAccordion sections={[...electiveSections].sort((a, b) => electiveSectionOrder.indexOf(a.id) - electiveSectionOrder.indexOf(b.id))} />
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-3xl">
            <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A]">Continue Your Academic Journey</h2>
            <p className="mt-5 text-base leading-8 text-[#333333]">Explore the learning spaces that support students or find practical WASSCE guidance for the final year.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Link href="/resources#educational-resources" className="group rounded-[12px] border border-[#0D2E6B]/10 bg-[#F8F7F3] p-7 transition-colors hover:border-[#C9990A]"><BookOpenCheck size={24} className="text-[#8A6700]" /><h3 className="mt-5 text-2xl font-black text-[#1A1A1A]">Facilities &amp; Resources</h3><p className="mt-3 text-sm leading-7 text-[#555555]">Discover the library, laboratories, classrooms and specialist learning spaces.</p><span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-black text-[#1A1A1A]">Explore resources <ArrowRight size={16} /></span></Link>
            <Link href="/final-year-students" className="group rounded-[12px] border border-[#0D2E6B]/10 bg-[#F8F7F3] p-7 transition-colors hover:border-[#C9990A]"><GraduationCap size={24} className="text-[#8A6700]" /><h3 className="mt-5 text-2xl font-black text-[#1A1A1A]">For Final-Year Students</h3><p className="mt-3 text-sm leading-7 text-[#555555]">Find WASSCE preparation, timetable links, examination conduct and next steps.</p><span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-black text-[#1A1A1A]">View final-year guidance <ArrowRight size={16} /></span></Link>
          </div>
        </div>
      </section>

      <section id="departments" className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-3xl">
            <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A]">Academic Leadership</h2>
            <p className="mt-5 text-base leading-8 text-[#333333]">Heads of Departments support teaching, learning and academic coordination across ANSECO&apos;s subject areas.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departmentHeads.map((hod) => <div key={`${hod.name}-${hod.department}`} className="rounded-[12px] border border-[#0D2E6B]/10 bg-white p-5 shadow-[0_14px_32px_rgba(13,46,107,0.04)]"><h3 className="text-base font-black uppercase tracking-[0.04em] text-[#1A1A1A]">{hod.name}</h3><p className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-[#8A6700]">{hod.department}</p></div>)}
          </div>
        </div>
      </section>

    </div>
  );
}
