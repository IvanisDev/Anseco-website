import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, Download, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import { getDownloads } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Admissions steps, checklist, FAQs and downloads for ANSECO parents and guardians."
};

const steps = [
  ["01", "Check Your CSSPS Placement", "Confirm placement through the official placement process and keep a printed copy for reporting."],
  ["02", "Download & Review the Reporting Checklist", "Read the reporting checklist carefully before arrival day."],
  ["03", "Gather Your Documents", "Prepare originals and photocopies of required documents early."],
  ["04", "Report on the Official Date", "Arrive on the published reporting date with a parent or guardian where required."],
  ["05", "Complete Registration", "Submit documents and complete the school registration process."],
  ["06", "Settle In", "Collect guidance on classes, boarding, uniforms and orientation."]
];

const documents = [
  "Original BECE certificate or result slip",
  "Passport photographs",
  "Birth certificate or national ID copy",
  "CSSPS placement letter or admission printout",
  "National Health Insurance card if available",
  "Parent or guardian ID card",
  "Completed school health information where applicable",
  "Items listed in the reporting checklist"
];

const boardingItems = [
  "1 trunk or hard-body suitcase",
  "1 chop box (wooden or plastic)",
  "1 student mattress with Mackintosh cover",
  "1 pillow covered with Mackintosh",
  "2 students' bedsheets with 2 pillowcases - plain white",
  "1 student-size mosquito net",
  "1 bedspread, 1 blanket and 1 sleeping cloth",
  "Underwear: 5 pants, 3 black underskirts, 3 under-knickers and 3 vests for girls; 3 boxer shorts or pants and 3 white singlets for boys; plus 3 handkerchiefs",
  "2 plastic buckets with covers and 1 sponge dish (Duraplast)",
  "Toiletries: 1 deodorant, 1 pack of toilet rolls, toothpaste, toothbrush, soap, pomade, towel, sponge and 2 packs of sanitary pads for girls",
  "1 drinking cup, 1 flat plastic or stainless-steel plate and a set of cutlery",
  "2 pairs of decent sandals (1 black and 1 brown), with no embellishment",
  "1 pair of bathroom slippers",
  "1 pair of decent sneakers (black or white)",
  "1 pair of black low-heel shoes for both boys and girls",
  "2 pairs of socks (1 white and 1 black)",
  "Black belt with simple buckle for boys; for girls, not wider than 1.5 cm",
  "1 pair of pyjamas or sleepwear",
  "2 pairs of khaki trousers (boys only)",
  "2 pairs of khaki shorts (boys only)",
  "1 pair of white trousers (boys only)",
  "1 white flock dress for girls; refer to the appendix for the design",
  "2 white shirts, 1 short-sleeved and 1 long-sleeved (boys only)",
  "2 short-sleeved green check shirts for boys; name must be embossed or embroidered on the left chest",
  "2 medium-sized green check dresses for girls; name must be embossed or embroidered on the left chest",
  "2 long-sleeved check shirts for prep for both boys and girls; refer to the appendix for the design",
  "2 pairs of check trousers for prep (girls only); refer to the appendix for the design",
  "1 torch with dry cells",
  "RSV/NIV Bible or Quran, and a school-specified hymn book for Christians",
  "1 raincoat or umbrella",
  "1 school bag, 1 lunch bag and 1 water bottle",
  "1 mathematical set and scientific calculator",
  "2 standard graph books",
  "20 exercise books and 10 notebooks",
  "2 long local standing brooms",
  "Inesfly for bedbugs"
];

const sharedStudentItems = [
  "Valid NHIS card",
  "Four passport-size pictures, to be taken in the school"
];

const dayStudentItems = [
  "2 short-sleeved green check shirts for boys",
  "2 medium-sized green check dresses for girls",
  "1 mathematical set and scientific calculator",
  "1 pair of decent black sandals to the school's specification, with no embellishment",
  "1 pair of decent sneakers (black or white)",
  "1 school bag",
  "Black belt with simple buckle for boys; for girls, not wider than 1.5 cm",
  "2 pairs of khaki shorts (boys only)",
  "2 standard graph books",
  "20 exercise books and 10 notebooks",
  "2 long local standing brooms"
];

const cleaningGroups = [
  {
    title: "Group 1",
    students: "Science, Visual and Performing Arts students",
    items: ["Bine 20 (1 litre)", "Liquid soap (5 litres)", "Washing powder (1 kg)", "1 duster of the type used by drivers"]
  },
  {
    title: "Group 2",
    students: "General Arts and Home Economics students",
    items: ["Bleach (1 litre)", "1 well-sharpened cutlass", "1 long local standing broom", "1 long standing brush"]
  },
  {
    title: "Group 3",
    students: "Business and Agriculture students",
    items: ["1 medium-sized dustbin", "1 rake", "1 long standing brush", "1 Anloga hoe"]
  }
];

const reportingNotices = [
  "Check materials for boys and girls should be purchased and sewn with the guidance of the school.",
  "Passport photographs should be taken at the school while the student is wearing the check uniform.",
  "Every student must report with a decent haircut. A student who does not comply will be required to visit the barbering shop and have their hair properly groomed before being accepted."
];

const studentGuidelines = [
  {
    title: "Visiting Hours",
    content: "Official visiting hours are 9:00 a.m. to 4:00 p.m. on the first Saturday and first Sunday of every month. Students may receive visitors only during these approved periods. Parents, guardians and all visitors must follow the schedule to support the orderly conduct of school activities."
  },
  {
    title: "Visiting Procedure",
    content: "Upon arrival, all visitors must register with the House Parent or designated staff member at the official reception point before meeting their ward. Students will be invited to the designated visiting area. Visitors may not enter dormitories, classrooms or other restricted areas without prior authorization."
  },
  {
    title: "School Gatherings",
    content: "Attendance at all official school programmes and activities is compulsory unless otherwise authorized. These include assemblies, classroom lessons, dining hall attendance, communal labour, religious services, emergency drills and club or society meetings. The school may adjust schedules when operational or emergency needs require it."
  },
  {
    title: "Dress Code",
    content: "Students must wear only prescribed school uniforms and approved attire. Footwear must be black or brown; sandals must not exceed 2 cm in heel height and shoes must not exceed 3 cm. Belts must be plain black or brown, no wider than 4 cm, and have simple buckles. Bracelets, necklaces and fashion accessories are not permitted. Female students may wear only small, plain stud earrings in accordance with the approved kit list. All students must maintain a neat, modest and respectable appearance."
  },
  {
    title: "National Health Insurance Scheme (NHIS)",
    content: "The school clinic provides first aid, basic healthcare and emergency services. Every student must have a valid National Health Insurance Scheme card throughout their stay at the school. A valid NHIS card is required for admission, registration and continued enrolment. Parents and guardians must ensure that their ward's membership remains active."
  }
];

export default function AdmissionsPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Admissions Guide" eyebrow="Joining ANSECO" description="Step-by-step guidance for new students and parents. Prepare early, download the checklist and contact the school when you need help." />
      <section id="admission-overview" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-4xl font-black tracking-tight text-[#1A1A2E] sm:text-5xl">Admission Overview</h2>
          <div className="space-y-7 text-lg leading-9 text-[#3F3F46]">
            <p>
              Anlo Senior High School is a respected senior high school in Anloga with a strong tradition of academic discipline, character formation and service. Admission into ANSECO is guided by Ghana Education Service procedures and the Computerized School Selection and Placement System, with the school supporting placed students and parents through reporting, registration and orientation.
            </p>
            <p>
              <strong className="font-black text-[#2F2F35]">Eligibility:</strong> To be eligible for admission, applicants must have completed Junior High School and must satisfy the requirements of the national placement process. Students placed at ANSECO are expected to report with the required documents, personal items and parent or guardian information listed in the school reporting checklist.
            </p>
            <p>
              <strong className="font-black text-[#2F2F35]">Computerized School Selection and Placement System (CSSPS):</strong> Senior high school admission in Ghana is normally coordinated through CSSPS. The system places qualified students into schools and programmes based on national placement guidelines, student choices, available vacancies and examination performance.
            </p>
            <p>
              <strong className="font-black text-[#2F2F35]">Placement and Programme Selection:</strong> Students admitted to ANSECO join one of the school&apos;s eight learning areas: Science, General Arts, Business, Agriculture, Home Economics, Visual and Performing Arts, Applied Technology, and Languages. Placement should be reviewed carefully by parents and students before reporting, especially where specific subject combinations are required.
            </p>
            <p>
              <strong className="font-black text-[#2F2F35]">Merit and Readiness:</strong> ANSECO welcomes students who are prepared to learn, live responsibly and contribute positively to the school community. The admissions process is designed to help new students begin senior high school with the right documents, expectations and support.
            </p>
            <p>
              We look forward to welcoming new students and families to ANSECO. Parents are encouraged to read the full admissions guide below, download the reporting checklist and contact the school office early if they need clarification before reporting day.
            </p>
          </div>
        </div>
      </section>
      <section id="how-to-apply" className="scroll-mt-28 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Step by Step</p>
            <h2 className="font-display text-2xl text-[#0D2E6B] sm:text-3xl">How to Join ANSECO</h2>
          </div>
          <div className="space-y-4">
            {steps.map(([num, title, desc]) => (
              <div key={num} className="flex gap-5 border border-gray-100 bg-white p-5 shadow-sm">
                <div className="w-10 shrink-0 text-2xl font-bold text-[#C9990A]">{num}</div>
                <div>
                  <h3 className="mb-1 font-bold text-[#0D2E6B]">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">What to Bring</p>
            <h2 className="font-display mb-5 text-2xl text-[#0D2E6B]">Required Documents</h2>
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#0D2E6B]" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <div id="downloads" className="scroll-mt-28">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Resources</p>
            <h2 className="font-display mb-5 text-2xl text-[#0D2E6B]">Download Documents</h2>
            <div className="space-y-3">
              {getDownloads().map((item) => (
                <a key={item.filePath} href={item.filePath} className="group flex items-center gap-4 border border-[#0D2E6B]/10 bg-[#EDF1F9] p-4 transition-all hover:bg-[#dde6f5]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0D2E6B] transition-colors group-hover:bg-[#C9990A]">
                    <Download size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#0D2E6B]">{item.title}</div>
                    <div className="mt-0.5 text-xs text-gray-500">{item.category} document</div>
                  </div>
                  <span className="shrink-0 rounded bg-white px-2 py-1 text-[10px] font-bold text-[#0D2E6B]/50">PDF</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="boarding-admission" className="scroll-mt-28 bg-[#F8F7F3] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl">
            <h2 className="font-display text-3xl font-bold leading-tight text-[#0D2E6B] sm:text-4xl">Admission into the Boarding House</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#334155]">
              <p>
                Anlo Senior High School is a boarding and day school. Students admitted into the boarding house are assured of proper monitoring by our hardworking House Parents.
              </p>
              <p>
                On arrival, House Parents inspect all items brought into the boarding house. Items that do not conform to the kit list are returned to parents or guardians to be sent home. This helps ensure that students wear only prescribed attire in the school.
              </p>
            </div>
          </div>

          <ProspectusTable title="Boarding Students Only" subtitle="Category 1 - Basic Needs (Must Have)" items={boardingItems} />
          <ProspectusTable title="Boarding and Day Students" subtitle="Items Required" items={sharedStudentItems} />
          <ProspectusTable title="Day Students Only" subtitle="Personal Items" items={dayStudentItems} />

          <div className="mt-14">
            <div className="bg-[#0D2E6B] px-5 py-5 text-white sm:px-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">Boarding and Day Students</p>
              <h3 className="mt-2 text-xl font-black">Category 2 - Cleaning Materials</h3>
            </div>
            <p className="border-x border-[#0D2E6B]/10 bg-white px-6 py-5 text-base leading-7 text-[#64748B]">Required according to each student&apos;s learning area.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {cleaningGroups.map((group) => (
                <div key={group.title} className="border border-[#0D2E6B]/10 bg-white p-6 shadow-[0_16px_38px_rgba(13,46,107,0.05)]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">{group.title}</p>
                  <h4 className="mt-3 text-lg font-black leading-7 text-[#0D2E6B]">{group.students}</h4>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[#334155]">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="font-black text-[#C9990A]">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="student-guidelines" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="border-l-4 border-[#C9990A] bg-[#0D2E6B] p-7 text-white sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#E4B52B]">Reporting Requirement</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">All students must report to the Senior Housemaster or Senior Housemistress</h2>
          </div>

          <div className="mt-8 border border-[#C9990A]/40 bg-[#FFF9E8] p-6 sm:p-8">
            <div className="flex items-center gap-3 text-[#8A6700]">
              <AlertTriangle size={22} />
              <h3 className="text-sm font-black uppercase tracking-[0.18em]">Important Reporting Notice</h3>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[#4B5563] sm:text-base">
              {reportingNotices.map((notice) => (
                <li key={notice} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#C9990A]" />
                  <span>{notice}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">Student Welfare and Conduct</p>
              <h2 className="font-display text-3xl font-bold text-[#0D2E6B] sm:text-4xl">School Regulations and Student Guidelines</h2>
            </div>
            <div className="divide-y divide-[#0D2E6B]/10 border-y border-[#0D2E6B]/10">
              {studentGuidelines.map((guideline, index) => (
                <article key={guideline.title} className="grid gap-4 py-7 md:grid-cols-[64px_220px_1fr] md:gap-6">
                  <div className="font-display text-3xl font-bold text-[#C9990A]">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="text-lg font-black text-[#0D2E6B]">{guideline.title}</h3>
                  <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{guideline.content}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-28 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Common Questions</p>
            <h2 className="font-display text-2xl text-[#0D2E6B] sm:text-3xl">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              ["Is ANSECO a boarding or day school?", "ANSECO serves boarding and day students. Contact the school for current boarding availability."],
              ["Where do parents get the reporting checklist?", "Use the downloads on this page or contact the admissions office for guidance."],
              ["Can I apply if I was not placed at ANSECO?", "Admission is normally through the placement system. Contact the admissions office for current guidance."],
              ["What learning areas does ANSECO offer?", "ANSECO offers Science, General Arts, Business, Agriculture, Home Economics, Visual and Performing Arts, Applied Technology, and Languages."]
            ].map(([q, a], index) => (
              <AccordionItem key={q} value={`faq-${index}`} className="border border-gray-100 bg-white px-5 shadow-sm">
                <AccordionTrigger className="text-[#0D2E6B]">{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="admissions-contact" className="scroll-mt-28 bg-[#0D2E6B] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">Still Have Questions?</p>
          <h2 className="font-display mb-3 text-2xl sm:text-3xl">Contact Our Admissions Office</h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-white/70">Our admissions team can help parents prepare for reporting and registration.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2.5 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"><Phone size={16} /> {siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"><Mail size={16} /> {siteConfig.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProspectusTable({ title, subtitle, items }: { title: string; subtitle: string; items: string[] }) {
  return (
    <div className="mt-12 overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.05)]">
      <div className="bg-[#0D2E6B] px-5 py-5 text-white sm:px-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">{title}</p>
        <h3 className="mt-2 text-xl font-black">{subtitle}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead className="bg-[#EDF1F9] text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B]">
            <tr>
              <th className="w-20 px-5 py-3">S/N</th>
              <th className="px-5 py-3">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#0D2E6B]/10">
            {items.map((item, index) => (
              <tr key={`${title}-${index}`}>
                <td className="px-5 py-4 align-top text-sm font-black text-[#C9990A]">{index + 1}</td>
                <td className="px-5 py-4 text-sm leading-6 text-[#334155]">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
