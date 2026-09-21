import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getEvents, getGalleryAlbums, getNewsPosts } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/about/our-history", "/about/school-administration", "/programmes", "/admissions", "/admissions/how-to-apply", "/admissions/prospectus", "/admissions/student-guidelines", "/admissions/faqs", "/news", "/events", "/school-life", "/student-life/discipline-code-of-conduct", "/resources", "/gallery", "/alumni"];
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
