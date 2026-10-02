import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import { ArrowRight, HandHeart, Images, Shield, Star, Trophy, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { seniorPrefects } from "@/data/school-leadership";

export const metadata: Metadata = { title: "Campus Life", description: "Student life, leadership, culture, service and everyday experiences at ANSECO." };

const destinations = [
  { title: "Clubs & Societies", description: "Explore student organizations, service groups, Cadet, cultural and religious groups.", href: "/campus-life/clubs-societies", icon: Users },
  { title: "Sports & Athletics", description: "Learn about sporting activities, athletics and inter-house participation.", href: "/campus-life/sports-athletics", icon: Trophy },
  { title: "Boarding & Day Students", description: "Discover boarding life, day student guidance and ANSECO's four confirmed school houses.", href: "/campus-life/boarding-day-students", icon: Shield }
];
const leadership = ["Students' Representative Council (SRC)", "School prefect body", "House prefects", "Class governors"];
const community = ["School assemblies", "Clean-up activities", "Tree planting", "Health outreach", "Student welfare", "Community visits"];

export default function CampusLifePage() {
  return <div className="bg-[#F8F7F3]">
    <PageHeader title="Campus Life" eyebrow="Student Life" description="Everyday life at ANSECO develops character, leadership, belonging and service beyond the classroom." />
    <section className="bg-white py-20 sm:py-24"><div className="mx-auto grid max-w-[1160px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12"><div><p className="text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">The Student Experience</p><h2 className="font-display mt-3 text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">Life, leadership and community</h2></div><div className="border-t-4 border-[#0D2E6B] pt-7 text-base leading-8 text-[#475569] sm:text-lg"><p>Student life at ANSECO combines academic responsibility with leadership, culture, service, assemblies and shared school experiences. Students take part in supervised activities that build confidence, teamwork and commitment to the school community.</p></div></div></section>
    <section className="py-20 sm:py-24"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><div className="mb-10"><p className="text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Explore Campus Life</p><h2 className="font-display mt-3 text-4xl font-bold text-[#0D2E6B] sm:text-5xl">Student activities and residential life</h2></div><div className="grid gap-5 md:grid-cols-3">{destinations.map((item) => { const Icon = item.icon; return <Link key={item.href} href={item.href} className="group flex min-h-72 flex-col border border-[#0D2E6B]/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_20px_45px_rgba(13,46,107,0.08)]"><div className="flex h-12 w-12 items-center justify-center bg-[#0D2E6B] text-[#FACC15]"><Icon size={22} /></div><h3 className="mt-8 text-2xl font-black text-[#0D2E6B]">{item.title}</h3><p className="mt-4 text-sm leading-7 text-[#64748B]">{item.description}</p><span className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B]">Explore <ArrowRight size={14} /></span></Link>; })}</div></div></section>
    <section className="bg-[#0D2E6B] py-20 text-white sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12"><ExperienceList icon={<Star size={20} />} eyebrow="Student Leadership" title="Learning to lead" items={leadership} /><ExperienceList icon={<HandHeart size={20} />} eyebrow="Culture & Service" title="Building community" items={community} /></div></section>
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-12">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Student Leadership</p>
        <h2 className="font-display mt-3 text-4xl font-bold text-[#0D2E6B] sm:text-5xl">Senior Prefects</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#64748B]">Senior prefects support student leadership, school programmes and the wellbeing of the student body.</p>
        <div className="mt-10 overflow-hidden border border-[#0D2E6B]/10">
          <div className="grid grid-cols-2 bg-[#0D2E6B] text-white">
            <p className="px-5 py-4 text-sm font-black uppercase tracking-[0.14em]">Boys</p>
            <p className="border-l border-white/15 px-5 py-4 text-sm font-black uppercase tracking-[0.14em]">Girls</p>
          </div>
          {seniorPrefects.map((prefect) => (
            <div key={prefect.boys} className="grid grid-cols-2 border-t border-[#0D2E6B]/10 bg-[#F8F7F3] first:border-t-0">
              <p className="px-5 py-4 font-bold text-[#334155]">{prefect.boys}</p>
              <p className="border-l border-[#0D2E6B]/10 px-5 py-4 font-bold text-[#334155]">{prefect.girls}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-white py-16"><div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div className="flex items-start gap-4"><Images className="mt-1 shrink-0 text-[#C9990A]" size={25} /><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Campus Life in Pictures</p><h2 className="font-display mt-2 text-3xl font-bold text-[#0D2E6B]">Explore student life, houses, sport and culture</h2></div></div><Link href="/gallery" className="inline-flex w-fit items-center gap-3 border-b-2 border-[#C9990A] pb-2 text-sm font-black uppercase tracking-[0.12em] text-[#0D2E6B] hover:text-[#C9990A]">View photos <ArrowRight size={16} /></Link></div></section>
    <section className="bg-[#0D2E6B] py-16 text-white"><div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#E4B52B]">Student Conduct & Discipline</p><h2 className="font-display mt-2 text-3xl font-bold">Know the standards that guide campus life</h2></div><Link href="/admissions/student-guidelines#student-conduct-discipline" className="inline-flex w-fit items-center gap-3 bg-[#E4B52B] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#0D2E6B] transition-colors hover:bg-white">View School Regulations <ArrowRight size={17} /></Link></div></section>
  </div>;
}

function ExperienceList({ icon, eyebrow, title, items }: { icon: React.ReactNode; eyebrow: string; title: string; items: string[] }) {
  return <div><div className="flex items-center gap-3 text-[#FACC15]">{icon}<p className="text-xs font-black uppercase tracking-[0.22em]">{eyebrow}</p></div><h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{title}</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{items.map((item) => <div key={item} className="border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-semibold text-white/75">{item}</div>)}</div></div>;
}
