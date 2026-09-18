import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import { GraduationCap, HandHeart, Home, Shield, Star, Trophy, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "School Life",
  description: "Sports, clubs, boarding, houses, student leadership and alumni life at ANSECO."
};

const sports = ["Football", "Athletics", "Table Tennis", "Volleyball", "Basketball", "Swimming"];
const clubGroups = [
  { sn: "1", groupA: "French Society", groupB: "Red Cross Society" },
  { sn: "2", groupA: "Geographical Society", groupB: "Wildlife Club" },
  { sn: "3", groupA: "Mathematics & Science Club", groupB: "Green Earth Club" },
  { sn: "4", groupA: "National Association of Business Students (NABS)", groupB: "Civic Education Club (NCCE)" },
  { sn: "5", groupA: "Ghana United Nations Student Association (GUNSA)", groupB: "Drama & Debating Society" },
  { sn: "6", groupA: "Robotics Club", groupB: "" }
];

const nonGroupedClubs = [
  "Scripture Union",
  "School Choir",
  "Junior Achievers",
  "Muslim Group",
  "Cadet Corps",
  "Catholic Student Union",
  "Cultural Troupe",
  "EPSU",
  "GESAM",
  "AGCM",
  "PENSA"
];

const clubBenefits = [
  "It gives students social experiences through discussions and exchange of views or opinions.",
  "It breaks down barriers and monotony of class activities in the school. Both juniors and seniors belong to one club or society.",
  "It presents opportunities for students to practise public speaking and overcome stage fright, for instance, through Drama and Debating societies.",
  "It offers individual opportunities for group socialization.",
  "It helps students make good use of their leisure time.",
  "Students unravel their leadership potentials by organizing their own activities.",
  "Students' involvement in club activities can help shape their career paths. For instance, one can become a journalist through writing activities or a nurse through the Red Cross Society.",
  "It supports students for purposes of testimonial."
];
const houses = [
  ["Adeladza House", "Red", "#DC2626"],
  ["Doe House", "Green", "#15803D"],
  ["Fiagbe House", "Blue", "#1D4ED8"],
  ["Sorkpor House", "Yellow", "#CA8A04"]
];

const houseParents = [
  { name: "Mr. Emmanuel M.C. Agbakpe", role: "Snr. Housemaster" },
  { name: "Mad. Sophia K. Komabu", role: "Snr. Housemistress" }
];

export default function SchoolLifePage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="School Life" eyebrow="Life at ANSECO" description="Education at ANSECO goes beyond the classroom through sport, culture, leadership, boarding life and community service." />
      <Section id="sports" icon={<Trophy size={18} />} kicker="On the Field" title="Sports & Athletics" white>
        <Grid items={sports} prefix="Students participate in supervised training, house competitions and school events through" />
      </Section>
      <Section id="clubs" icon={<Users size={18} />} kicker="Student-Led" title="Clubs & Societies" white>
        <div className="space-y-8">
          <div className="max-w-3xl border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5">
            <p className="text-sm leading-7 text-[#334155]">
              Students are expected to belong to two clubs: one in Group A and another in Group B.
            </p>
          </div>

          <div className="overflow-hidden border border-[#0D2E6B]/10 bg-[#F8F7F3]">
            <div className="bg-[#0D2E6B] px-5 py-4">
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Groupings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <thead className="bg-[#EDF1F9] text-[#0D2E6B]">
                  <tr>
                    <th className="w-20 px-5 py-3 font-black uppercase tracking-[0.08em]">S/N</th>
                    <th className="px-5 py-3 font-black uppercase tracking-[0.08em]">Group A</th>
                    <th className="px-5 py-3 font-black uppercase tracking-[0.08em]">Group B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0D2E6B]/10 bg-white">
                  {clubGroups.map((club) => (
                    <tr key={club.sn}>
                      <td className="px-5 py-4 font-black text-[#C9990A]">{club.sn}</td>
                      <td className="px-5 py-4 font-semibold text-[#0D2E6B]">{club.groupA}</td>
                      <td className="px-5 py-4 text-[#334155]">{club.groupB || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black uppercase tracking-[0.08em] text-[#0D2E6B]">Non-Grouping</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nonGroupedClubs.map((club) => (
                <div key={club} className="border border-[#0D2E6B]/10 bg-[#EDF1F9] px-5 py-4 font-bold text-[#0D2E6B]">
                  {club}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#0D2E6B]/10 bg-[#F8F7F3] p-6">
            <h3 className="mb-5 text-lg font-black uppercase tracking-[0.08em] text-[#0D2E6B]">Benefits of Clubs and Societies</h3>
            <ol className="grid gap-4 text-sm leading-7 text-[#334155] lg:grid-cols-2">
              {clubBenefits.map((benefit, index) => (
                <li key={benefit} className="flex gap-4 rounded-lg bg-white p-4">
                  <span className="font-black text-[#C9990A]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
      <Section id="boarding" icon={<Home size={18} />} kicker="Residential Life" title="Boarding Life">
        <Grid items={["Separate dormitories", "Meals provided", "Evening prep", "Weekend activities", "House system", "Campus security"]} prefix="Boarding life includes" />
      </Section>
      <Section id="houses" icon={<Shield size={18} />} kicker="House System" title="School Houses" white>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {houses.map(([name, colour, hex]) => (
            <div key={name} className="overflow-hidden border border-gray-100 bg-[#F8F7F3]">
              <div className="h-2" style={{ backgroundColor: hex }} />
              <div className="p-5">
                <span className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: hex }}>{colour}</span>
                <h3 className="mt-3 font-bold text-[#0D2E6B]">{name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">House members compete in academics, sports, culture and community service.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 border border-[#0D2E6B]/10 bg-[#F8F7F3] p-5">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">House Parents</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {houseParents.map((parent) => (
              <div key={parent.name} className="border border-[#0D2E6B]/10 bg-white p-5">
                <h3 className="font-black uppercase tracking-[0.04em] text-[#0D2E6B]">{parent.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#64748B]">{parent.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="student-government" icon={<Star size={18} />} kicker="Leadership" title="Student Government">
        <Grid items={["SRC", "School prefect body", "House prefects", "Class governors"]} prefix="Student leadership is developed through" />
      </Section>
      <section id="alumni" className="scroll-mt-28 bg-[#0D2E6B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2 flex items-center gap-3"><GraduationCap size={18} className="text-[#C9990A]" /><p className="text-xs font-bold uppercase tracking-widest text-[#C9990A]">ANSSOSA</p></div>
          <h2 className="font-display mb-4 text-2xl sm:text-3xl">ANSSOSA</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/70">ANSSOSA supports the school through mentorship, approved donations, career guidance and community connection.</p>
          <Link href="/alumni" className="mt-6 inline-flex rounded-lg bg-[#C9990A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#b8880a]">ANSSOSA contact</Link>
        </div>
      </section>
      <Section id="community" icon={<HandHeart size={18} />} kicker="Outreach & Service" title="Community Building" white>
        <Grid items={["Clean-up activities", "Tree planting", "Health outreach", "Literacy support", "Student welfare", "Community visits"]} prefix="Students learn service through" />
      </Section>
    </div>
  );
}

function Section({ id, icon, kicker, title, children, white = false }: { id: string; icon: React.ReactNode; kicker: string; title: string; children: React.ReactNode; white?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 ${white ? "bg-white" : "bg-[#F8F7F3]"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 flex items-center gap-3 text-[#C9990A]">{icon}<p className="text-xs font-bold uppercase tracking-widest">{kicker}</p></div>
        <h2 className="font-display mb-8 text-2xl text-[#0D2E6B] sm:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Grid({ items, prefix }: { items: string[]; prefix: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="border border-[#0D2E6B]/10 bg-[#EDF1F9] p-5">
          <h3 className="mb-1 font-bold text-[#0D2E6B]">{item}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{prefix} {item.toLowerCase()}.</p>
        </div>
      ))}
    </div>
  );
}
