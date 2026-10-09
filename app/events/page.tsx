import { EventsFilter } from "@/components/events-filter";
import { PageHeader } from "@/components/page-header";
import { getEvents } from "@/lib/content";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Events",
  description: "Upcoming and past ANSECO school events.",
  path: "/events/"
});

export default function EventsPage() {
  const events = getEvents();
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Events Calendar" eyebrow="What&apos;s Happening" description="Important dates, school programmes and activities across the ANSECO community." />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 grid gap-6 border-b border-[#0D2E6B]/10 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><h2 className="font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">Events at ANSECO</h2></div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#666666]">{events.length} scheduled events</p>
          </div>
          <EventsFilter events={events} />
        </div>
      </section>
    </div>
  );
}
