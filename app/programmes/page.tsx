import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore academic learning areas, core subjects and elective combinations at Anlo Senior High School."
};

const learningAreas = [
  "Science",
  "General Arts",
  "Business",
  "Agriculture",
  "Home Economics",
  "Visual and Performing Arts",
  "Applied Technology",
  "Languages"
];

const coreSubjects = [
  "English Language",
  "General Science for non-science students",
  "Mathematics",
  "Social Studies",
  "ICT",
  "Physical Education and Health"
];

const departmentHeads = [
  { name: "Mr. Margaret M. Dodor", department: "Science" },
  { name: "Mr. Jonas Hatekah", department: "Mathematics" },
  { name: "Mr. Mathew Ganadzi", department: "General Arts" },
  { name: "Mr. Festus K. Sorkpor", department: "Languages" },
  { name: "Mad. Esther A. Gabla", department: "Agriculture" },
  { name: "Mr. Saviour Wordzro", department: "Visual and Performing Arts" },
  { name: "Mad. Rejoice Vormawor", department: "Home Economics" },
  { name: "Mr. Edwin Atitsogbui", department: "Business" },
  { name: "Mr. Philip Mifetu", department: "Information and Comm. Technology" },
  { name: "Mr. Felix Q. Ladeka", department: "Physical Education and Health" }
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

export default function ProgrammesPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        title="Academics at ANSECO"
        eyebrow="Academic Programmes"
        description="Eight learning areas with core subjects and elective combinations that prepare learners for further study, work and responsible service."
      />

      <section id="programmes" className="scroll-mt-28 mx-auto max-w-[1260px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Overview</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">
              Eight Learning Areas
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#334155]">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learningAreas.map((area, index) => (
            <div key={area} className="border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_16px_38px_rgba(13,46,107,0.05)]">
              <p className="mb-7 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-xl font-black leading-tight text-[#0D2E6B]">{area}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="departments" className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1260px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Academic Leadership</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B]">Heads of Departments</h2>
            <p className="mt-5 text-base leading-8 text-[#334155]">
              Department heads support teaching, learning and academic coordination across ANSECO&apos;s subject areas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departmentHeads.map((hod) => (
              <div key={`${hod.name}-${hod.department}`} className="border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5 shadow-[0_14px_32px_rgba(13,46,107,0.04)]">
                <h3 className="text-base font-black uppercase tracking-[0.04em] text-[#0D2E6B]">{hod.name}</h3>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-[#C9990A]">{hod.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1260px]">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Core Subjects</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B]">Subjects for SHS Form 1 and 2</h2>
            <p className="mt-5 text-base leading-8 text-[#334155]">
              All students in SHS Form 1 and 2 are expected to study the following core subjects. The first four are examinable under the West African Senior High School Certificate Examinations conducted by WAEC and form a key benchmark for further education and work.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreSubjects.map((subject) => (
              <div key={subject} className="border border-[#0D2E6B]/10 bg-[#F8F7F3] px-5 py-4 text-base font-bold text-[#0D2E6B]">
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-10 max-w-4xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Elective Subjects</p>
          <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B]">Learning Area Combinations</h2>
          <p className="mt-5 text-base leading-8 text-[#334155]">
            Students are expected to choose elective subjects from the learning area for which they are admitted. The combinations below show the available options.
          </p>
        </div>

        <div className="space-y-8">
          {[...electiveSections]
            .sort((a, b) => electiveSectionOrder.indexOf(a.id) - electiveSectionOrder.indexOf(b.id))
            .map((section) => (
            <div id={`electives-${section.id}`} key={section.title} className="scroll-mt-28 border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_18px_45px_rgba(13,46,107,0.06)]">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-display text-3xl font-bold text-[#0D2E6B]">{section.title}</h3>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C9990A]">{section.note}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.options.map((subjects, index) => (
                  <div key={`${section.title}-${index}`} className="bg-[#F8F7F3] p-5">
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#0D2E6B]">Option {String.fromCharCode(65 + index)}</p>
                    <ol className="space-y-2 text-sm leading-6 text-[#334155]">
                      {subjects.map((subject) => (
                        <li key={subject} className="flex gap-3">
                          <span className="font-black text-[#C9990A]">-</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
