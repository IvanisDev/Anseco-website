import { PageHeader } from "@/components/page-header";
import { clubBenefits, clubGroups, nonGroupedClubs } from "@/data/campus-life";

import { pageMetadata } from "@/lib/metadata";
const benefitThemes = [
  ["Leadership", "Students organize activities, take responsibility and develop confidence in leading others."],
  ["Communication", "Discussion, public speaking, drama and debate help students express ideas with confidence."],
  ["Community & Friendship", "Clubs connect students across year groups through shared interests, teamwork and service."],
  ["Career Exploration", "Practical club experiences can reveal interests and introduce students to possible career paths."]
];

export const metadata = pageMetadata({
  title: "Clubs & Societies",
  description: "Clubs, societies, service groups and student organizations at ANSECO.",
  path: "/campus-life/clubs-societies/"
});

export default function ClubsSocietiesPage() {
  return <div className="bg-[#F8F7F3]"><PageHeader eyebrow="Campus Life" title="Clubs & Societies" description="Student organizations provide opportunities for service, leadership, creativity, faith and shared interests." /><div className="mx-auto max-w-[1160px] space-y-14 px-5 py-20 sm:px-8 lg:px-12"><section><div className="overflow-hidden rounded-[12px] border border-[#0D2E6B]/10 bg-white"><div className="bg-[#0D2E6B] px-5 py-4"><h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">Club Groupings</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] border-collapse text-left text-sm"><thead className="bg-[#EDF1F9] text-[#1A1A1A]"><tr><th className="w-20 px-5 py-3">S/N</th><th className="px-5 py-3">Group A</th><th className="px-5 py-3">Group B</th></tr></thead><tbody className="divide-y divide-[#0D2E6B]/10">{clubGroups.map((club) => <tr key={club.sn}><td className="px-5 py-4 font-black text-[#8A6700]">{club.sn}</td><td className="px-5 py-4 font-semibold text-[#1A1A1A]">{club.groupA}</td><td className="px-5 py-4 text-[#333333]">{club.groupB || "-"}</td></tr>)}</tbody></table></div></div><p className="mt-6 max-w-3xl rounded-[12px] bg-white p-6 text-base leading-8 text-[#333333]">Students are expected to belong to two clubs: one in Group A and another in Group B.</p></section><section><h2 className="font-display text-3xl font-bold text-[#1A1A1A]">Other Student Groups</h2><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{nonGroupedClubs.map((club) => <div key={club} className="rounded-[8px] border border-[#0D2E6B]/10 bg-white px-5 py-4 font-bold text-[#1A1A1A]">{club}</div>)}</div></section><section><h2 className="font-display text-3xl font-bold text-[#1A1A1A]">Benefits of Participation</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{benefitThemes.map(([title, description]) => <article key={title} className="rounded-[12px] border border-[#0D2E6B]/10 bg-white p-6"><h3 className="text-xl font-black text-[#1A1A1A]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#555555]">{description}</p></article>)}</div><details className="mt-5 rounded-[12px] border border-[#0D2E6B]/10 bg-white p-5"><summary className="min-h-11 cursor-pointer py-2 font-black text-[#1A1A1A]">Read the detailed benefits</summary><ol className="mt-4 grid gap-3 border-t border-[#0D2E6B]/10 pt-5 lg:grid-cols-2">{clubBenefits.map((benefit, index) => <li key={benefit} className="flex gap-3 text-sm leading-7 text-[#4A4A4A]"><span className="font-black text-[#8A6700]">{String(index + 1).padStart(2, "0")}</span><span>{benefit}</span></li>)}</ol></details></section></div></div>;
}
