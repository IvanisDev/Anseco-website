"use client";

import { useMemo, useState } from "react";
import { ContentCard } from "@/components/content-card";
import { Button } from "@/components/ui/button";
import type { NewsPost } from "@/lib/content";

export function NewsFilter({ posts }: { posts: NewsPost[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((post) => post.category)))], [posts]);
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? posts : posts.filter((post) => post.category === category);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter news by category">
        {categories.map((item) => (
          <Button
            key={item}
            type="button"
            variant={category === item ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <ContentCard
            key={post.slug}
            href={`/news/${post.slug}`}
            title={post.title}
            excerpt={post.excerpt}
            image={post.coverImage}
            meta={post.date}
            badge={post.category}
          />
        ))}
      </div>
    </div>
  );
}
