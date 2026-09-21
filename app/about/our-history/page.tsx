import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Our History",
  description: "The history, milestones and former headmasters of Anlo Senior High School."
};

const headmasters = [
  { name: "Mr. Isaiah Y. Fiagbe", year: "1959 - 1960" },
  { name: "Mr. Evans Agbottah", year: "1960 - 1963" },
  { name: "Mr. Sosthenes D. Sorkpor", year: "1963 - 1987" },
  { name: "Mr. Eric K. Dzikunu", year: "1987 - 1993" },
  { name: "Mr. Jackson K. Akpade", year: "1994 - 1999" },
  { name: "Mr. Emmanuel K. Ketteku", year: "2000 - 2006" },
  { name: "Mr. Wilberforce I.K Azumah", year: "2006 - 2014" },
  { name: "Mr. Gideon Tay", year: "2014 - 2017" },
  { name: "Mr. Ganya A.S Ladzekpo", year: "2017 - 2020" },
  { name: "Mr. Kplorla K. Mensah-Gbekor", year: "2020 - 2021" },
  { name: "Mr. Wisdom K. Adeti", year: "2021 - 2025" },
  { name: "Mr. Newman H.K. Dziedzoave", year: "2025 - Date" }
];

const milestones = [
  "ANSECO won the Best Disciplined School Award in the Volta Region for three consecutive years: 2008, 2009 and 2010.",
  "In 2021, ANSECO was crowned Volta Regional Champion and placed 4th in the Southern Zonal Competition during the Renewable Energy Quiz Competition.",
  "The school has featured in the National Science and Maths Quiz (NSMQ) Competition since 2012. In 2017, the school reached the quarter-finals.",
  "The school was National Champion in the Inter-School Constitution Game Competition in 2007 and 2010."
];

export default function OurHistoryPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Our History"
        title="The History of Anlo Senior High School"
        description="From a community-supported beginning to a leading public senior high school serving Anlo-Land and the Volta Region."
      />

      <main className="mx-auto max-w-[980px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="space-y-5 text-base leading-8 text-[#334155]">
          <p>Anlo Secondary School (ANSECO), now known as Anlo Senior High School, is one of the Government-Assisted Secondary Schools in Ghana.</p>
          <p>The school is situated at Avume, about three (3) kilometers from Anloga main town along the Anloga-Keta Road and about two (2) kilometers away from the Keta Lagoon on the left and the Gulf of Guinea on the right. Its GPS address is VN-1333-1364.</p>
          <p>Anlo Senior High School was established in August 1954 to fill a vacuum of training and learning center for the youth in Anlo-land, but could not be absorbed into the public school system due to low enrolment and inadequate funds amidst remnants of the political and social unrest at that time.</p>
          <p>On 10th April 1959, the school was re-opened by these gallant founding fathers, all of blessed memory: Togbi Adeladza II, Awoamefia of Anlo; Mr. Cephas Kofi Fiagbe; and Mr. James W.K. Doe.</p>
          <p>In the 1963/1964 academic year, the school was enlisted as one of the Government-Assisted Secondary Schools, and the first headmaster was Mr. Sosthenes Doe Sorkpor.</p>
          <p>Anlo Senior High School is a co-educational institution with adequate facilities for both boarders and day students. From a student population of nine (9), comprising five (5) males and four (4) females, ANSECO has grown to become a school of choice in the Volta Region. The student population as of 2026 was two thousand and ninety-four (2,094).</p>
          <p>Anlo Senior High School has a well-structured governance system. At the apex is the Board of Governors, supported by Senior and Middle Management Teams and student leaders.</p>

          <section className="border-l-4 border-[#C9990A] bg-white p-6 shadow-[0_16px_38px_rgba(13,46,107,0.06)]">
            <h2 className="mb-4 text-xl font-black text-[#0D2E6B]">Key Milestones</h2>
            <ul className="space-y-3 text-sm leading-7 text-[#334155]">
              {milestones.map((milestone) => <li key={milestone}>{milestone}</li>)}
            </ul>
          </section>

          <section className="overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.06)]">
            <div className="border-b border-[#0D2E6B]/10 bg-[#0D2E6B] px-5 py-4">
              <h2 className="text-lg font-black uppercase tracking-[0.12em] text-white">List of Headmasters</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-left text-sm">
                <thead className="bg-[#EDF1F9] text-[#0D2E6B]">
                  <tr>
                    <th className="px-5 py-3 font-black uppercase tracking-[0.08em]">Name of Headmaster</th>
                    <th className="px-5 py-3 font-black uppercase tracking-[0.08em]">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0D2E6B]/10">
                  {headmasters.map((headmaster) => (
                    <tr key={headmaster.name}>
                      <td className="px-5 py-3 font-semibold text-[#0D2E6B]">{headmaster.name}</td>
                      <td className="px-5 py-3 text-[#64748B]">{headmaster.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
