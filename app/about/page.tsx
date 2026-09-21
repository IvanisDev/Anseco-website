import type { Metadata } from "next";
import { Music2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.fullName}, its history, motto, values and leadership.`
};

const values = [
  {
    letter: "S",
    title: "Service",
    description: "We serve with dedication, humility, and a commitment to the welfare of others."
  },
  {
    letter: "T",
    title: "Truth",
    description: "We uphold honesty, integrity, and transparency in all our actions."
  },
  {
    letter: "A",
    title: "Accountability",
    description: "We take responsibility for our decisions, actions, and their outcomes."
  },
  {
    letter: "R",
    title: "Reliability",
    description: "We strive to be dependable, trustworthy, and consistent in fulfilling our responsibilities."
  }
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
            <div className="flex aspect-square items-center justify-center bg-[#EDF1F9] p-10 text-center">
              <div>
                <div className="mx-auto mb-5 flex h-32 w-32 items-center justify-center bg-[#0D2E6B] text-3xl font-black text-[#C9990A]">
                  HM
                </div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0D2E6B]">Mr. Newman H.K. Dziedzoave</p>
                <p className="mt-2 text-xs text-[#64748B]">Portrait to be updated</p>
              </div>
            </div>
            <div className="p-6 text-white">
              <p className="text-lg font-black">Mr. Newman H.K. Dziedzoave</p>
              <p className="mt-1 text-sm text-white/60">Anlo Senior High School</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Leadership Message</p>
            <h2 className="font-display mb-7 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">
              Welcome Address by the Headmaster
            </h2>
            <div className="space-y-5 text-base leading-8 text-[#334155]">
              <p>
                On behalf of the Board of Governors, Parents Association, Old Students, staff and the entire student body, I warmly welcome you to Anlo Senior High School, ANSECO, Anloga, &quot;The Star of Anlo-Land&quot;, in the Volta Region of Ghana.
              </p>
              <p>
                Anlo Senior High School is blessed with dedicated and hardworking staff. It also has adequate infrastructure conducive for effective teaching and learning.
              </p>
              <p>
                Mother ANSECO is a place where great men and women are made, and we look forward to seeing you come and progress to greatness.
              </p>
              <p>
                Our motto is, &quot;Truth and Service&quot;, which we believe can only be achieved through discipline and self-discipline. ANSECO is open to all persons and positioned to admit students who have been placed by CSSPS.
              </p>
              <p className="font-semibold text-[#0D2E6B]">
                You are once again warmly welcome to ANSECO; The Star of Anlo land.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="bg-[#0D2E6B] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Our Foundation</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Vision, Mission & Core Values</h2>
            <div className="mx-auto mt-7 w-fit border border-white/20 bg-white/[0.04] px-16 py-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">Motto</p>
              <p className="font-display mt-2 text-3xl italic text-[#C9990A]">&quot;{siteConfig.motto}&quot;</p>
            </div>
          </div>

          <div className="mb-10 grid gap-5 lg:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.045] p-7">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Vision</p>
              <p className="text-xl font-semibold leading-8 text-white">
                A learning community that inspires all learners to discover and develop their potentials.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.045] p-7">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Mission</p>
              <p className="text-xl font-semibold leading-8 text-white">
                To provide the learner with a suitable learning environment to facilitate professional and academic excellence.
              </p>
            </div>
          </div>

          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Our Core Values</p>
            <h3 className="font-display text-3xl font-bold leading-tight">The STAR of Anlo-Land</h3>
            <p className="mt-4 text-base leading-8 text-white/65">
              At Anlo Senior High School (ANSECO), we proudly uphold the identity of &quot;The STAR of Anlo-Land.&quot; Our STAR represents the core values that guide our conduct, shape our character, and inspire excellence in all that we do.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              return (
                <div key={value.title} className="border border-white/10 bg-white/[0.045] p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="font-display text-5xl font-bold text-[#C9990A]">{value.letter}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-black">{value.title}</h3>
                  <p className="text-sm leading-6 text-white/60">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 border-l-4 border-[#C9990A] bg-white/[0.045] p-6">
            <p className="text-lg font-black text-white">ANSECO - The STAR of Anlo-Land.</p>
            <p className="mt-2 text-base leading-7 text-white/65">
              ANSECO - Shining through Service, Truth, Accountability, and Reliability.
            </p>
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
                <h3 className="font-display mt-2 text-2xl font-bold text-[#0D2E6B]">The School Anthem</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-[#64748B]">Mr. P.K. Kpogo</p>
              </div>
              <span className="hidden h-px flex-1 bg-[#C9990A]/40 sm:block" />
            </div>
            <p className="text-lg leading-9 text-[#334155]">
              Oh Lord God bless mother ANSECO<br />
              The source of knowledge and wisdom<br />
              The producer of intellects<br />
              The Star of Anlo-Land<br />
              With Truth and Service we shall fight<br />
              To uphold her good name always<br />
              Long Live Mother ANSECO<br />
              God Bless you, for Ever<br />
              and Ever
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
