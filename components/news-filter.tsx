"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { ContentCard } from "@/components/content-card";
import type { NewsPost } from "@/lib/content";

export function NewsFilter({ posts }: { posts: NewsPost[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((post) => post.category)))], [posts]);
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? posts : posts.filter((post) => post.category === category);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter news by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            aria-controls="news-results"
            className={`min-h-11 rounded-[12px] border px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition-colors active:scale-[0.98] ${category === item ? "border-[#0D2E6B] bg-[#0D2E6B] text-white" : "border-[#0D2E6B]/15 bg-white text-[#1A1A1A] hover:border-[#C9990A] hover:text-[#8A6700]"}`}
            onClick={() => setCategory(item)}
          >
            {category === item ? <Check size={14} aria-hidden="true" className="mr-2 inline-block" /> : null}
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} news {visible.length === 1 ? "item" : "items"}.
      </p>
      <div id="news-results" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <ContentCard
            key={post.slug}
            href={post.externalUrl || `/news/${post.slug}`}
            title={post.title}
            excerpt={post.excerpt}
            image={post.coverImage}
            meta={post.date}
            badge={post.externalUrl ? "External Source ↗" : "Official ANSECO Notice"}
            external={Boolean(post.externalUrl)}
          />
        ))}
      </div>
      {visible.length === 0 ? <p className="border border-[#0D2E6B]/10 bg-white p-8 text-center text-[#666666]">No news items are available in this category.</p> : null}
    </div>
  );
}
