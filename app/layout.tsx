import type { Metadata } from "next";
import { Suspense } from "react";
import { RoutePrefetcher } from "@/components/route-prefetcher";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.schoolName}`,
    template: `%s | ${siteConfig.schoolName}`
  },
  description: `${siteConfig.fullName} in ${siteConfig.location}. Admissions, programmes, news, events and alumni information.`,
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: siteConfig.fullName,
    description: `${siteConfig.fullName} official school website.`,
    url: siteConfig.url,
    siteName: siteConfig.schoolName,
    images: ["/images/campus.svg"],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <RoutePrefetcher />
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-3" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
