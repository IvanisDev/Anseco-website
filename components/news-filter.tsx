"use client";

import { useMemo, useState } from "react";
import { ContentCard } from "@/components/content-card";
import type { NewsPost } from "@/lib/content";

export function NewsFilter({ posts }: { posts: NewsPost[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((post) => post.category)))], [posts]);
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? posts : posts.filter((post) => post.category === category);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" aria-label="Filter news by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={`border px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition-colors ${category === item ? "border-[#0D2E6B] bg-[#0D2E6B] text-white" : "border-[#0D2E6B]/15 bg-white text-[#0D2E6B] hover:border-[#C9990A] hover:text-[#C9990A]"}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <ContentCard
            key={post.slug}
            href={post.externalUrl || `/news/${post.slug}`}
            title={post.title}
            excerpt={post.excerpt}
            image={post.coverImage}
            meta={post.date}
            badge={post.source || post.category}
            external={Boolean(post.externalUrl)}
          />
        ))}
      </div>
      {visible.length === 0 ? <p className="border border-[#0D2E6B]/10 bg-white p-8 text-center text-[#64748B]">No news items are available in this category.</p> : null}
    </div>
  );
}
