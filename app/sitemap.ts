import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getEvents, getGalleryAlbums, getNewsPosts } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/about/our-history", "/about/school-administration", "/learning-areas", "/final-year-students", "/academic-calendar", "/admissions", "/admissions/how-to-apply", "/admissions/prospectus", "/admissions/student-guidelines", "/admissions/faqs", "/news", "/events", "/campus-life", "/campus-life/clubs-societies", "/campus-life/sports-athletics", "/campus-life/boarding-day-students", "/resources", "/gallery", "/alumni", "/alumni/leadership", "/alumni/projects-impact", "/alumni/transcript-records", "/alumni/get-involved", "/contact"];
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));

  return [
    ...staticRoutes,
    ...getNewsPosts().map((item) => ({ url: `${siteConfig.url}/news/${item.slug}`, lastModified: new Date(item.date) })),
    ...getEvents().map((item) => ({ url: `${siteConfig.url}/events/${item.slug}`, lastModified: new Date(item.startDate) })),
    ...getGalleryAlbums().map((item) => ({ url: `${siteConfig.url}/gallery/${item.slug}`, lastModified: new Date() }))
  ];
}
