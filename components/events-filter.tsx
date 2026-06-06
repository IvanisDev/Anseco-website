"use client";

import { useState } from "react";
import { ContentCard } from "@/components/content-card";
import { Button } from "@/components/ui/button";
import { isFutureOrToday } from "@/lib/utils";
import type { EventPost } from "@/lib/content";

export function EventsFilter({ events }: { events: EventPost[] }) {
  const [group, setGroup] = useState<"upcoming" | "past" | "all">("upcoming");
  const visible = events.filter((event) => {
    if (group === "all") return true;
    const upcoming = isFutureOrToday(event.startDate);
    return group === "upcoming" ? upcoming : !upcoming;
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter events by date">
        {(["upcoming", "past", "all"] as const).map((item) => (
          <Button
            key={item}
            type="button"
            variant={group === item ? "default" : "outline"}
            size="sm"
            onClick={() => setGroup(item)}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
