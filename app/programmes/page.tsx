import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getProgrammes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Explore academic programmes offered by Anlo Senior High School."
};

const programmeMeta: Record<string, { image: string; tagline: string }> = {
  "general-arts": { image: "/images/optimized/general-arts.jpg", tagline: "Humanities, Languages & Social Science" },
  "general-science": { image: "/images/optimized/general-science.jpg", tagline: "Physics, Chemistry, Biology & Mathematics" },
  business: { image: "/images/optimized/business.jpg", tagline: "Accounting, Economics & Management" },
  "agricultural-science": { image: "/images/optimized/agricultural-science.jpg", tagline: "Animal Science, Crop Science & Agribusiness" },
  "home-economics": { image: "/images/optimized/home-economics.jpg", tagline: "Food, Nutrition & Management" },
  "visual-arts": { image: "/images/optimized/visual-arts.jpg", tagline: "Design, Fine Art & Creative Practice" }
};

export default function ProgrammesPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Find Your Path at ANSECO" eyebrow="Academic Programmes" description="Six distinct programmes to match student strengths, interests and future ambitions." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getProgrammes().map((programme) => {
            const meta = programmeMeta[programme.slug];
            return (
              <Link key={programme.slug} href={`/programmes/${programme.slug}`} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition-all hover:border-[#0D2E6B]/20 hover:shadow-md">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <Image src={meta.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h2 className="mb-1 text-base font-bold text-[#0D2E6B] transition-colors group-hover:text-[#C9990A]">{programme.name}</h2>
                  <p className="mb-2 text-xs font-medium text-[#C9990A]">{meta.tagline}</p>
                  <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">{programme.overview}</p>
                  <div className="mt-4 text-xs font-semibold text-[#0D2E6B]">
                    View programme
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
