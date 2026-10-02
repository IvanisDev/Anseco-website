import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { AnsecoCrest } from "@/components/anseco-crest";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "About ANSECO", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Learning Areas", href: "/learning-areas" },
  { label: "News & Events", href: "/news" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Contact", href: "/contact" }
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-[#C9990A] bg-[#061a43] text-white">
      <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                <AnsecoCrest className="h-16 w-16" />
              </div>
              <div>
                <div className="text-xl font-black leading-tight">Anlo Senior High School</div>
                <div className="mt-1 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">ANSECO</div>
              </div>
            </div>
            <p className="max-w-lg text-base leading-8 text-white/65">
              Shaping generations of learners since {siteConfig.establishedYear} through academic work, discipline, community and service.
            </p>
            <div className="mt-8 flex w-full max-w-[380px] items-center gap-4">
              <a
                href="https://waecgh.org"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the WAEC Ghana website"
                className="transition-opacity hover:opacity-85"
              >
                <Image
                  src="/images/partners/education-partner-logo.svg"
                  alt="WAEC Ghana"
                  width={115}
                  height={117}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </a>
              <a
                href="https://ges.gov.gh"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the Ghana Education Service website"
                className="flex min-w-0 items-center transition-opacity hover:opacity-85"
              >
                <Image
                  src="/images/partners/ghana-education-service-crest.png"
                  alt=""
                  width={1280}
                  height={1067}
                  className="h-14 w-auto shrink-0 object-contain sm:h-16"
                  aria-hidden="true"
                />
                <span className="ml-3 border-l-2 border-white/60 py-1 pl-3 text-xs font-bold leading-5 text-white sm:text-sm">
                  Ghana Education<br />Service (GES)
                </span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Explore</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold text-white/75 transition-colors hover:text-[#FACC15]">
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
                <span>{siteConfig.addressLines.map((line) => <span key={line} className="block">{line}</span>)}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/65">
                <Phone size={17} className="text-[#C9990A]" />
                <span>{siteConfig.phones.map((phone) => <a key={phone.href} href={`tel:${phone.href}`} className="block transition-colors hover:text-white">{phone.label}</a>)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-center text-xs text-white/70">© {new Date().getFullYear()} Anlo Senior High School (ANSECO). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
