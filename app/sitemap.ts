import type { MetadataRoute } from "next";
import { getEvents, getGalleryAlbums, getNewsPosts } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/about/our-history", "/about/school-administration", "/learning-areas", "/final-year-students", "/academic-calendar", "/admissions", "/admissions/how-to-apply", "/admissions/prospectus", "/admissions/student-guidelines", "/admissions/faqs", "/news", "/events", "/campus-life", "/campus-life/clubs-societies", "/campus-life/sports-athletics", "/campus-life/boarding-day-students", "/campus-life/facilities", "/resources", "/gallery", "/alumni", "/alumni/leadership", "/alumni/projects-impact", "/alumni/transcript-records", "/alumni/get-involved", "/contact"];
  const staticRoutes = routes.map((route) => ({
    url: absoluteUrl(route ? `${route}/` : "/"),
    lastModified: new Date()
  }));

  return [
    ...staticRoutes,
    ...getNewsPosts().map((item) => ({ url: absoluteUrl(`/news/${item.slug}/`), lastModified: new Date(item.date) })),
    ...getEvents().map((item) => ({ url: absoluteUrl(`/events/${item.slug}/`), lastModified: new Date(item.startDate) })),
    ...getGalleryAlbums().map((item) => ({ url: absoluteUrl(`/gallery/${item.slug}/`), lastModified: new Date() }))
  ];
}
