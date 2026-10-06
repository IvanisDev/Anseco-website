import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Our History",
  description: "The history, milestones and former headmasters of Anlo Senior High School."
};

const headmasters = [
  { name: "Mr. Isaiah Y. Fiagbe", period: "1959–1960" },
  { name: "Mr. Evans Agbottah", period: "1960–1963" },
  { name: "Mr. Sosthenes D. Sorkpor", period: "1963–1987" },
  { name: "Mr. Eric K. Dzikunu", period: "1987–1993" },
  { name: "Mr. Jackson K. Akpade", period: "1994–1999" },
  { name: "Mr. Emmanuel K. Ketteku", period: "2000–2006" },
  { name: "Mr. Wilberforce I.K. Azumah", period: "2006–2014" },
  { name: "Mr. Gideon Tay", period: "2014–2017" },
  { name: "Mr. Ganya A.S. Ladzekpo", period: "2017–2020" },
  { name: "Mr. Kplorla K. Mensah-Gbekor", period: "2020–2021" },
  { name: "Mr. Wisdom K. Adeti", period: "2021–2025" },
  { name: "Mr. Newman H.K. Dziedzoave", period: "2025–Present" }
];

const milestones = [
  {
    year: "2007",
    title: "National Champion",
    description: "Inter-School Constitution Game Competition"
  },
  {
    year: "2008–2010",
    title: "Best Disciplined School",
    description: "Volta Region, three consecutive years"
  },
  {
    year: "2010",
    title: "National Champion",
    description: "Inter-School Constitution Game Competition"
  },
  {
    year: "2012",
    title: "NSMQ Participation",
    description: "ANSECO begins appearing in the National Science and Maths Quiz"
  },
  {
    year: "2017",
    title: "NSMQ Quarter-Finalist",
    description: "ANSECO reaches the quarter-final stage of the National Science and Maths Quiz"
  },
  {
    year: "2021",
    title: "Renewable Energy Quiz",
    description: "Volta Regional Champion and 4th in the Southern Zonal Competition"
  }
];

const historyTimeline = [
  { year: "1954", title: "Initial Establishment", description: "ANSECO was established in August to support education and training for young people in Anlo-Land." },
  { year: "1959", title: "Re-opening", description: "The school reopened on 10 April through the efforts of its founding fathers and the wider community." },
  { year: "1963/64", title: "Government-Assisted Status", description: "ANSECO was enlisted among Ghana's Government-Assisted Secondary Schools." },
  { year: "2026", title: "2,094 Students", description: "The published 2026 student population records the school's growth from its initial nine learners." }
];

const foundingFathers = [
  { name: "Togbi Adeladza II", description: "Awoamefia of Anlo" },
  { name: "Mr. Cephas Kofi Fiagbe", description: "Founding father" },
  { name: "Mr. James W.K. Doe", description: "Founding father" }
];

export default function OurHistoryPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Our History"
        title="The History of Anlo Senior High School"
        description="From a community-supported beginning to a leading public senior high school serving Anlo-Land and the Volta Region."
      />

      <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 lg:px-12">
        <section aria-labelledby="history-timeline-title">
          <h2 id="history-timeline-title" className="font-display text-3xl font-bold text-[#1A1A1A] sm:text-4xl">ANSECO Through the Years</h2>
          <ol className="mt-8 grid overflow-hidden rounded-[12px] border border-[#0D2E6B]/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {historyTimeline.map((item, index) => (
              <li key={item.year} className="relative border-b border-[#0D2E6B]/10 p-6 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0">
                <p className="font-display text-4xl font-bold text-[#8A6700]">{item.year}</p>
                <h3 className="mt-5 text-lg font-black text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#666666]">{item.description}</p>
                {index < historyTimeline.length - 1 ? <span className="absolute -right-2 top-8 z-10 hidden h-4 w-4 rotate-45 border-r border-t border-[#0D2E6B]/20 bg-white lg:block" aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14" aria-labelledby="history-narrative-title">
          <div>
            <h2 id="history-narrative-title" className="font-display text-3xl font-bold text-[#1A1A1A]">Our Story</h2>
        <div className="space-y-5 text-base leading-8 text-[#333333]">
          <p>Anlo Secondary School (ANSECO), now known as Anlo Senior High School, is one of the Government-Assisted Secondary Schools in Ghana.</p>
          <p>The school is situated at Avume, about three (3) kilometers from Anloga main town along the Anloga-Keta Road and about two (2) kilometers away from the Keta Lagoon on the left and the Gulf of Guinea on the right. Its GPS address is VN-1333-1364.</p>
          <p>Anlo Senior High School was established in August 1954 to fill a vacuum of training and learning center for the youth in Anlo-land, but could not be absorbed into the public school system due to low enrolment and inadequate funds amidst remnants of the political and social unrest at that time.</p>
          <p>On 10th April 1959, the school was re-opened by these gallant founding fathers, all of blessed memory: Togbi Adeladza II, Awoamefia of Anlo; Mr. Cephas Kofi Fiagbe; and Mr. James W.K. Doe.</p>
          <p>In the 1963/1964 academic year, the school was enlisted as one of the Government-Assisted Secondary Schools, and the first headmaster was Mr. Sosthenes Doe Sorkpor.</p>
          <p>Anlo Senior High School is a co-educational institution with adequate facilities for both boarders and day students. From a student population of nine (9), comprising five (5) males and four (4) females, ANSECO has grown to become a school of choice in the Volta Region. The student population as of 2026 was two thousand and ninety-four (2,094).</p>
        </div>
          </div>

          <aside>
            <h2 className="font-display text-3xl font-bold text-[#1A1A1A]">Founding Fathers</h2>
            <div className="mt-6 divide-y divide-[#0D2E6B]/10 rounded-[12px] border border-[#0D2E6B]/10 bg-white px-6">
              {foundingFathers.map((founder) => (
                <div key={founder.name} className="py-6">
                  <h3 className="text-lg font-black text-[#1A1A1A]">{founder.name}</h3>
                  <p className="mt-2 text-sm text-[#666666]">{founder.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-[#666666]">Verified portraits can be added when official photographs are supplied by the school.</p>
          </aside>
        </section>

        <div className="mt-16 space-y-12">
          <section className="overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.06)]">
            <div className="bg-[#0D2E6B] px-6 py-5 sm:px-8">
              <h2 className="font-display mt-2 text-3xl font-bold text-white">Key Milestones</h2>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3">
              {milestones.map((milestone, index) => (
                <li
                  key={`${milestone.year}-${milestone.title}`}
                  className="relative border-b border-[#0D2E6B]/10 p-6 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
                >
                  <p className="font-display text-3xl font-bold text-[#8A6700]">{milestone.year}</p>
                  <h3 className="mt-5 text-lg font-black text-[#1A1A1A]">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#666666]">{milestone.description}</p>
                  <span className="mt-6 block text-xs font-black text-[#1A1A1A]/30">{String(index + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.06)]">
            <div className="border-b border-[#0D2E6B]/10 bg-[#0D2E6B] px-5 py-4">
              <h2 className="text-lg font-black uppercase tracking-[0.12em] text-white">List of Headmasters</h2>
            </div>
            <div className="px-6 py-10 sm:px-10">
              <p className="mb-8 max-w-3xl text-sm leading-7 text-[#666666]">The published history identifies Mr. Sosthenes D. Sorkpor as the first headmaster after the school received government-assisted status, while the supplied leadership record includes earlier heads from 1959. This distinction remains subject to confirmation by the school.</p>
              <ol className="relative ml-2 border-l-2 border-[#C9990A]/35">
                {headmasters.map((headmaster, index) => (
                  <li key={headmaster.name} className={index === headmasters.length - 1 ? "relative pl-8" : "relative pb-9 pl-8"}>
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 border-4 border-white bg-[#C9990A]" />
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8A6700]">
                      {headmaster.period}
                    </p>
                    <p className="mt-2 text-lg font-bold leading-7 text-[#1A1A1A]">{headmaster.name}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
