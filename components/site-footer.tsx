import Link from "next/link";
import { Facebook, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { AnsecoCrest } from "@/components/anseco-crest";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "About ANSECO", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Programmes", href: "/programmes" },
  { label: "News & Events", href: "/news" },
  { label: "School Life", href: "/school-life" },
  { label: "Contact", href: "/contact" }
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
            <div className="mt-6 flex items-center gap-3 text-white/45">
              <a href="#" aria-label="Facebook" className="border border-white/15 p-2.5 transition-colors hover:border-[#C9990A] hover:text-[#C9990A]"><Facebook size={17} /></a>
              <a href="#" aria-label="Twitter" className="border border-white/15 p-2.5 transition-colors hover:border-[#C9990A] hover:text-[#C9990A]"><Twitter size={17} /></a>
              <a href="#" aria-label="YouTube" className="border border-white/15 p-2.5 transition-colors hover:border-[#C9990A] hover:text-[#C9990A]"><Youtube size={17} /></a>
            </div>
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
                <span>Anlo Senior High School<br />Anloga, Volta Region<br />Ghana</span>
              </div>
              <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white">
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

        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row">
          <p className="text-center text-xs text-white/40 sm:text-left">© {new Date().getFullYear()} Anlo Senior High School (ANSECO). All rights reserved.</p>
          <p className="text-center text-xs text-white/40 sm:text-right">Truth and Service</p>
        </div>
      </div>
    </footer>
  );
}
