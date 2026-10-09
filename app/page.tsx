import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LearningAreaCards } from "@/components/learning-area-cards";
import { SchoolTicker } from "@/components/school-ticker";
import { siteConfig } from "@/config/site";
import { learningAreaSummaries } from "@/data/learning-area-summaries";
import { getEvents, getGalleryAlbums, getNewsPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const viewMoreLinkClass = "inline-flex min-h-12 w-fit items-center justify-center rounded-full border-2 border-[#0D2E6B] px-7 py-3 text-sm font-black text-[#1A1A1A] transition-colors hover:bg-[#0D2E6B] hover:text-white";
  const galleryAlbums = getGalleryAlbums();
  const newsPosts = getNewsPosts().slice(0, 3);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const events = getEvents()
    .filter((event) => new Date(`${event.endDate || event.startDate}T23:59:59`) >= today)
    .slice(0, 5);
  const achievements = [
    {
      value: "2,094",
      label: "Current Students",
      description: "The verified 2026 student population of ANSECO."
    },
    {
      value: "8",
      label: "Learning Areas",
      description: "A broad academic offering across science, arts, business, agriculture, technology and languages."
    },
    {
      value: "4",
      label: "Student Houses",
      description: "Four houses support student belonging, leadership, activities and school community."
    },
    {
      value: "60+",
      label: "Years of Service",
      description: "More than six decades of learning, character development and service to communities."
    }
  ];
  const admissionSteps = [
    {
      number: "01",
      title: "Check Your Placement",
      description: "Verify your CSSPS placement on the national portal."
    },
    {
      number: "02",
      title: "Review Requirements",
      description: "Check the current ANSECO admission and prospectus requirements."
    },
    {
      number: "03",
      title: "Report to ANSECO",
      description: "Report on the school's official reporting date with the required documents."
    },
    {
      number: "04",
      title: "Complete Registration",
      description: "Follow the school's registration instructions to complete enrolment."
    }
  ];

  return (
    <div className="bg-[#F8F7F3]">
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#061a43] text-white">
        <Image src="/images/optimized/ama-anseco.jpg" alt="ANSECO campus statue and school grounds" fill priority sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a43] via-[#0D2E6B]/80 to-[#0D2E6B]/25" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-5xl">
            <h1 className="font-display max-w-4xl text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl xl:text-9xl">
              Anlo Senior <span className="block text-[#E4B52B]">High School</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/78">
              The Star of Anlo-Land. A learning community in Anloga committed to academic development, character, discipline and service.
            </p>
            <div className="mt-9 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link href="/about" className="inline-flex min-h-14 w-72 max-w-full min-w-0 flex-none items-center justify-center rounded-[12px] border border-white/35 px-4 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:border-[#E4B52B] hover:bg-white/10 sm:px-7">
                About ANSECO
              </Link>
              <Link href="/learning-areas" className="inline-flex min-h-14 w-72 max-w-full min-w-0 flex-none items-center justify-center rounded-[12px] bg-[#C9990A] px-4 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#b8880a] sm:px-7">
                Explore Academics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SchoolTicker />

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
          <div className="lg:pt-3">
            <h2 className="font-display text-5xl font-bold leading-[0.98] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
              Welcome to ANSECO
            </h2>
          </div>
          <div className="max-w-4xl space-y-5 text-base leading-8 text-[#555555] sm:text-lg">
            <p>
              Anlo Senior High School (ANSECO) is a public senior high school in Anloga, Volta Region, committed to academic development, character formation, discipline and service. Guided by our motto, <strong className="font-semibold text-[#1A1A1A]">&quot;{siteConfig.motto},&quot;</strong> the school provides a supportive environment where students can discover and develop their abilities.
            </p>
            <p>
              Across eight Learning Areas, students prepare for further education, future careers and responsible service while becoming part of a community connected to generations of ANSECO learners.
            </p>
          </div>
        </div>
      </section>

      <section id="why-anseco" className="scroll-mt-24 bg-[#F8F7F3] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-12">
          <div>
            <h2 className="font-display text-5xl font-bold leading-tight text-[#1A1A1A] sm:text-6xl">Why ANSECO?</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#4A4A4A] sm:text-lg">
              Discover an environment built around academic development, character, discipline and service.
            </p>
            <Link href="/admissions" className={`mt-8 ${viewMoreLinkClass}`}>
              Explore Admissions
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Academic Pathways", "Eight Learning Areas help students connect their abilities with further study and future careers."],
              ["Character Formation", "Truth and Service guide a school culture that values discipline, responsibility and leadership."],
              ["A Lasting Community", "Students join a school community connected to generations of families and old students."]
            ].map(([title, description]) => (
              <article key={title} className="flex min-h-64 flex-col justify-center border border-[#0D2E6B]/10 bg-white p-7">
                <h3 className="text-lg font-black text-[#1A1A1A]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#666666]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">Life at ANSECO</h2>
            </div>
            <Link href="/gallery" className={viewMoreLinkClass}>
              View Gallery
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {galleryAlbums.slice(0, 5).map((album, index) => (
              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className={`group relative min-h-[280px] overflow-hidden rounded-[12px] bg-[#0D2E6B] shadow-[0_20px_50px_rgba(13,46,107,0.16)] transition-transform hover:-translate-y-1 ${index === 0 ? "md:col-span-2 md:min-h-[420px] lg:row-span-2 lg:min-h-[580px]" : "lg:min-h-0"}`}
              >
                <Image
                  src={album.coverImage}
                  alt=""
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"}
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091d47] via-[#091d47]/30 to-transparent" />
                <div className={`absolute inset-x-0 bottom-0 text-white ${index === 0 ? "p-7 sm:p-9" : "p-6"}`}>
                  <h3 className={`font-display font-bold ${index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{album.title}</h3>
                  {index === 0 ? <p className="mt-3 max-w-xl line-clamp-2 text-sm leading-6 text-white/75">{album.description}</p> : null}
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white">
                    View album <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7F3] py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">Learning Areas</h2>
            </div>
            <Link href="/learning-areas" className={viewMoreLinkClass}>
              Explore Academics
            </Link>
          </div>
          <LearningAreaCards areas={learningAreaSummaries} />
        </div>
      </section>

      <section className="bg-[#F8F7F3] py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">Our Achievements</h2>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[12px] bg-[#0D2E6B] text-white">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:min-h-[480px] lg:border-r lg:border-white/10 lg:p-12">
                <div>
                  <h3 className="font-display mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                    Achievement measured in knowledge, confidence and character.
                  </h3>
                </div>
                <div className="mt-12 space-y-5 text-base leading-8 text-white/65">
                  <p>ANSECO&apos;s legacy lives in generations of students who have represented the school and contributed to communities across Ghana and beyond.</p>
                  <p>Across eight learning areas, students gain practical opportunities for academic growth, responsible leadership and lifelong service.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2">
                {achievements.map((achievement) => (
                  <article key={achievement.label} className="flex min-h-[210px] min-w-0 flex-col justify-center overflow-hidden bg-[#0D2E6B] p-6 sm:p-7">
                    <div className={`font-display whitespace-nowrap font-bold leading-none text-[#FACC15] ${achievement.value.length > 4 ? "text-4xl sm:text-5xl" : "text-5xl sm:text-6xl"}`}>{achievement.value}</div>
                    <div className="mt-5">
                      <h3 className="text-base font-black uppercase tracking-[0.08em] text-white">{achievement.label}</h3>
                      <p className="mt-2 text-xs leading-6 text-white/75 sm:text-sm">{achievement.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7F3] py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">Latest News</h2>
            </div>
            <Link href="/news" className={viewMoreLinkClass}>View All News</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {newsPosts.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="group flex min-h-full flex-col overflow-hidden rounded-[12px] border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.06)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_24px_55px_rgba(13,46,107,0.11)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EDF1F9]">
                  <Image src={post.coverImage} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.12em] text-[#8A6700]">
                    <span>{formatDate(post.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-[#C9990A]" />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-black leading-tight text-[#1A1A1A] transition-colors group-hover:text-[#9A7300] sm:text-2xl">{post.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#666666]">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#1A1A1A]">Read more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
          <div>
            <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">Upcoming Events</h2>
            <p className="mt-7 max-w-md text-base leading-8 text-[#666666]">Stay up to date with important dates, activities and programmes on the ANSECO school calendar.</p>
            <Link href="/events" className={`mt-9 ${viewMoreLinkClass}`}>Full School Calendar</Link>
          </div>

          <div className="relative ml-2 border-l-2 border-[#0D2E6B]/15 pl-8 sm:ml-4 sm:pl-10">
            <div className="space-y-10">
              {events.length ? events.map((event) => {
                const date = new Date(`${event.startDate}T00:00:00Z`);
                return (
                  <Link key={event.slug} href={`/events/${event.slug}`} className="group relative block">
                    <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-[#0D2E6B] bg-[#E4B52B] sm:-left-[50px]" />
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1A1A1A]">{date.toLocaleString("en", { month: "short", timeZone: "UTC" })} {date.getUTCFullYear()}</p>
                    <h3 className="mt-2 text-xl font-black leading-tight text-[#1A1A1A] transition-colors group-hover:text-[#8A6700] sm:text-2xl">{event.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#666666] sm:text-base">{event.excerpt}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#666666]">{event.location}</p>
                  </Link>
                );
              }) : (
                <div className="py-3">
                  <p className="text-lg font-black text-[#1A1A1A]">No upcoming events have been published.</p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#666666]">New dates will appear here after they have been confirmed by the school.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
          <div className="relative overflow-hidden rounded-[12px] bg-[#0D2E6B] p-8 text-white sm:p-10 lg:p-12">
            <h2 className="font-display max-w-xl text-4xl font-bold leading-[1.05] sm:text-5xl">
              Start Your Journey at ANSECO
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Students join ANSECO through the Ghana School Placement System. Our admissions team helps every placed student move from confirmation to successful enrolment.
            </p>
            <Link
              href="/admissions"
              className="group mt-9 inline-flex items-center gap-3 rounded-[12px] bg-[#C9990A] px-7 py-4 text-sm font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#b8880a]"
            >
              View Admissions Guide <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="border-y border-[#0D2E6B]/5">
            {admissionSteps.map((step) => (
              <div key={step.number} className="group grid gap-4 border-b border-[#0D2E6B]/5 py-6 last:border-b-0 sm:grid-cols-[72px_1fr] sm:items-start sm:gap-6">
                <div className="font-display text-3xl font-bold leading-none text-[#8A6700] transition-colors group-hover:text-[#1A1A1A] sm:text-4xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#1A1A1A] sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#666666] sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
