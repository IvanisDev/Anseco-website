import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { LearningAreaCards } from "@/components/learning-area-cards";
import { SchoolTicker } from "@/components/school-ticker";
import { siteConfig } from "@/config/site";
import { learningAreaSummaries } from "@/data/learning-area-summaries";
import { getEvents, getGalleryAlbums, getNewsPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const galleryAlbums = getGalleryAlbums();
  const newsPosts = getNewsPosts().slice(0, 3);
  const events = getEvents().slice(0, 5);
  const achievements = [
    {
      value: "8",
      label: "Learning Areas",
      description: "A broad academic offering across science, arts, business, agriculture, technology and languages."
    },
    {
      value: "3",
      label: "Consecutive Awards",
      description: "Best Disciplined School in the Volta Region in 2008, 2009 and 2010."
    },
    {
      value: "70+",
      label: "Years of Service",
      description: "Serving learners and communities since the school was established in 1954."
    },
    {
      value: "2",
      label: "National Titles",
      description: "National Champion in the Inter-School Constitution Game Competition in 2007 and 2010."
    },
    {
      value: "10,000+",
      label: "Graduates",
      description: "Generations of ANSECO graduates contributing to communities across Ghana and beyond."
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
      title: "Prepare Documents",
      description: "Gather BECE results, birth certificate, and photos."
    },
    {
      number: "03",
      title: "Report to School",
      description: "Report on the official reporting date with all documents."
    },
    {
      number: "04",
      title: "Pay Fees",
      description: "Pay the required fees to complete enrolment."
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
              One of the Volta Region&apos;s respected senior high schools, serving learners and families from Anloga and surrounding communities since {siteConfig.establishedYear}.
            </p>
            <div className="mt-9 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link href="/about" className="group inline-flex min-h-14 w-72 max-w-full min-w-0 flex-none items-center justify-center gap-3 rounded-[12px] bg-[#C9990A] px-4 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#b8880a] sm:px-7">
                About ANSECO <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/learning-areas" className="inline-flex min-h-14 w-72 max-w-full min-w-0 flex-none items-center justify-center rounded-[12px] border border-white/35 px-4 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:border-[#E4B52B] hover:bg-white/10 sm:px-7">
                Explore Academics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SchoolTicker />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
          <div className="lg:pt-3">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Welcome</p>
            <h2 className="font-display text-5xl font-bold leading-[0.98] text-[#1A1A2E] sm:text-6xl lg:text-7xl">
              Welcome to ANSECO
            </h2>
          </div>
          <div className="max-w-4xl space-y-5 border-t-4 border-[#0D2E6B] pt-7 text-base leading-8 text-[#555866] sm:text-lg">
            <p>
              Anlo Senior High School (ANSECO) is a public senior high school in Anloga, Volta Region, committed to academic development, character formation, discipline and service.
            </p>
            <p>
              Guided by our motto, <strong className="font-semibold text-[#0D2E6B]">&quot;{siteConfig.motto},&quot;</strong> ANSECO provides a supportive learning environment where students are encouraged to discover their potential, develop their abilities and prepare for further education and responsible service to society.
            </p>
            <p>
              Whether you are a prospective student, parent, current student, old student or visitor, we invite you to explore ANSECO and learn more about our academics, campus life, history and community.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Gallery</p>
              <h2 className="font-display text-4xl font-bold text-[#0D2E6B] sm:text-5xl">Life at ANSECO</h2>
            </div>
            <Link href="/gallery" className="flex items-center gap-2 border-b-2 border-[#C9990A] pb-1 text-sm font-black uppercase tracking-[0.12em] text-[#0D2E6B] transition-colors hover:text-[#C9990A]">
              View gallery <ChevronRight size={16} />
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
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#FACC15]">Album</p>
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
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Academic Learning Areas</p>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">Eight Learning Areas</h2>
            </div>
            <Link href="/learning-areas" className="inline-flex w-fit items-center gap-2 border-b-2 border-[#C9990A] pb-1 text-sm font-black uppercase tracking-[0.12em] text-[#0D2E6B] transition-colors hover:text-[#C9990A]">
              Explore academics <ChevronRight size={16} />
            </Link>
          </div>
          <LearningAreaCards areas={learningAreaSummaries} />
        </div>
      </section>

      <section className="bg-[#F8F7F3] py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Legacy in Numbers</p>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl lg:text-6xl">Our Achievements</h2>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[12px] bg-[#0D2E6B] text-white">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:min-h-[480px] lg:border-r lg:border-white/10 lg:p-12">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FACC15]">The Star of Anlo-Land</p>
                  <h3 className="font-display mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                    Achievement measured in knowledge, confidence and character.
                  </h3>
                </div>
                <div className="mt-12 space-y-5 text-base leading-8 text-white/65">
                  <p>ANSECO&apos;s legacy lives in generations of students who have represented the school and contributed to communities across Ghana and beyond.</p>
                  <p>Across eight learning areas, students gain practical opportunities for academic growth, responsible leadership and lifelong service.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-6">
                {achievements.map((achievement, index) => (
                  <article key={achievement.label} className={`flex min-h-[210px] min-w-0 flex-col justify-center overflow-hidden bg-[#0D2E6B] p-6 sm:p-7 ${index < 2 ? "xl:col-span-3" : "xl:col-span-2"} ${index === achievements.length - 1 ? "sm:col-span-2 xl:col-span-2" : ""}`}>
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
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Latest from ANSECO</p>
              <h2 className="font-display text-4xl font-bold text-[#0D2E6B] sm:text-5xl">Latest News</h2>
            </div>
            <Link href="/news" className="inline-flex w-fit items-center gap-2 border-b-2 border-[#C9990A] pb-1 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B] transition-colors hover:text-[#C9990A]">View all news <ChevronRight size={15} /></Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {newsPosts.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="group flex min-h-full flex-col overflow-hidden rounded-[12px] border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.06)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_24px_55px_rgba(13,46,107,0.11)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EDF1F9]">
                  <Image src={post.coverImage} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.12em] text-[#C9990A]">
                    <span>{formatDate(post.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-[#C9990A]" />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-black leading-tight text-[#0D2E6B] transition-colors group-hover:text-[#9A7300] sm:text-2xl">{post.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#64748B]">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#0D2E6B]">Read more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">What&apos;s Next</p>
            <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">Upcoming Events</h2>
            <div className="mt-6 h-1 w-20 bg-[#C9990A]" />
            <p className="mt-7 max-w-md text-base leading-8 text-[#64748B]">Stay up to date with important dates, activities and programmes on the ANSECO school calendar.</p>
            <Link href="/events" className="mt-9 inline-flex items-center gap-3 rounded-[12px] bg-[#0D2E6B] px-7 py-4 text-sm font-black text-white transition-colors hover:bg-[#C9990A]">Full School Calendar <ArrowRight size={17} /></Link>
          </div>

          <div className="relative ml-2 border-l-2 border-[#0D2E6B]/15 pl-8 sm:ml-4 sm:pl-10">
            <div className="space-y-10">
              {events.map((event) => {
                const date = new Date(`${event.startDate}T00:00:00Z`);
                return (
                  <Link key={event.slug} href={`/events/${event.slug}`} className="group relative block">
                    <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-[#0D2E6B] bg-[#E4B52B] sm:-left-[50px]" />
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0D2E6B]">{date.toLocaleString("en", { month: "short", timeZone: "UTC" })} {date.getUTCFullYear()}</p>
                    <h3 className="mt-2 text-xl font-black leading-tight text-[#0D2E6B] transition-colors group-hover:text-[#C9990A] sm:text-2xl">{event.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#64748B] sm:text-base">{event.excerpt}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#64748B]">{event.location}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
          <div className="relative overflow-hidden rounded-[12px] bg-[#0D2E6B] p-8 text-white sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#E4B52B]">Admissions</p>
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

          <div className="border-y border-[#0D2E6B]/10">
            {admissionSteps.map((step) => (
              <div key={step.number} className="group grid gap-4 border-b border-[#0D2E6B]/10 py-6 last:border-b-0 sm:grid-cols-[72px_1fr] sm:items-start sm:gap-6">
                <div className="font-display text-3xl font-bold leading-none text-[#C9990A] transition-colors group-hover:text-[#0D2E6B] sm:text-4xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0D2E6B] sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#64748B] sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
