import type { Metadata } from "next";
import { Suspense } from "react";
import { AmaAssistant } from "@/components/ama-assistant";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.schoolName}`,
    template: `%s | ${siteConfig.fullName}`
  },
  description: `${siteConfig.fullName} in ${siteConfig.location}. Admissions, learning areas, news, events and alumni information.`,
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png?v=2", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2"
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
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-[#0D2E6B] focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-[#0D2E6B]" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <AmaAssistant />
      </body>
    </html>
  );
}
