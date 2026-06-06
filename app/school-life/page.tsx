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
const clubs = ["Science & Maths Club", "Debating & Public Speaking", "Environmental Club", "Red Cross Society", "Drama & Arts Club", "Press Club", "Christian Fellowship", "Student Leadership", "Cadet Club"];
const houses = [
  ["Nkrumah House", "Red", "#DC2626"],
  ["Awooner-Williams House", "Blue", "#1D4ED8"],
  ["Mensah-Sarbah House", "Green", "#15803D"],
  ["Agbodeka House", "Yellow", "#CA8A04"]
];

export default function SchoolLifePage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="School Life" eyebrow="Life at ANSECO" description="Education at ANSECO goes beyond the classroom through sport, culture, leadership, boarding life and community service." />
      <Section id="sports" icon={<Trophy size={18} />} kicker="On the Field" title="Sports & Athletics" white>
        <Grid items={sports} prefix="Students participate in supervised training, house competitions and school events through" />
      </Section>
      <Section id="clubs" icon={<Users size={18} />} kicker="Student-Led" title="Clubs & Societies" white>
        <Grid items={clubs} prefix="Students build confidence, teamwork and service through" />
      </Section>
      <Section id="boarding" icon={<Home size={18} />} kicker="Residential Life" title="Boarding Life">
        <Grid items={["Separate dormitories", "Meals provided", "Evening prep", "Weekend activities", "House system", "Campus security"]} prefix="Boarding life includes" />
      </Section>
      <Section id="houses" icon={<Shield size={18} />} kicker="House System" title="School Houses" white>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {houses.map(([name, colour, hex]) => (
            <div key={name} className="overflow-hidden rounded-xl border border-gray-100 bg-[#F8F7F3]">
              <div className="h-2" style={{ backgroundColor: hex }} />
              <div className="p-5">
                <span className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: hex }}>{colour}</span>
                <h3 className="mt-3 font-bold text-[#0D2E6B]">{name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">House members compete in academics, sports, culture and community service.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="student-government" icon={<Star size={18} />} kicker="Leadership" title="Student Government">
        <Grid items={["SRC", "School prefect body", "House prefects", "Class governors"]} prefix="Student leadership is developed through" />
      </Section>
      <section id="alumni" className="bg-[#0D2E6B] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2 flex items-center gap-3"><GraduationCap size={18} className="text-[#C9990A]" /><p className="text-xs font-bold uppercase tracking-widest text-[#C9990A]">Old Students</p></div>
          <h2 className="font-display mb-4 text-2xl sm:text-3xl">ANSECO Old Students Association</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/70">Alumni support the school through mentorship, approved donations, career guidance and community connection.</p>
          <Link href="/alumni" className="mt-6 inline-flex rounded-lg bg-[#C9990A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#b8880a]">Alumni contact</Link>
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
    <section id={id} className={`py-16 ${white ? "bg-white" : "bg-[#F8F7F3]"}`}>
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
        <div key={item} className="rounded-xl border border-[#0D2E6B]/10 bg-[#EDF1F9] p-5">
          <h3 className="mb-1 font-bold text-[#0D2E6B]">{item}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{prefix} {item.toLowerCase()}.</p>
        </div>
      ))}
    </div>
  );
}
