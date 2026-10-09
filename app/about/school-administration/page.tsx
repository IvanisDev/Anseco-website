import { PageHeader } from "@/components/page-header";
import { boardingLeadership, departmentHeads, houseLeadership, managementTeam, seniorPrefects, studentWelfareLeadership } from "@/data/school-leadership";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "School Administration",
  description: "Meet the school management, academic leaders, house parents and student leaders of Anlo Senior High School.",
  path: "/about/school-administration/"
});

export default function SchoolAdministrationPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Administration"
        title="School Administration"
        description="The management, academic and student leadership teams supporting teaching, welfare and campus life at ANSECO."
      />

      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-4xl rounded-[12px] bg-white p-6 shadow-[0_15px_36px_rgba(13,46,107,0.06)] sm:p-8">
          <p className="text-base leading-8 text-[#333333]">
            The School Administration provides leadership for ANSECO&apos;s academic programmes, daily operations,
            student welfare and campus life. Led by the Headmaster, it brings together the management team, heads
            of departments, boarding leadership, house parents and student leaders who support the effective
            running of the school.
          </p>
        </div>

        <AdministrationHeading title="School Management" first />
        <PersonGrid people={managementTeam} featured />

        <AdministrationHeading id="heads-of-departments" title="Academic Leadership" description="Heads of Departments" />
        <PersonGrid people={departmentHeads.map(({ name, department }) => ({ name, role: department }))} />

        <AdministrationHeading title="Student Welfare & Support" description="Chaplaincy, guidance, student representation and discipline" />
        <PersonGrid people={studentWelfareLeadership} />

        <AdministrationHeading title="Boarding Leadership" />
        <PersonGrid people={boardingLeadership} />

        <AdministrationHeading title="House Leadership" description="Four houses and their House Parents" />
        <div className="grid gap-5 sm:grid-cols-2">
          {houseLeadership.map((house) => (
            <div key={house.house} className="overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_15px_36px_rgba(13,46,107,0.06)]">
              <div className="p-6">
                <span className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${house.colour === "Yellow" ? "text-[#1A1A1A]" : "text-white"}`} style={{ backgroundColor: house.hex }}>{house.colour}</span>
                <h3 className="mt-4 border-b pb-4 text-xl font-black uppercase tracking-[0.08em] text-[#1A1A1A]" style={{ borderColor: `${house.hex}55` }}>{house.house}</h3>
                <div className="mt-5 space-y-3">
                  {house.parents.map((parent) => <p key={parent} className="text-base font-bold text-[#333333]">{parent}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <AdministrationHeading title="Student Leadership" description="Senior Prefects" />
        <div className="overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_15px_36px_rgba(13,46,107,0.06)]">
          <div className="grid grid-cols-2 bg-[#0D2E6B] text-white">
            <p className="px-5 py-4 text-sm font-black uppercase tracking-[0.14em]">Boys</p>
            <p className="border-l border-white/15 px-5 py-4 text-sm font-black uppercase tracking-[0.14em]">Girls</p>
          </div>
          {seniorPrefects.map((prefect) => (
            <div key={prefect.boys} className="grid grid-cols-2 border-t border-[#0D2E6B]/10 first:border-t-0">
              <p className="px-5 py-4 font-bold text-[#333333]">{prefect.boys}</p>
              <p className="border-l border-[#0D2E6B]/10 px-5 py-4 font-bold text-[#333333]">{prefect.girls}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PersonGrid({ people, featured = false }: { people: { name: string; role: string }[]; featured?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, index) => <PersonCard key={person.name} title={person.name} subtitle={person.role} featured={featured && index === 0} />)}
    </div>
  );
}

function AdministrationHeading({ title, description, first = false, id }: { title: string; description?: string; first?: boolean; id?: string }) {
  return (
    <div id={id} className={`mb-8 scroll-mt-28 ${first ? "" : "mt-20 border-t border-[#0D2E6B]/10 pt-12"}`}>
      <h3 className="font-display text-2xl font-bold text-[#1A1A1A] sm:text-3xl">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-7 text-[#666666]">{description}</p> : null}
    </div>
  );
}

function PersonCard({ title, subtitle, featured = false }: { title: string; subtitle: string; featured?: boolean }) {
  return (
    <div data-ama-section="Head of Department and School Administration" className={`flex min-h-36 flex-col justify-end rounded-[12px] border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_12px_30px_rgba(13,46,107,0.05)] ${featured ? "sm:col-span-2 lg:col-span-2 lg:min-h-44" : ""}`}>
      <h3 className={`${featured ? "font-display text-2xl sm:text-3xl" : "text-lg"} font-black leading-tight text-[#1A1A1A]`}>{title}</h3>
      <p className="mt-3 text-sm font-semibold text-[#666666]">{subtitle}</p>
    </div>
  );
}
