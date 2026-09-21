import type { Metadata } from "next";
import { NewsFilter } from "@/components/news-filter";
import { PageHeader } from "@/components/page-header";
import { getAllNewsPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "School notices, announcements and updates from ANSECO."
};

export default function NewsPage() {
  const posts = getAllNewsPosts();
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="News & Updates" eyebrow="Latest from ANSECO" description="School notices, achievements and stories from ANSECO and trusted education news sources." />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 grid gap-6 border-b border-[#0D2E6B]/10 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Newsroom</p><h2 className="font-display text-4xl font-bold text-[#0D2E6B] sm:text-5xl">Latest Stories</h2></div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748B]">{posts.length} updates</p>
          </div>
          <NewsFilter posts={posts} />
        </div>
      </section>
    </div>
  );
}
