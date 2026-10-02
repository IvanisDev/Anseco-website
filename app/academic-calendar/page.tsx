import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { getEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academic Calendar",
  description: "Published academic dates, school programmes and calendar updates from Anlo Senior High School."
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC"
});

const monthFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  timeZone: "UTC"
});

function formatEventDate(startDate: string, endDate?: string) {
  const start = new Date(`${startDate}T00:00:00Z`);
  if (!endDate) return dateFormatter.format(start);

  const end = new Date(`${endDate}T00:00:00Z`);
  return `${dateFormatter.format(start)} to ${dateFormatter.format(end)}`;
}

export default function AcademicCalendarPage() {
  const events = getEvents();

  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Academics"
        title="Academic Calendar"
        description="View published academic dates, school programmes and activities across the ANSECO community."
      />

      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 grid gap-6 border-b border-[#0D2E6B]/10 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Published Dates</p>
              <h2 className="font-display mt-3 text-4xl font-bold leading-tight text-[#0D2E6B] sm:text-5xl">
                2026 School Calendar
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#64748B]">
                Students, parents, and guardians should check this page regularly for confirmed dates and event updates.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-[#64748B]">
              <CalendarDays size={20} className="text-[#C9990A]" />
              {events.length} published dates
            </div>
          </div>

          <ol className="grid gap-5 md:grid-cols-2">
            {events.map((event) => {
              const date = new Date(`${event.startDate}T00:00:00Z`);
              return (
                <li key={event.slug}>
                  <Link
                    href={`/events/${event.slug}`}
                    className="group grid h-full grid-cols-[84px_1fr] overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.05)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_22px_50px_rgba(13,46,107,0.1)]"
                  >
                    <div className="flex flex-col items-center justify-center bg-[#0D2E6B] px-3 py-6 text-center text-white">
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-[#FACC15]">
                        {monthFormatter.format(date)}
                      </span>
                      <span className="font-display mt-1 text-4xl font-bold leading-none">{date.getUTCDate()}</span>
                    </div>
                    <div className="flex min-w-0 flex-col p-6">
                      <p className="text-xs font-bold text-[#64748B]">{formatEventDate(event.startDate, event.endDate)}</p>
                      <h3 className="mt-3 text-xl font-black leading-tight text-[#0D2E6B] transition-colors group-hover:text-[#9A7300]">
                        {event.title}
                      </h3>
                      <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#64748B]">
                        <MapPin size={15} className="shrink-0 text-[#C9990A]" />
                        {event.location}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-[#64748B]">{event.excerpt}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B]">
                        Event details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="mt-12 flex flex-col gap-5 border-l-4 border-[#C9990A] bg-white p-7 shadow-[0_16px_38px_rgba(13,46,107,0.05)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9990A]">More School Dates</p>
              <p className="mt-2 text-base leading-7 text-[#475569]">Visit Events for the latest programmes and activity updates.</p>
            </div>
            <Link href="/events" className="inline-flex w-fit items-center gap-3 bg-[#0D2E6B] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#C9990A]">
              View all events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
