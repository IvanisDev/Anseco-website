import type { Metadata } from "next";
import type React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details and email form for ANSECO."
};

const mapCoordinates = {
  latitude: 5.80595,
  longitude: 0.93075
};
const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=0.92575%2C5.80095%2C0.93575%2C5.81095&layer=mapnik&marker=${mapCoordinates.latitude}%2C${mapCoordinates.longitude}`;
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapCoordinates.latitude},${mapCoordinates.longitude}`;

export default function ContactPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Contact ANSECO" eyebrow="Get in Touch" description="Reach out by form, phone or email. The form opens your email app with a prepared message." />
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 font-bold text-[#0D2E6B]">Send a Message</h2>
            <p className="mb-6 text-sm text-gray-500">Your mail app will open so you can review and send the message.</p>
            <ContactForm />
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-bold text-[#0D2E6B]">Contact Information</h2>
            <div className="space-y-4">
              <Info icon={<MapPin size={15} />} label="Address" value={siteConfig.address} />
              <Info icon={<Phone size={15} />} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replaceAll(" ", "")}`} />
              <Info icon={<Mail size={15} />} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            </div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-[#0D2E6B]"><Clock size={15} className="text-[#C9990A]" /> Office Hours</h2>
            <div className="space-y-2.5 text-sm">
              {[
                ["Monday - Friday", "8:00 AM - 4:00 PM"],
                ["Saturday", "9:00 AM - 12:00 PM"],
                ["Sunday & Public Holidays", "Closed"]
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-2">
                  <span className="text-xs text-gray-500">{day}</span>
                  <span className="text-xs font-medium text-[#0D2E6B]">{hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#0D2E6B]/10 bg-[#EDF1F9] shadow-sm">
            <iframe
              title="Map showing Anlo Senior High School in Anloga, Volta Region"
              src={openStreetMapUrl}
              className="h-64 w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="px-1">
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2E6B] transition-colors hover:text-[#C9990A]">
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Info({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = href ? <a href={href} className="text-sm text-gray-600 hover:text-[#0D2E6B]">{value}</a> : <div className="text-sm leading-relaxed text-gray-600">{value}</div>;
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EDF1F9] text-[#0D2E6B]">{icon}</div>
      <div>
        <div className="mb-0.5 text-xs font-semibold text-[#0D2E6B]">{label}</div>
        {content}
      </div>
    </div>
  );
}
