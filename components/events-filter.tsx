"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { ContentCard } from "@/components/content-card";
import { isFutureOrToday } from "@/lib/utils";
import type { EventPost } from "@/lib/content";

export function EventsFilter({ events }: { events: EventPost[] }) {
  const [group, setGroup] = useState<"all" | "upcoming" | "past">("all");
  const visible = events.filter((event) => {
    if (group === "all") return true;
    const upcoming = isFutureOrToday(event.startDate);
    return group === "upcoming" ? upcoming : !upcoming;
  });

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter events by date">
        {(["all", "upcoming", "past"] as const).map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={group === item}
            aria-controls="events-results"
            className={`min-h-11 rounded-[12px] border px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition-colors active:scale-[0.98] ${group === item ? "border-[#0D2E6B] bg-[#0D2E6B] text-white" : "border-[#0D2E6B]/15 bg-white text-[#1A1A1A] hover:border-[#C9990A] hover:text-[#8A6700]"}`}
            onClick={() => setGroup(item)}
          >
            {group === item ? <Check size={14} aria-hidden="true" className="mr-2 inline-block" /> : null}
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "event" : "events"}.
      </p>
      <div id="events-results" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((event) => (
          <ContentCard
            key={event.slug}
            href={`/events/${event.slug}`}
            title={event.title}
            excerpt={event.excerpt}
            image={event.coverImage}
            meta={event.startDate}
            badge={event.location}
          />
        ))}
      </div>
      {visible.length === 0 ? <p className="border border-[#0D2E6B]/10 bg-white p-8 text-center text-[#666666]">No events are available for this filter.</p> : null}
    </div>
  );
}
