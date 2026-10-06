import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Shield, Trophy, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { seniorPrefects } from "@/data/school-leadership";

export const metadata: Metadata = { title: "Campus Life", description: "Student life, leadership, culture, service and everyday experiences at ANSECO." };

const destinations = [
  { title: "Clubs & Societies", description: "Explore student organizations, service groups, Cadet, cultural and religious groups.", href: "/campus-life/clubs-societies", icon: Users },
  { title: "Sports & Athletics", description: "Learn about sporting activities, athletics and inter-house participation.", href: "/campus-life/sports-athletics", icon: Trophy },
  { title: "Boarding & Day Students", description: "Discover boarding life, day student guidance and ANSECO's four confirmed school houses.", href: "/campus-life/boarding-day-students", icon: Shield },
  { title: "Campus Facilities", description: "Explore the assembly hall, dining hall, sick bay and sports field that support daily campus life.", href: "/campus-life/facilities", icon: Building2 }
];
const leadership = ["Students' Representative Council (SRC)", "School prefect body", "House prefects", "Class governors"];
const community = ["School assemblies", "Clean-up activities", "Tree planting", "Health outreach", "Student welfare", "Community visits"];

export default function CampusLifePage() {
  return <div className="bg-[#F8F7F3]">
    <PageHeader title="Campus Life" eyebrow="Student Life" description="Everyday life at ANSECO develops character, leadership, belonging and service beyond the classroom." />
    <section className="bg-white py-20 sm:py-24"><div className="mx-auto grid max-w-[1160px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12"><div><h2 className="font-display mt-3 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">Life, leadership and community</h2></div><div className="text-base leading-8 text-[#4A4A4A] sm:text-lg"><p>Student life at ANSECO combines academic responsibility with leadership, culture, service, assemblies and shared school experiences. Students take part in supervised activities that build confidence, teamwork and commitment to the school community.</p></div></div></section>
    <section className="py-20 sm:py-24"><div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"><div className="mb-10"><h2 className="font-display mt-3 text-4xl font-bold text-[#1A1A1A] sm:text-5xl">Student activities and residential life</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{destinations.map((item) => { const Icon = item.icon; return <Link key={item.href} href={item.href} className="group flex min-h-72 flex-col rounded-[12px] border border-[#0D2E6B]/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_20px_45px_rgba(13,46,107,0.08)]"><div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#0D2E6B] text-[#FACC15]"><Icon size={22} /></div><h3 className="mt-8 text-2xl font-black text-[#1A1A1A]">{item.title}</h3><p className="mt-4 text-sm leading-7 text-[#666666]">{item.description}</p><span className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-black uppercase tracking-[0.12em] text-[#1A1A1A]">Explore <ArrowRight size={14} /></span></Link>; })}</div></div></section>
    <section className="bg-[#0D2E6B] py-20 text-white sm:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12"><div><ExperienceList title="Student Leadership" items={leadership} /><p className="mt-8 max-w-xl text-sm leading-7 text-white/70">Senior prefects support student leadership, school programmes and the wellbeing of the student body.</p><div className="mt-6 overflow-hidden rounded-[12px] border border-white/15">
          <div className="grid grid-cols-2 bg-[#0D2E6B] text-white">
            <p className="px-5 py-4 text-sm font-black uppercase tracking-[0.14em]">Boys</p>
            <p className="border-l border-white/15 px-5 py-4 text-sm font-black uppercase tracking-[0.14em]">Girls</p>
          </div>
          {seniorPrefects.map((prefect) => (
            <div key={prefect.boys} className="grid grid-cols-2 border-t border-white/10 bg-white/[0.05] first:border-t-0">
              <p className="px-5 py-4 font-bold text-white/85">{prefect.boys}</p>
              <p className="border-l border-white/10 px-5 py-4 font-bold text-white/85">{prefect.girls}</p>
            </div>
          ))}
        </div></div><ExperienceList title="Building Community" items={community} /></div></section>
    <section className="bg-white py-16"><div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><h2 className="font-display text-3xl font-bold text-[#1A1A1A]">Explore student life, houses, sport and culture</h2><Link href="/gallery" className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full border-2 border-[#0D2E6B] px-7 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#1A1A1A] transition-colors hover:bg-[#0D2E6B] hover:text-white">View photos <ArrowRight size={16} /></Link></div></section>
    <section className="bg-[#0D2E6B] py-16 text-white"><div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><h2 className="font-display mt-2 text-3xl font-bold">Know the standards that guide campus life</h2></div><Link href="/admissions/student-guidelines#student-conduct-discipline" className="inline-flex w-fit items-center gap-3 bg-[#E4B52B] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#1A1A1A] transition-colors hover:bg-white">View School Regulations <ArrowRight size={17} /></Link></div></section>
  </div>;
}

function ExperienceList({ title, items }: { title: string; items: string[] }) {
  return <div><h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{items.map((item) => <div key={item} className="border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-semibold text-white/75">{item}</div>)}</div></div>;
}
