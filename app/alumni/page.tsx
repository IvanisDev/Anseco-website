import type { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness, GraduationCap, HandHeart, Mail, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Alumni",
  description: "ANSSOSA alumni network, engagement and support information for ANSECO old students."
};

const engagementAreas = [
  {
    icon: Users,
    title: "Reconnect with ANSSOSA",
    description: "Keep your contact details and year-group information current through the school office and recognised ANSSOSA channels."
  },
  {
    icon: HandHeart,
    title: "Support Student Welfare",
    description: "Contribute to approved initiatives that improve student welfare, learning resources and the wider school environment."
  },
  {
    icon: BriefcaseBusiness,
    title: "Share Opportunities",
    description: "Open pathways for mentoring, career guidance, work experience and professional development for current students."
  }
];

const contributionSteps = [
  ["01", "Introduce Yourself", "Share your full name, year group and current location or chapter."],
  ["02", "Choose How to Engage", "Indicate whether you want to mentor, volunteer, reconnect or support an approved project."],
  ["03", "Connect Through the School", "Use the official school contact so your enquiry reaches the appropriate ANSSOSA representative."]
];

export default function AlumniPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        title="ANSSOSA"
        eyebrow="Alumni"
        description="A lifelong network connecting ANSECO old students with one another and with the school that shaped them."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-12">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">The Old Students Network</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">Connected by a shared ANSECO story</h2>
          </div>
          <div className="border-t-4 border-[#0D2E6B] pt-7">
            <p className="text-lg leading-9 text-[#475569]">
              ANSSOSA brings together generations of ANSECO old students across Ghana and beyond. The association strengthens relationships among year groups, supports the school through approved initiatives and creates opportunities for alumni to contribute their experience, time and professional knowledge.
            </p>
            <p className="mt-5 text-base leading-8 text-[#64748B]">
              Every former student remains part of the ANSECO community. Staying connected helps preserve the school&apos;s history while building practical support for today&apos;s learners and future generations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2E6B] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Alumni Impact</p>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">A network built to serve</h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-white/65 lg:justify-self-end">
              ANSSOSA participation can take many forms, from rebuilding old connections to creating meaningful opportunities for students and supporting priorities identified by the school.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {engagementAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="flex min-h-[300px] flex-col border border-white/10 bg-white/[0.055] p-7">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/15 text-[#E4B52B]"><Icon size={22} /></div>
                  <h3 className="mt-9 text-xl font-black text-white">{area.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Get Involved</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">Reconnect in three simple steps</h2>
            <div className="mt-8 flex items-center gap-4 border-l-4 border-[#C9990A] bg-[#F8F7F3] p-5">
              <GraduationCap size={28} className="shrink-0 text-[#0D2E6B]" />
              <p className="text-sm font-semibold leading-6 text-[#475569]">Include your year group whenever you contact the school about ANSSOSA.</p>
            </div>
          </div>
          <div className="border-y border-[#0D2E6B]/10">
            {contributionSteps.map(([number, title, description]) => (
              <article key={number} className="grid gap-4 border-b border-[#0D2E6B]/10 py-7 last:border-b-0 sm:grid-cols-[70px_1fr]">
                <div className="font-display text-3xl font-bold text-[#C9990A]">{number}</div>
                <div><h3 className="text-lg font-black text-[#0D2E6B]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#64748B]">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7F3] py-20">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-l-4 border-[#C9990A] bg-white p-8 shadow-[0_18px_45px_rgba(13,46,107,0.06)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#C9990A]">ANSSOSA Contact</p>
              <h2 className="font-display text-3xl font-bold text-[#0D2E6B]">Reconnect through the school office</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748B]">Send your name, year group and reason for getting in touch. The school will direct your message through the appropriate official channel.</p>
            </div>
            <a href={`mailto:${siteConfig.email}`} className="group inline-flex w-fit items-center gap-3 bg-[#0D2E6B] px-7 py-4 text-sm font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#C9990A]">
              <Mail size={17} /> Email School Office <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
