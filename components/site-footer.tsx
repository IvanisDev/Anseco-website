import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnsecoCrest } from "@/components/anseco-crest";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Learning Areas", href: "/programmes" },
  { label: "News & Events", href: "/news" },
  { label: "Campus Life", href: "/school-life" }
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-[#C9990A] bg-[#061a43] text-white">
      <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-white/95 p-2 shadow-sm">
                <AnsecoCrest className="h-12 w-12" />
              </div>
              <div>
                <div className="text-xl font-black leading-tight">Anlo Senior High School</div>
                <div className="mt-1 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">ANSECO</div>
              </div>
            </div>
            <p className="max-w-lg text-base leading-8 text-white/65">
              Shaping generations of learners since {siteConfig.establishedYear} through academic work, discipline, community and service.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Explore</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold text-white/60 transition-colors hover:text-[#C9990A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Contact</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3 text-sm leading-7 text-white/65">
                <MapPin size={17} className="mt-1 shrink-0 text-[#C9990A]" />
                <span>{siteConfig.address}</span>
              </div>
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white">
                <Phone size={17} className="text-[#C9990A]" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white">
                <Mail size={17} className="text-[#C9990A]" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-center text-xs text-white/40">© {new Date().getFullYear()} Anlo Senior High School (ANSECO). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
