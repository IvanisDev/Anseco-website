import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProgramme, getProgrammes } from "@/lib/content";

const programmeMeta: Record<string, { image: string; tagline: string }> = {
  "general-arts": { image: "/images/programmes/general-arts.png", tagline: "Humanities, Languages & Social Science" },
  "general-science": { image: "/images/programmes/general-science.png", tagline: "Physics, Chemistry, Biology & Mathematics" },
  business: { image: "/images/programmes/business.png", tagline: "Accounting, Economics & Management" },
  "agricultural-science": { image: "/images/programmes/agricultural-science.png", tagline: "Animal Science, Crop Science & Agribusiness" },
  "home-economics": { image: "/images/programmes/home-economics.png", tagline: "Food, Nutrition & Management" },
  "visual-arts": { image: "/images/programmes/visual-arts.png", tagline: "Design, Fine Art & Creative Practice" }
};

export function generateStaticParams() {
  return getProgrammes().map((programme) => ({ slug: programme.slug }));
}

type SlugParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: SlugParams }): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgramme(slug);
  return { title: programme?.name || "Programme", description: programme?.overview };
}

export default async function ProgrammePage({ params }: { params: SlugParams }) {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) notFound();
  const meta = programmeMeta[programme.slug] || programmeMeta["general-arts"];

  return (
    <div className="bg-[#F8F7F3]">
      <div className="bg-[#0D2E6B] px-4 py-14 text-white">
        <div className="mx-auto max-w-4xl">
          <Link href="/programmes" className="mb-6 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft size={15} /> All Programmes
          </Link>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">{meta.tagline}</p>
          <h1 className="font-display mb-3 text-3xl font-bold sm:text-4xl">{programme.name}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="relative h-48 overflow-hidden rounded-xl bg-gray-100 sm:h-64">
              <Image src={meta.image} alt="" fill sizes="900px" className="object-cover" />
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-3 font-bold text-[#0D2E6B]">Programme Overview</h2>
              <p className="text-sm leading-relaxed text-gray-700">{programme.overview}</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#0D2E6B]">Core Subjects</h2>
              <SubjectPills items={programme.coreSubjects} />
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#0D2E6B]">Elective Subjects</h2>
              <SubjectPills items={programme.electiveSubjects} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-sm font-bold text-[#0D2E6B]">Career Outcomes</h2>
              <ul className="space-y-2.5">
                {programme.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-[#C9990A]">✓</span>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-sm font-bold text-[#0D2E6B]">Head of Department</h2>
              <div className="overflow-hidden rounded-lg border border-[#0D2E6B]/10 bg-[#EDF1F9]">
                <div className="flex aspect-square items-center justify-center text-lg font-black text-[#0D2E6B]">
                  HOD
                </div>
                <div className="border-t border-[#0D2E6B]/10 bg-white px-4 py-3">
                  <p className="text-sm font-bold text-[#1A1A2E]">TBD</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">{programme.name} Department</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#0D2E6B] p-5 text-white">
              <h2 className="mb-2 font-bold">Interested?</h2>
              <p className="mb-4 text-xs text-white/70">Admission to programmes is handled through placement and school admissions guidance.</p>
              <Link href="/admissions" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#C9990A] py-2.5 text-sm font-semibold text-white hover:bg-[#b8880a]">
                Admissions Guide <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubjectPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-[#0D2E6B]/10 bg-[#EDF1F9] px-3 py-1.5 text-xs font-medium text-[#0D2E6B]">
          {item}
        </span>
      ))}
    </div>
  );
}
