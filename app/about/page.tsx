import type { Metadata } from "next";
import { Music2, UserRound } from "lucide-react";
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

const managementTeam = [
  { name: "Mr. Newman H.K. Dziedzoave", role: "Headmaster" },
  { name: "Mad. Joyce Afi Avorkliyah", role: "Asst. Head. Administration" },
  { name: "Mr. Felix Amegbor", role: "Asst. Head. Academic" },
  { name: "Mr. Ebenezer W.K. Kusife", role: "School Accountant" },
  { name: "Mad. Margaret Apasu", role: "Domestic Bursar" }
];

const boardingLeadership = [
  { name: "Mr. Divine Diboa", role: "Asst. Head. Domestic" },
  { name: "Mr. Emmanuel M.C. Agbakpe", role: "Snr. Housemaster" },
  { name: "Mad. Sophia K. Komabu", role: "Snr. Housemistress" }
];

const departmentHeads = [
  { name: "Mr. Margaret M. Dodor", role: "Science" },
  { name: "Mr. Jonas Hatekah", role: "Mathematics" },
  { name: "Mr. Mathew Ganadzi", role: "General Arts" },
  { name: "Mr. Festus K. Sorkpor", role: "Languages" },
  { name: "Mad. Esther A. Gabla", role: "Agriculture" },
  { name: "Mr. Saviour Wordzro", role: "Visual and Performing Arts" },
  { name: "Mad. Rejoice Vormawor", role: "Home Economics" },
  { name: "Mr. Edwin Atitsogbui", role: "Business" },
  { name: "Mr. Philip Mifetu", role: "Information and Comm. Technology" },
  { name: "Mr. Felix Q. Ladeka", role: "Physical Education and Health" }
];

const otherPersonalities = [
  { name: "Mr. Selorm Davour", role: "School Chaplain" },
  { name: "Mr. Johann Tetteh", role: "Guidance and Counselling Coordinator" },
  { name: "Mr. Ernest Fiador", role: "SRC Patron" },
  { name: "Mad. Juliana Kakaney", role: "Asst. SRC Patroness" },
  { name: "Mr. Thomas K. Yevu", role: "Dean of Discipline" }
];

const houseParents = [
  { house: "Adeladza House", parents: ["Mr. Courage K. Dovlo", "Mad. Patience A. Dovor"] },
  { house: "Doe House", parents: ["Mr. Elikplim Segbafah", "Mad. Rosemond Abban"] },
  { house: "Fiagbe House", parents: ["Mr. Godsway Fiagbe", "Mad. Melody Mavis Abadah"] },
  { house: "Sorkpor House", parents: ["Mr. Seth Workey", "Mad. Bernice Aku Agbavor"] }
];

const seniorPrefects = [
  { boys: "Harrison Sitsofe Kwawulumey", girls: "Theodosia Eyram Adzavor" },
  { boys: "Bless Alobuia", girls: "Veronica Kessiwa Abu" },
  { boys: "Samuel Senehia", girls: "Fidelia Fafali Doe" }
];

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

      <section id="history" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[980px]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Our History</p>
          <h2 className="font-display mb-7 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">
            The History of Anlo Senior High School
          </h2>
          <div className="space-y-5 text-base leading-8 text-[#334155]">
            <p>
              Anlo Secondary School (ANSECO), now known as Anlo Senior High School, is one of the Government-Assisted Secondary Schools in Ghana.
            </p>
            <p>
              The school is situated at Avume, about three (3) kilometers from Anloga main town along the Anloga-Keta Road and about two (2) kilometers away from the Keta Lagoon on the left and the Gulf of Guinea on the right. Its GPS address is VN-1333-1364.
            </p>
            <p>
              Anlo Senior High School was established in August 1954 to fill a vacuum of training and learning center for the youth in Anlo-land, but could not be absorbed into the public school system due to low enrolment and inadequate funds amidst remnants of the political and social unrest at that time.
            </p>
            <p>
              On 10th April 1959, the school was re-opened by these gallant founding fathers, all of blessed memory: Togbi Adeladza II, Awoamefia of Anlo; Mr. Cephas Kofi Fiagbe; and Mr. James W.K. Doe.
            </p>
            <p>
              In the 1963/1964 academic year, the school was enlisted as one of the Government-Assisted Secondary Schools, and the first headmaster was Mr. Sosthenes Doe Sorkpor.
            </p>
            <p>
              Anlo Senior High School is a co-educational institution with adequate facilities for both boarders and day students. From a student population of nine (9), comprising five (5) males and four (4) females, ANSECO has grown to become a school of choice in the Volta Region. The student population as of 2026 was two thousand and ninety-four (2,094).
            </p>
            <p>
              Anlo Senior High School has a well-structured governance system. At the apex is the Board of Governors, supported by Senior and Middle Management Teams and student leaders.
            </p>

            <div className="border-l-4 border-[#C9990A] bg-white p-6 shadow-[0_16px_38px_rgba(13,46,107,0.06)]">
              <h3 className="mb-4 text-xl font-black text-[#0D2E6B]">Key Milestones</h3>
              <ul className="space-y-3 text-sm leading-7 text-[#334155]">
                <li>ANSECO won the Best Disciplined School Award in the Volta Region for three consecutive years: 2008, 2009 and 2010.</li>
                <li>In 2021, ANSECO was crowned Volta Regional Champion and placed 4th in the Southern Zonal Competition during the Renewable Energy Quiz Competition.</li>
                <li>The school has featured in the National Science and Maths Quiz (NSMQ) Competition since 2012. In 2017, the school reached the quarter-finals.</li>
                <li>The school was National Champion in the Inter-School Constitution Game Competition in 2007 and 2010.</li>
              </ul>
            </div>

            <div className="overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.06)]">
              <div className="border-b border-[#0D2E6B]/10 bg-[#0D2E6B] px-5 py-4">
                <h3 className="text-lg font-black uppercase tracking-[0.12em] text-white">List of Headmasters</h3>
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
            </div>
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

      <section id="facilities" className="bg-[#F8F7F3] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Campus Resources</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">Facilities</h2>
            <p className="mt-5 text-base leading-8 text-[#334155]">
              The facilities of the school include the following:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Well-equipped Science Laboratories",
              "Computer Laboratories",
              "Library",
              "Reliable Water Supply",
              "Electricity",
              "Home Economics Centre",
              "Visual Arts Studio"
            ].map((facility, index) => (
              <div key={facility} className="flex min-h-32 items-end border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_14px_32px_rgba(13,46,107,0.05)]">
                <div>
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-lg font-black leading-7 text-[#0D2E6B]">{facility}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="management" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Administration</p>
          <h2 className="font-display mb-10 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">School Management Team</h2>

          <AdministrationHeading title="School Management" first />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {managementTeam.map((member) => (
              <PersonCard key={member.name} title={member.name} subtitle={member.role} />
            ))}
          </div>

          <AdministrationHeading title="Heads of Departments (HODs)" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departmentHeads.map((member) => (
              <PersonCard key={member.name} title={member.name} subtitle={member.role} />
            ))}
          </div>

          <AdministrationHeading title="Other Personalities" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherPersonalities.map((member) => (
              <PersonCard key={member.name} title={member.name} subtitle={member.role} />
            ))}
          </div>

          <AdministrationHeading title="Head of Boarding" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {boardingLeadership.map((member) => (
              <PersonCard key={member.name} title={member.name} subtitle={member.role} />
            ))}
          </div>

          <AdministrationHeading title="House Parents" />
          <div className="grid gap-5 sm:grid-cols-2">
            {houseParents.map((house) => (
              <div key={house.house} className="border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_15px_36px_rgba(13,46,107,0.06)]">
                <h3 className="border-b border-[#C9990A]/35 pb-4 text-xl font-black uppercase tracking-[0.08em] text-[#0D2E6B]">{house.house}</h3>
                <div className="mt-5 space-y-3">
                  {house.parents.map((parent) => (
                    <p key={parent} className="text-base font-bold text-[#334155]">{parent}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <AdministrationHeading title="List of Senior Prefects" />
          <div className="overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_15px_36px_rgba(13,46,107,0.06)]">
            <div className="grid grid-cols-2 bg-[#0D2E6B] text-white">
              <p className="px-5 py-4 text-sm font-black uppercase tracking-[0.14em]">Boys</p>
              <p className="border-l border-white/15 px-5 py-4 text-sm font-black uppercase tracking-[0.14em]">Girls</p>
            </div>
            {seniorPrefects.map((prefect) => (
              <div key={prefect.boys} className="grid grid-cols-2 border-t border-[#0D2E6B]/10 first:border-t-0">
                <p className="px-5 py-4 font-bold text-[#334155]">{prefect.boys}</p>
                <p className="border-l border-[#0D2E6B]/10 px-5 py-4 font-bold text-[#334155]">{prefect.girls}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AdministrationHeading({ title, first = false }: { title: string; first?: boolean }) {
  return (
    <div className={`mb-8 ${first ? "" : "mt-20 border-t border-[#0D2E6B]/10 pt-12"}`}>
      <h3 className="font-display text-2xl font-bold text-[#0D2E6B] sm:text-3xl">{title}</h3>
    </div>
  );
}

function PersonCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex aspect-square flex-col justify-between border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_15px_36px_rgba(13,46,107,0.06)]">
      <div className="flex aspect-square w-full items-center justify-center bg-[#EDF1F9] text-[#7B95C8]">
        <UserRound size={34} />
      </div>
      <div>
        <h3 className="text-lg font-black leading-tight text-[#0D2E6B]">{title}</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">{subtitle}</p>
      </div>
    </div>
  );
}
