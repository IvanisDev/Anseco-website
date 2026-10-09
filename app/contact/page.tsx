import { ExternalLink, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Contact",
  description: "Current address and telephone numbers for Anlo Senior High School.",
  path: "/contact/"
});

export default function ContactPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        title="Contact ANSECO"
        eyebrow="Get in Touch"
        description="Contact Anlo Senior High School or find the school in Anloga, Volta Region."
      />

      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
            <section className="relative min-h-[440px] overflow-hidden rounded-[12px] bg-[#E8EDF6] shadow-[0_20px_50px_rgba(13,46,107,0.08)] lg:min-h-[500px]">
              <iframe
                title="Map showing Anlo Senior High School in Anloga"
                src={siteConfig.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </section>

            <aside className="flex min-h-[440px] flex-col justify-center rounded-[12px] bg-white p-7 shadow-[0_20px_50px_rgba(13,46,107,0.08)] sm:p-8 lg:min-h-[500px] lg:p-9">
              <div className="flex gap-5 border-b border-[#0D2E6B]/10 pb-7">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0D2E6B] text-[#FACC15]">
                  <MapPin size={23} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#1A1A1A]">Address</h2>
                  <address className="mt-2 not-italic text-base leading-8 text-[#666666]">
                    {siteConfig.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
                    <span className="block">Ghana</span>
                  </address>
                  <a href={siteConfig.directionsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 font-bold text-[#1A1A1A] underline decoration-[#C9990A] decoration-2 underline-offset-4">
                    Open directions <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex gap-5 border-b border-[#0D2E6B]/10 py-7">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0D2E6B] text-[#FACC15]">
                  <Phone size={22} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#1A1A1A]">Phone</h2>
                  <ul className="mt-2 space-y-1" aria-label="School telephone numbers">
                    {siteConfig.phones.map((phone) => (
                      <li key={phone.href}>
                        <a href={`tel:${phone.href}`} aria-label={`Call ANSECO at ${phone.label}`} className="inline-flex min-h-11 items-center text-base text-[#666666] transition-colors hover:text-[#8A6700]">
                          {phone.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-7">
                <p className="mt-3 text-sm leading-7 text-[#666666]">
                  Call the school directly for official enquiries about admissions, academics, student welfare, and reporting.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
