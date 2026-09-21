import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getEvents, getGalleryAlbums, getNewsPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

const academicAreas = [
  { name: "Science", slug: "science", description: "Build strong foundations in physics, chemistry, biology, mathematics and computing." },
  { name: "General Arts", slug: "general-arts", description: "Explore society, governance, history, geography, languages and the humanities." },
  { name: "Business", slug: "business", description: "Develop practical knowledge in accounting, management, economics and enterprise." },
  { name: "Agriculture", slug: "agricultural-science", description: "Study modern agriculture, food systems, agribusiness and environmental stewardship." },
  { name: "Home Economics", slug: "home-economics", description: "Gain applied skills in nutrition, textiles, family life and household management." },
  { name: "Visual and Performing Arts", slug: "visual-performing-arts", description: "Develop creative ability through art, design, music and performance." },
  { name: "Applied Technology", slug: "applied-technology", description: "Combine design, construction, computing, physics and technical problem-solving." },
  { name: "Languages", slug: "languages", description: "Strengthen communication through English literature, Ewe, French and related studies." }
];

export default function HomePage() {
  const galleryAlbums = getGalleryAlbums();
  const newsPosts = getNewsPosts().slice(0, 3);
  const events = getEvents().slice(0, 3);
  const achievements = [
    {
      value: "2,000+",
      label: "Current Students",
      description: "Learners currently shaped through academic discipline, leadership, culture and service."
    },
    {
      value: "8",
      label: "Learning Areas",
      description: "Academic pathways covering science, arts, business, agriculture, technology, languages and more."
    },
    {
      value: "60+",
      label: "Years of Impact",
      description: "A legacy of educating students and serving communities across Ghana and beyond."
    },
    {
      value: "4",
      label: "Houses",
      description: "A house system that supports leadership, teamwork and healthy competition."
    },
    {
      value: "Thousands",
      label: "of Graduates",
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
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-5xl">
            <h1 className="font-display max-w-4xl text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl xl:text-9xl">
              Anlo Senior <span className="block text-[#E4B52B]">High School</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/78">
              One of the Volta Region&apos;s respected senior high schools, serving learners and families from Anloga and surrounding communities since {siteConfig.establishedYear}.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/about" className="group inline-flex items-center gap-3 bg-[#C9990A] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#b8880a]">
                About ANSECO <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/programmes" className="inline-flex items-center border border-white/35 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:border-[#E4B52B] hover:bg-white/10">
                Explore Academics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#0D2E6B]/15 bg-[#C9990A] py-3 text-white">
        <div className="flex animate-[ticker_34s_linear_infinite] gap-16 whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="shrink-0 text-xs font-black uppercase tracking-[0.3em]">
              The star of Anlo Land
            </span>
          ))}
        </div>
      </div>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
          <div className="lg:pt-3">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Welcome</p>
            <h2 className="font-display text-5xl font-bold leading-[0.98] text-[#1A1A2E] sm:text-6xl lg:text-7xl">
              Welcome to ANSECO
            </h2>
          </div>
          <div className="max-w-4xl space-y-7 border-t-4 border-[#0D2E6B] pt-8 text-lg leading-8 text-[#555866] sm:text-xl sm:leading-9">
            <p>
              Anlo Senior High School is a respected public senior high school in Anloga, serving learners from the Anlo area, the Volta Region and communities beyond. Since {siteConfig.establishedYear}, ANSECO has helped young people grow through academic discipline, character formation and service to society.
            </p>
            <p>
              The school offers a balanced senior high education with pathways in science, general arts, business, agriculture, home economics, visual and performing arts, applied technology and languages. Students learn in classrooms, laboratories, workshops, school life programmes and co-curricular activities that prepare them for further study and responsible leadership.
            </p>
            <p>
              Guided by the motto <span className="font-semibold text-[#0D2E6B]">{siteConfig.motto}</span>, ANSECO continues to welcome parents, students, staff and alumni into a community committed to truth, service and steady progress.
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

          <div className="-mx-5 overflow-x-auto px-5 pb-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-6">
              {galleryAlbums.map((album) => (
                <Link
                  key={album.slug}
                  href={`/gallery/${album.slug}`}
                  className="group relative h-[360px] w-[82vw] shrink-0 snap-start overflow-hidden bg-[#0D2E6B] shadow-[0_24px_60px_rgba(13,46,107,0.18)] transition-transform hover:-translate-y-1 sm:w-[420px] lg:w-[420px]"
                >
                  <Image src={album.coverImage} alt="" fill sizes="(min-width: 1024px) 360px, 82vw" className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091d47] via-[#091d47]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C9990A]">Album</p>
                    <h3 className="font-display mb-3 text-3xl font-bold">{album.title}</h3>
                    <p className="line-clamp-2 text-sm leading-6 text-white/75">{album.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white">
                      View album <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7F3] py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Academic Learning Areas</p>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">Eight Pathways to Your Future</h2>
            </div>
            <Link href="/programmes" className="inline-flex w-fit items-center gap-2 border-b-2 border-[#C9990A] pb-1 text-sm font-black uppercase tracking-[0.12em] text-[#0D2E6B] transition-colors hover:text-[#C9990A]">
              Explore academics <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {academicAreas.map((area, index) => (
              <Link
                key={area.name}
                href={`/programmes#electives-${area.slug}`}
                className="group flex min-h-[260px] flex-col border border-[#0D2E6B]/10 bg-white p-7 text-left shadow-[0_18px_45px_rgba(13,46,107,0.06)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_26px_60px_rgba(13,46,107,0.12)]"
              >
                <div className="mb-8 text-xs font-black uppercase tracking-[0.22em] text-[#C9990A]">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mb-3 max-w-sm text-2xl font-black leading-tight text-[#0D2E6B] transition-colors group-hover:text-[#C9990A]">{area.name}</h3>
                <p className="max-w-xl text-sm leading-7 text-gray-600">{area.description}</p>
                <div className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B]">
                  View subjects <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
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

          <div className="relative overflow-hidden bg-[#0D2E6B] text-white">
            <div className="absolute inset-y-0 left-0 w-2 bg-[#FACC15]" />
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex flex-col justify-between border-b border-white/10 p-8 sm:p-10 lg:min-h-[520px] lg:border-b-0 lg:border-r lg:p-12">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FACC15]">The Star of Anlo-Land</p>
                  <h3 className="font-display mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                    Achievement measured in knowledge, confidence and character.
                  </h3>
                </div>
                <div className="mt-12 space-y-5 text-base leading-8 text-white/65">
                  <p>ANSECO&apos;s legacy lives in generations of students who have represented the school and contributed to communities across Ghana and beyond.</p>
                  <p>Across eight learning areas, students gain practical pathways for academic growth, responsible leadership and lifelong service.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2">
                {achievements.map((achievement, index) => (
                  <article key={achievement.label} className={`flex min-h-[260px] flex-col justify-between p-8 sm:p-9 ${index % 2 === 0 && index !== achievements.length - 1 ? "sm:border-r sm:border-white/10" : ""} ${index < achievements.length - 1 ? "border-b border-white/10" : ""} ${index === achievements.length - 1 ? "sm:col-span-2" : ""}`}>
                    <div className="font-display text-6xl font-bold leading-none text-[#FACC15] sm:text-7xl">{achievement.value}</div>
                    <div className="mt-10">
                      <h3 className="text-lg font-black uppercase tracking-[0.08em] text-white">{achievement.label}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/55">{achievement.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7F3] py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <div>
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Latest</p>
                <h2 className="font-display text-4xl font-bold text-[#0D2E6B] sm:text-5xl">News & Updates</h2>
              </div>
              <Link href="/news" className="flex items-center gap-2 border-b-2 border-[#C9990A] pb-1 text-sm font-black uppercase tracking-[0.12em] text-[#0D2E6B] transition-colors hover:text-[#C9990A]">
                All news <ChevronRight size={16} />
              </Link>
            </div>
            <div className="space-y-5">
              {newsPosts.map((post, index) => (
                <Link key={post.slug} href={`/news/${post.slug}`} className={`group grid gap-5 border border-[#0D2E6B]/10 bg-white p-4 shadow-[0_18px_45px_rgba(13,46,107,0.06)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_24px_60px_rgba(13,46,107,0.1)] ${index === 0 ? "sm:grid-cols-[220px_1fr]" : "sm:grid-cols-[150px_1fr]"}`}>
                  <div className={`relative overflow-hidden bg-[#EDF1F9] ${index === 0 ? "min-h-[180px]" : "min-h-[130px]"}`}>
                    <Image src={post.coverImage} alt="" fill sizes="150px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold">
                      <span className="bg-[#C9990A]/10 px-2.5 py-1 uppercase tracking-[0.18em] text-[#C9990A]">{post.category}</span>
                      <span className="text-gray-400">{formatDate(post.date)}</span>
                    </div>
                    <h3 className={`${index === 0 ? "text-2xl" : "text-lg"} mb-2 font-black leading-tight text-[#1A1A2E] transition-colors group-hover:text-[#0D2E6B]`}>{post.title}</h3>
                    <p className="line-clamp-2 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Schedule</p>
                <h2 className="font-display text-4xl font-bold text-[#0D2E6B] sm:text-5xl">Upcoming Events</h2>
              </div>
              <Link href="/events" className="flex items-center gap-2 border-b-2 border-[#C9990A] pb-1 text-sm font-black uppercase tracking-[0.12em] text-[#0D2E6B] transition-colors hover:text-[#C9990A]">
                All <ChevronRight size={16} />
              </Link>
            </div>
            <div className="space-y-5">
              {events.map((event) => {
                const date = new Date(event.startDate);
                return (
                  <Link key={event.slug} href={`/events/${event.slug}`} className="group flex gap-5 border-l-4 border-[#0D2E6B] bg-white p-5 shadow-[0_18px_45px_rgba(13,46,107,0.06)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_24px_60px_rgba(13,46,107,0.1)]">
                    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center bg-[#0D2E6B] text-white">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C9990A]">{date.toLocaleString("en", { month: "short" })}</span>
                      <span className="text-3xl font-bold leading-none">{date.getDate()}</span>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#C9990A]">{event.location}</p>
                      <h3 className="mb-1 text-xl font-black leading-tight text-[#1A1A2E] transition-colors group-hover:text-[#0D2E6B]">{event.title}</h3>
                      <p className="line-clamp-2 text-sm leading-6 text-gray-600">{event.excerpt}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
          <div className="relative overflow-hidden bg-[#0D2E6B] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-[#C9990A]" />
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#E4B52B]">Admissions</p>
            <h2 className="font-display max-w-xl text-4xl font-bold leading-[1.05] sm:text-5xl">
              Start Your Journey at ANSECO
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Students join ANSECO through the Ghana School Placement System. Our admissions team helps every placed student move from confirmation to successful enrolment.
            </p>
            <Link
              href="/admissions"
              className="group mt-9 inline-flex items-center gap-3 bg-[#C9990A] px-7 py-4 text-sm font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#b8880a]"
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
