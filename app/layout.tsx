import type { Metadata } from "next";
import { AmaAssistant } from "@/components/ama-assistant";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { DEFAULT_SOCIAL_IMAGE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.schoolName}`,
    template: `%s | ${siteConfig.fullName}`
  },
  description: `${siteConfig.fullName} in ${siteConfig.location}. Admissions, learning areas, news, events and alumni information.`,
  alternates: { canonical: "/" },
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
    images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: "ANSECO campus and school grounds" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: `${siteConfig.fullName} official school website.`,
    images: [DEFAULT_SOCIAL_IMAGE]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-[#0D2E6B] focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-[#1A1A1A]" href="#main">
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
