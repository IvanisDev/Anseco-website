import type { Metadata } from "next";
import { NewsFilter } from "@/components/news-filter";
import { PageHeader } from "@/components/page-header";
import { getAllNewsPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "School notices, announcements and updates from ANSECO."
};

export default function NewsPage() {
  return (
    <>
      <PageHeader title="News" eyebrow="Updates" description="Browse notices and school updates. Use the category buttons to filter on this page." />
      <section className="container py-20">
        <NewsFilter posts={getAllNewsPosts()} />
      </section>
    </>
  );
}
