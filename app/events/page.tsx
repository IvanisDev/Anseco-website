import type { Metadata } from "next";
import { EventsFilter } from "@/components/events-filter";
import { PageHeader } from "@/components/page-header";
import { getEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past ANSECO school events."
};

export default function EventsPage() {
  return (
    <>
      <PageHeader title="Events" eyebrow="Calendar" description="View upcoming and past school activities. Filtering happens instantly on this page." />
      <section className="container py-10">
        <EventsFilter events={getEvents()} />
      </section>
    </>
  );
}
