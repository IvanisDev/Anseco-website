import Link from "next/link";
import { ArrowRight, BookOpenCheck, ExternalLink, FileCheck2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Final-Year Students & WASSCE",
  description: "WASSCE information, preparation guidance and next steps for final-year students at Anlo Senior High School.",
  path: "/final-year-students/"
});

const preparationSteps = [
  { title: "Confirm your subjects", description: "Check that your registered core and elective subjects are correct and report any concern through the school." },
  { title: "Build a revision plan", description: "Create a realistic weekly plan that covers every paper and gives more time to subjects that need attention." },
  { title: "Practise under exam conditions", description: "Use approved past questions, timed practice and teacher feedback to improve accuracy and time management." },
  { title: "Use school support", description: "Attend lessons, revision sessions, mock examinations and other approved academic support provided by ANSECO." },
  { title: "Protect your wellbeing", description: "Balance focused study with sleep, meals, movement and early requests for help when pressure becomes difficult." },
  { title: "Prepare for each paper", description: "Check the confirmed timetable, venue, reporting time and permitted materials before examination day." }
];

const journey = [
  "Coursework and continuous assessment",
  "Revision and school-approved support",
  "Mock examinations",
  "Candidate details and subject confirmation",
  "Final timetable and candidate instructions",
  "WASSCE papers",
  "Official results",
  "Transcript and academic records"
];

const documents = [
  "Official WASSCE timetable when released",
  "ANSECO examination notices",
  "Candidate instructions and examination rules",
  "School-approved revision schedules",
  "Other approved final-year documents"
];

export default function FinalYearStudentsPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Academics"
        title="Final-Year Students"
        description="Information and resources to help ANSECO final-year students prepare for WASSCE and complete senior high school with confidence."
      />

      <div>
        <section id="wassce-information" className="scroll-mt-28 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
            <div>
              <h2 className="font-display mt-3 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">Use confirmed information</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4A4A4A]">
                WASSCE dates, candidate instructions and examination arrangements can change. Students should rely on notices issued by ANSECO and information published by the West African Examinations Council rather than unverified social-media posts.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <AcademicLink href="/academic-calendar" title="ANSECO Calendar" description="Check published school dates and programmes." />
              <AcademicLink href="https://waecgh.org/home/wassce-school/" external title="Official WAEC Information" description="Read WAEC guidance for school candidates." />
              <div className="sm:col-span-2">
                <AcademicLink href="https://waecgh.org/timetable/" external title="Official WASSCE Timetables" description="View the latest examination timetables published by WAEC Ghana." />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10 max-w-3xl">
              <h2 className="font-display mt-3 text-4xl font-bold text-[#1A1A1A] sm:text-5xl">A practical preparation process</h2>
              <p className="mt-5 text-base leading-8 text-[#666666]">Follow school directions first, then use this checklist to organize your personal preparation.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {preparationSteps.map((step) => (
                <article key={step.title} className="flex min-h-52 flex-col justify-center rounded-[12px] border border-[#0D2E6B]/10 bg-white p-7 shadow-[0_14px_34px_rgba(13,46,107,0.05)]">
                  <h3 className="text-xl font-black text-[#1A1A1A]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#666666]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0D2E6B] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
            <div>
              <h2 className="font-display mt-3 text-4xl font-bold leading-tight sm:text-5xl">From SHS 3 to your next step</h2>
              <p className="mt-5 text-base leading-8 text-white/70">The exact timing and order are confirmed by ANSECO and WAEC. This overview helps students understand the main stages.</p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {journey.map((item, index) => (
                <li key={item} className="flex min-h-24 items-center gap-4 rounded-[12px] border border-white/15 bg-white/[0.055] p-5">
                  <span className="font-display text-2xl font-bold text-[#FACC15]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-bold leading-6 text-white/85">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
            <div className="rounded-[12px] bg-[#F8F7F3] p-7 sm:p-9">
              <div className="flex items-center gap-3 text-[#8A6700]"><FileCheck2 size={23} /><p className="text-xs font-black uppercase tracking-[0.22em]">Timetable & Documents</p></div>
              <h2 className="font-display mt-4 text-3xl font-bold text-[#1A1A1A]">What students should look for</h2>
              <ul className="mt-7 space-y-4">
                {documents.map((document) => <li key={document} className="flex gap-3 text-sm leading-7 text-[#4A4A4A]"><BookOpenCheck size={18} className="mt-1 shrink-0 text-[#8A6700]" />{document}</li>)}
              </ul>
              <p className="mt-7 text-sm leading-7 text-[#666666]">If a current document has not been published on this website, students should ask their class teacher, Head of Department or the school administration.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <AcademicLink href="/admissions/student-guidelines#student-conduct-discipline" title="Examination Conduct" description="Review the school rules on examination misconduct, discipline and approved sanctions." />
              <AcademicLink href="https://waecgh.org/home/rules-and-regulations/" external title="WAEC Rules & Regulations" description="Read the official examination rules and regulations published by WAEC Ghana." />
              <AcademicLink href="/resources#educational-resources" title="Educational Resources" description="Explore ANSECO's library, laboratories and learning facilities." />
              <AcademicLink href="/contact" title="Ask the School" description="Contact ANSECO when a final-year notice or requirement needs clarification." />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 rounded-[12px] bg-[#0D2E6B] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Results, transcripts and academic records</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">Use official WAEC channels for results information. After graduation, former students can follow ANSECO&apos;s published process to request a transcript or other academic records.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href="https://waecgh.org/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#C9990A] px-6 py-4 text-xs font-black uppercase tracking-[0.1em] text-white hover:bg-[#b8880a]">Visit WAEC Ghana <ExternalLink size={15} /></a>
                <Link href="/alumni/transcript-records" className="inline-flex items-center justify-center gap-3 rounded-[12px] border border-white/25 px-6 py-4 text-xs font-black uppercase tracking-[0.1em] text-white hover:border-[#FACC15]">Transcript & Records <ArrowRight size={15} /></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function AcademicLink({ href, title, description, external = false }: { href: string; title: string; description: string; external?: boolean }) {
  const className = "group flex min-h-48 flex-col rounded-[12px] border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_14px_34px_rgba(13,46,107,0.05)] transition-colors hover:border-[#C9990A]";
  const content = <><h3 className="text-xl font-black text-[#1A1A1A]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#666666]">{description}</p><span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-black uppercase tracking-[0.1em] text-[#1A1A1A]">Open <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></>;
  return external ? <a href={href} target="_blank" rel="noreferrer" className={className}>{content}</a> : <Link href={href} className={className}>{content}</Link>;
}
