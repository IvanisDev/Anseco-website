import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Admissions",
  description: "Admissions overview and guidance for prospective ANSECO students and families.",
  path: "/admissions/"
});

const admissionPages = [
  { title: "How to Apply", href: "/admissions/how-to-apply", description: "Follow the placement, reporting and registration process step by step." },
  { title: "Prospectus & Requirements", href: "/admissions/prospectus", description: "Review required documents and approved items for boarding and day students." },
  { title: "School Regulations", href: "/admissions/student-guidelines", description: "Read reporting notices, visiting procedures, dress requirements and health guidance." },
  { title: "FAQs", href: "/admissions/faqs", description: "Find answers to common questions from students, parents and guardians." }
];

export default function AdmissionsPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Admissions Overview" eyebrow="Joining ANSECO" description="Everything prospective students and families need to prepare for placement, reporting and registration." />
      <div>
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A]">Begin your journey with confidence</h2>
              <div className="mt-8 inline-flex max-w-full items-center gap-4">
                <Image
                  src="/images/partners/ghana-education-service-crest.png"
                  alt=""
                  width={1280}
                  height={1067}
                  className="h-20 w-auto shrink-0 object-contain sm:h-24"
                  aria-hidden="true"
                />
                <span className="min-w-0 border-l-2 border-[#0D2E6B]/20 pl-4 text-[#1A1A1A]">
                  <span className="block text-3xl font-black leading-none tracking-[0.08em] sm:text-4xl">CSSPS</span>
                  <span className="mt-2 block max-w-[230px] text-xs font-bold leading-5 sm:text-sm">
                    Computerized School Selection and Placement System
                  </span>
                </span>
              </div>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#3F3F3F]"><p>Anlo Senior High School welcomes students through Ghana Education Service procedures and the Computerized School Selection and Placement System. Placed students and their families receive guidance throughout reporting, registration and orientation.</p><p>Eligible applicants must have completed Junior High School and satisfied the national placement requirements. Students should carefully review their learning area placement, required documents, personal items and school regulations before reporting.</p><p>ANSECO welcomes learners who are ready to study, live responsibly and contribute positively to the school community.</p><a href="https://www.cssps.gov.gh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#0D2E6B] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#C9990A]">Visit the CSSPS Portal <ExternalLink size={16} /></a></div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-12">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">Why ANSECO?</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
                At ANSECO, education extends beyond the classroom. Students join a learning community shaped by Truth and Service, academic development, discipline, responsibility and generations of connection to Anlo-Land.
              </p>
              <Link href="/campus-life" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0D2E6B] px-7 py-3 text-sm font-black text-[#1A1A1A] transition-colors hover:bg-[#0D2E6B] hover:text-white">
                Discover Student Life
              </Link>
            </div>

            <div className="border-y border-[#0D2E6B]/5">
              {[
                ["01", "A Legacy in Anlo-Land", `Founded in 1954 and reopened in ${siteConfig.establishedYear}, ANSECO has grown from nine students into a school community serving more than 2,000 learners while maintaining its identity as The Star of Anlo-Land.`],
                ["02", "Learning with Purpose", "Students develop their interests and abilities across eight Learning Areas that create pathways toward further education, work and future careers."],
                ["03", "Character & Responsibility", "Service, Truth, Accountability and Reliability shape the school's emphasis on discipline, self-discipline, responsible leadership and service."],
                ["04", "A Community Beyond School", "Current learners, staff, parents and generations of old students remain connected through the shared identity and legacy of Mother ANSECO."]
              ].map(([number, title, description]) => (
                <article key={number} className="grid gap-4 border-b border-[#0D2E6B]/5 py-7 last:border-b-0 sm:grid-cols-[64px_1fr] sm:gap-6">
                  <span className="font-display text-3xl font-bold text-[#8A6700]">{number}</span>
                  <div>
                    <h3 className="text-xl font-black text-[#1A1A1A]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#666666]">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-20"><div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:px-12">{admissionPages.map((page, index) => <Link key={page.href} href={page.href} className="group flex min-h-56 flex-col border border-[#0D2E6B]/10 bg-white p-7 shadow-[0_16px_38px_rgba(13,46,107,0.05)] transition-all hover:-translate-y-1 hover:border-[#C9990A]"><h2 className="mt-7 text-2xl font-black text-[#1A1A1A]">{page.title}</h2><p className="mt-3 text-sm leading-7 text-[#666666]">{page.description}</p><span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-[0.12em] text-[#1A1A1A]">Open page <ArrowRight size={15} /></span></Link>)}</div></section>
        <section className="bg-[#0D2E6B] py-20 text-white"><div className="mx-auto max-w-4xl px-5 text-center sm:px-8"><h2 className="font-display text-3xl font-bold">Contact the Admissions Office</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">Have a question about registration, boarding or programmes at ANSECO after placement? The admissions team can help families prepare for reporting and registration.</p><div className="mt-8 flex flex-wrap justify-center gap-4">{siteConfig.phones.map((phone) => <a key={phone.href} href={`tel:${phone.href}`} aria-label={`Call ANSECO on ${phone.label}`} className="flex min-h-12 items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10"><Phone size={16} />Call {phone.label}</a>)}<Link href="/contact" className="flex min-h-12 items-center gap-2 bg-[#C9990A] px-6 py-3 text-sm font-black text-white hover:bg-white hover:text-[#1A1A1A]"><MessageCircle size={16} />Send an enquiry</Link></div></div></section>
      </div>
    </div>
  );
}
