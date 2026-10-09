import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { boardingFeatures, houses } from "@/data/campus-life";
import { boardingLeadership } from "@/data/school-leadership";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Boarding & Day Students",
  description: "Boarding life, day student life and the four school houses at ANSECO.",
  path: "/campus-life/boarding-day-students/"
});

export default function BoardingDayStudentsPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader eyebrow="Campus Life" title="Boarding & Day Students" description="ANSECO is a boarding and day school, with both groups forming an important part of the school community." />
      <div className="mx-auto max-w-[1400px] space-y-20 px-5 py-20 sm:px-8 lg:px-12">
        <section>
          <h2 className="mb-8 text-xs font-black uppercase tracking-[0.22em] text-[#8A6700]">Life as a Boarding Student</h2>
          <p className="mb-7 max-w-3xl text-base leading-8 text-[#4A4A4A]">Boarding students live and learn within ANSECO&apos;s structured residential community. Daily life includes meals, evening preparation, house activities and supervised routines that support study, responsibility and participation in school life.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{boardingFeatures.map((item) => <div key={item} className="border border-[#0D2E6B]/10 bg-white p-6 text-lg font-black text-[#1A1A1A]">{item}</div>)}</div>
          <div className="mt-7 flex flex-wrap gap-5"><Link href="/admissions/prospectus#boarding" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#8A6700]">View requirements <ArrowRight size={14} /></Link><Link href="/admissions/student-guidelines" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#8A6700]">School regulations <ArrowRight size={14} /></Link></div>
        </section>

        <section>
          <h2 className="mb-8 text-xs font-black uppercase tracking-[0.22em] text-[#8A6700]">Life as a Day Student</h2>
          <p className="mb-7 max-w-3xl text-base leading-8 text-[#4A4A4A]">Day students are an integral part of ANSECO and participate in academics and approved school activities. Families should review the current day-student requirements and school regulations before reporting.</p>
          <div className="mt-7 flex flex-wrap gap-5"><Link href="/admissions/prospectus" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#8A6700]">View requirements <ArrowRight size={14} /></Link><Link href="/admissions/student-guidelines" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#8A6700]">School regulations <ArrowRight size={14} /></Link></div>
        </section>

        <section>
          <div className="mb-8 flex items-center gap-3 text-[#8A6700]"><Shield size={20} /><h2 className="font-display text-3xl font-bold text-[#1A1A1A]">Our Houses</h2></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{houses.map((house) => <article key={house.name} className="overflow-hidden rounded-[12px] border border-[#0D2E6B]/10 bg-white"><div className="p-5"><span className={`inline-block rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${house.colour === "Yellow" ? "text-[#1A1A1A]" : "text-white"}`} style={{ backgroundColor: house.hex }}>{house.colour} House</span><h3 className="mt-4 text-lg font-black text-[#1A1A1A]">{house.name}</h3><p className="mt-3 text-sm leading-6 text-[#666666]">House members participate in academics, sports, culture and community service.</p></div></article>)}</div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-bold text-[#1A1A1A]">Boarding Leadership</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">{boardingLeadership.slice(0, 2).map((leader) => <div key={leader.name} className="border border-[#0D2E6B]/10 bg-white p-6"><h3 className="text-lg font-black text-[#1A1A1A]">{leader.name}</h3><p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#666666]">{leader.role}</p></div>)}</div>
        </section>
      </div>
    </div>
  );
}
