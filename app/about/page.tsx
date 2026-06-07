import type { Metadata } from "next";
import { BookOpen, Heart, Lightbulb, Music2, Shield, Star, Users, UserRound } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.fullName}, its history, motto, values and leadership.`
};

const milestones = [
  ["1959", "School founded in Anloga, Volta Region"],
  ["1960s", "First batch of WAEC examination candidates"],
  ["1970s", "Expansion of school facilities and dormitories"],
  ["1990s", "Diversification of academic programmes"],
  ["2000s", "Science block and ICT lab constructed"],
  ["2024", "Strong WASSCE performance across key programmes"]
];

const values = [
  {
    title: "Integrity",
    description: "We uphold honesty and transparency in all we do. Truth is our foundation.",
    icon: Shield
  },
  {
    title: "Service",
    description: "We train students to give back to their families, community, and nation.",
    icon: Heart
  },
  {
    title: "Excellence",
    description: "We pursue high standards in academic work, character, and sport.",
    icon: Star
  },
  {
    title: "Innovation",
    description: "We encourage creative thinking and practical problem-solving for modern Ghana.",
    icon: Lightbulb
  },
  {
    title: "Community",
    description: "We celebrate our Anlo heritage and build a strong, inclusive school family.",
    icon: Users
  },
  {
    title: "Discipline",
    description: "Structure and self-discipline are the bedrock of lasting achievement.",
    icon: BookOpen
  }
];

const managementTeam = [
  "Headmaster / Headmistress",
  "Assistant Headmaster (Academic)",
  "Assistant Headmaster (Admin)",
  "Guidance & Counselling Coordinator",
  "Head of Boarding",
  "Bursar"
];

const boardMembers = [
  "Board Chairman",
  "GES Representative",
  "PTA Representative",
  "Old Students Association Rep.",
  "Community Representative",
  "Board Secretary"
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <section className="bg-[#0D2E6B] px-5 py-16 text-center text-white shadow-[inset_0_8px_22px_rgba(0,0,0,0.18)] sm:px-8 lg:px-12">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Who We Are</p>
        <h1 className="font-display mx-auto max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          About Anlo Senior High School
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
          Over six decades of academic excellence, moral formation, and service in the Volta Region of Ghana.
        </p>
      </section>

      <section id="headmaster-message" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="overflow-hidden bg-[#0D2E6B] shadow-[0_20px_50px_rgba(13,46,107,0.12)]">
            <div className="flex aspect-[4/5] items-center justify-center bg-[#EDF1F9] p-10 text-center">
              <div>
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#0D2E6B] text-2xl font-black text-[#C9990A]">
                  HM
                </div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0D2E6B]">Headmaster</p>
                <p className="mt-2 text-xs text-[#64748B]">Portrait to be updated</p>
              </div>
            </div>
            <div className="p-6 text-white">
              <p className="text-lg font-black">Headmaster / Headmistress</p>
              <p className="mt-1 text-sm text-white/60">Anlo Senior High School</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Leadership Message</p>
            <h2 className="font-display mb-7 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">
              Message from Our Headmaster
            </h2>
            <div className="space-y-5 text-base leading-8 text-[#334155]">
              <p>
                Welcome to Anlo Senior High School, a community built on truth, service, discipline and purposeful learning. For more than six decades, ANSECO has prepared young people to think clearly, act responsibly and serve their families, communities and nation with pride.
              </p>
              <p>
                Our work as a school is not limited to classroom success. We are committed to nurturing character, confidence, curiosity and respect for others. Every student who joins ANSECO becomes part of a tradition that values hard work, moral formation and steady academic progress.
              </p>
              <p>
                I invite parents, students, alumni and friends of the school to continue partnering with us as we strengthen teaching, improve student welfare and create opportunities for every learner to discover their potential.
              </p>
              <p className="font-semibold text-[#0D2E6B]">
                Together, we will keep raising the star of Anlo land through truth and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Our History</p>
            <h2 className="font-display mb-7 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">
              Built on a Legacy of Learning
            </h2>
            <div className="space-y-5 text-base leading-8 text-[#334155]">
              <p>
                Anlo Senior High School, known widely as <strong>ANSECO</strong>, was established in <strong>{siteConfig.establishedYear}</strong> in Anloga, the historical capital of the Anlo state and seat of the Anlo Traditional Area in the Volta Region of Ghana.
              </p>
              <p>
                From its earliest days, the school was founded on a commitment to quality education and moral character, values that remain alive in every student who passes through its gates. The school motto, <em>{siteConfig.motto}</em>, is not merely decorative. It is a living code observed in academic life, student leadership, and community engagement.
              </p>
              <p>
                Over the decades, ANSECO has produced graduates who have gone on to become doctors, lawyers, engineers, educators, public servants, and community leaders. Many have shaped the development of the Volta Region and contributed significantly to Ghanaian national life.
              </p>
              <p>
                Today, the school offers six academic programmes and serves students from Anlo and beyond, continuing its mission to deliver excellent secondary education rooted in discipline and values.
              </p>
            </div>
          </div>

          <div className="border border-[#0D2E6B]/10 bg-white p-8 shadow-[0_20px_50px_rgba(13,46,107,0.08)]">
            <h3 className="mb-6 text-base font-black text-[#0D2E6B]">Key Milestones</h3>
            <div className="space-y-6">
              {milestones.map(([year, text]) => (
                <div key={year} className="grid grid-cols-[72px_1fr] gap-4 text-sm leading-6">
                  <div className="font-black text-[#C9990A]">{year}</div>
                  <div className="text-[#334155]">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="bg-[#0D2E6B] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Our Foundation</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Motto, Vision & Values</h2>
            <div className="mx-auto mt-7 w-fit border border-white/20 bg-white/[0.04] px-16 py-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">Motto</p>
              <p className="font-display mt-2 text-3xl italic text-[#C9990A]">&quot;{siteConfig.motto}&quot;</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="border border-white/10 bg-white/[0.045] p-6">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#C9990A]/25 text-[#E4B52B] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon size={28} strokeWidth={2.2} />
                  </div>
                  <h3 className="mb-3 text-lg font-black">{value.title}</h3>
                  <p className="text-sm leading-6 text-white/60">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="school-anthem" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1160px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="bg-[#0D2E6B] p-8 text-white shadow-[0_20px_50px_rgba(13,46,107,0.12)]">
            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#C9990A]/25 text-[#E4B52B]">
              <Music2 size={30} strokeWidth={2.2} />
            </div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">School Spirit</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">School Anthem</h2>
            <p className="mt-6 text-base leading-8 text-white/65">
              The ANSECO anthem is part of the school&apos;s shared identity, sung to remind students of discipline, loyalty, service and pride in the school community.
            </p>
          </div>

          <div className="border border-[#0D2E6B]/10 bg-[#F8F7F3] p-8 shadow-[0_20px_50px_rgba(13,46,107,0.06)]">
            <div className="mb-8 flex items-center justify-between gap-6 border-b border-[#0D2E6B]/10 pb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Official Lyrics</p>
                <h3 className="font-display mt-2 text-2xl font-bold text-[#0D2E6B]">ANSECO School Anthem</h3>
              </div>
              <span className="hidden h-px flex-1 bg-[#C9990A]/40 sm:block" />
            </div>
            <div className="space-y-8 text-lg leading-9 text-[#334155]">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Verse</p>
                <p>
                  Oh Lord God bless Mother Anseco<br />
                  The source of knowledge and wisdom<br />
                  The producer of intellects<br />
                  The star of Anlo land<br />
                  With truth and service, we shall fight<br />
                  To uphold her good name always
                </p>
              </div>
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Chorus / Refrain</p>
                <p>
                  Long live mother Anseco<br />
                  God bless you forever and ever
                </p>
              </div>
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Repeat</p>
                <p>
                  With truth and service, we shall fight<br />
                  To uphold her good name always<br />
                  Long live mother ANSECO,<br />
                  God bless you forever and ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="management" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Administration</p>
          <h2 className="font-display mb-10 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">School Management Team</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {managementTeam.map((role) => (
              <PersonCard key={role} title={role} icon="user" />
            ))}
          </div>
          <p className="mt-6 text-sm text-[#94A3B8]">Leadership information is updated periodically. Contact the school for current details.</p>
        </div>
      </section>

      <section id="board" className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Governance</p>
          <h2 className="font-display mb-5 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">Board of Directors</h2>
          <p className="mb-10 max-w-3xl text-base leading-7 text-[#334155]">
            The ANSECO Governing Board provides strategic oversight and governance of the school in accordance with Ghana Education Service regulations.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((role) => (
              <PersonCard key={role} title={role} icon="shield" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PersonCard({ title, icon }: { title: string; icon: "user" | "shield" }) {
  const Icon = icon === "user" ? UserRound : Shield;

  return (
    <div className="flex items-center gap-5 bg-white p-6 shadow-[0_15px_36px_rgba(13,46,107,0.06)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDF1F9] text-[#7B95C8]">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="text-sm font-black text-[#0D2E6B]">{title}</h3>
        <p className="mt-1 text-xs text-[#94A3B8]">TBD — Position Active</p>
      </div>
    </div>
  );
}
