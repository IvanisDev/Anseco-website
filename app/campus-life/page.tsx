import Link from "next/link";
import { ArrowRight, Building2, Shield, Trophy, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { seniorPrefects } from "@/data/school-leadership";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Campus Life",
  description: "Student life, leadership, culture, service and everyday experiences at ANSECO.",
  path: "/campus-life/"
});

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
    <section className="bg-[#0D2E6B] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Student Leadership</h2>
          <p className="mt-5 text-base leading-8 text-white/70">Students take responsibility for school programmes, representation and the wellbeing of the student body.</p>
        </div>

        <div className="grid gap-6">
          <div className="grid rounded-[12px] border-t-4 border-[#E4B52B] bg-white p-7 text-[#1A1A1A] shadow-[0_24px_60px_rgba(3,15,40,0.28)] sm:p-9 lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8A6700]">School Prefect Body</p>
              <h3 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">Senior Prefects</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#666666]">The published senior prefect body represents students and supports leadership across ANSECO.</p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-0">
              {[
                { label: "Boys", names: seniorPrefects.map((prefect) => prefect.boys) },
                { label: "Girls", names: seniorPrefects.map((prefect) => prefect.girls) }
              ].map((group) => (
                <div key={group.label} className="rounded-[8px] border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5">
                  <h4 className="text-xs font-black uppercase tracking-[0.18em] text-[#8A6700]">{group.label}</h4>
                  <div className="mt-4 divide-y divide-[#0D2E6B]/10">
                    {group.names.map((name) => (
                      <p key={name} className="py-4 text-base font-black leading-7 text-[#1A1A1A] first:pt-0 last:pb-0">{name}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            <ExperienceList title="Leadership Network" items={leadership} />
            <ExperienceList title="Building Community" items={community} />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-16"><div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><h2 className="font-display text-3xl font-bold text-[#1A1A1A]">Explore student life, houses, sport and culture</h2><Link href="/gallery" className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full border-2 border-[#0D2E6B] px-7 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#1A1A1A] transition-colors hover:bg-[#0D2E6B] hover:text-white">View photos <ArrowRight size={16} /></Link></div></section>
    <section className="bg-[#0D2E6B] py-16 text-white"><div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><h2 className="font-display mt-2 text-3xl font-bold">Know the standards that guide campus life</h2></div><Link href="/admissions/student-guidelines#student-conduct-discipline" className="inline-flex w-fit items-center gap-3 bg-[#E4B52B] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#1A1A1A] transition-colors hover:bg-white">View School Regulations <ArrowRight size={17} /></Link></div></section>
  </div>;
}

function ExperienceList({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-[12px] border border-white/10 bg-white/[0.045] p-6"><h3 className="font-display text-2xl font-bold">{title}</h3><div className="mt-5 grid gap-3">{items.map((item) => <div key={item} className="bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white/75">{item}</div>)}</div></div>;
}
