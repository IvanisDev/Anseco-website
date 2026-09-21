import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "School Administration",
  description: "Meet the school management, academic leaders, house parents and student leaders of Anlo Senior High School."
};

const managementTeam = [
  { name: "Mr. Newman H.K. Dziedzoave", role: "Headmaster" },
  { name: "Mad. Joyce Afi Avorkliyah", role: "Asst. Head. Administration" },
  { name: "Mr. Felix Amegbor", role: "Asst. Head. Academic" },
  { name: "Mr. Ebenezer W.K. Kusife", role: "School Accountant" },
  { name: "Mad. Margaret Apasu", role: "Domestic Bursar" }
];

const boardingLeadership = [
  { name: "Mr. Emmanuel M.C. Agbakpe", role: "Snr. Housemaster" },
  { name: "Mad. Sophia K. Komabu", role: "Snr. Housemistress" },
  { name: "Mr. Divine Diboa", role: "Asst. Head. Domestic" }
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
  { house: "Adeladza House", colour: "Red", hex: "#DC2626", parents: ["Mr. Courage K. Dovlo", "Mad. Patience A. Dovor"] },
  { house: "Doe House", colour: "Green", hex: "#15803D", parents: ["Mr. Elikplim Segbafah", "Mad. Rosemond Abban"] },
  { house: "Fiagbe House", colour: "Blue", hex: "#1D4ED8", parents: ["Mr. Godsway Fiagbe", "Mad. Melody Mavis Abadah"] },
  { house: "Sorkpor House", colour: "Yellow", hex: "#FACC15", parents: ["Mr. Seth Workey", "Mad. Bernice Aku Agbavor"] }
];

const seniorPrefects = [
  { boys: "Harrison Sitsofe Kwawulumey", girls: "Theodosia Eyram Adzavor" },
  { boys: "Bless Alobuia", girls: "Veronica Kessiwa Abu" },
  { boys: "Samuel Senehia", girls: "Fidelia Fafali Doe" }
];

export default function SchoolAdministrationPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Administration"
        title="School Administration"
        description="The management, academic and student leadership teams supporting teaching, welfare and school life at ANSECO."
      />

      <main className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 lg:px-12">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Administration</p>
        <h2 className="font-display mb-10 text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">School Management Team</h2>

        <AdministrationHeading title="School Management" first />
        <PersonGrid people={managementTeam} />

        <AdministrationHeading title="Heads of Departments (HODs)" />
        <PersonGrid people={departmentHeads} />

        <AdministrationHeading title="Other Personalities" />
        <PersonGrid people={otherPersonalities} />

        <AdministrationHeading title="Head of Boarding" />
        <PersonGrid people={boardingLeadership} />

        <AdministrationHeading title="House Parents" />
        <div className="grid gap-5 sm:grid-cols-2">
          {houseParents.map((house) => (
            <div key={house.house} className="overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_15px_36px_rgba(13,46,107,0.06)]">
              <div className="h-2" style={{ backgroundColor: house.hex }} />
              <div className="p-6">
                <span className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${house.colour === "Yellow" ? "text-[#0D2E6B]" : "text-white"}`} style={{ backgroundColor: house.hex }}>{house.colour}</span>
                <h3 className="mt-4 border-b pb-4 text-xl font-black uppercase tracking-[0.08em] text-[#0D2E6B]" style={{ borderColor: `${house.hex}55` }}>{house.house}</h3>
                <div className="mt-5 space-y-3">
                  {house.parents.map((parent) => <p key={parent} className="text-base font-bold text-[#334155]">{parent}</p>)}
                </div>
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
      </main>
    </div>
  );
}

function PersonGrid({ people }: { people: { name: string; role: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => <PersonCard key={person.name} title={person.name} subtitle={person.role} />)}
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
