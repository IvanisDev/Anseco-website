import type { Metadata } from "next";
import { CheckCircle, FileText, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Request a Transcript",
  description: "How former ANSECO students can request an academic transcript from the school."
};

const requestDetails = [
  "Full name used while attending ANSECO",
  "Year of admission",
  "Year of graduation or completion",
  "House of residence",
  "Current telephone number or email address",
  "Purpose of the transcript request",
  "Where the transcript should be sent or whether it will be collected in person"
];

const deliveryOptions = [
  "Collect the transcript from the school",
  "Have the transcript sent to a specified institution or address, where this service is available"
];

export default function TranscriptRecordsPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Alumni"
        title="Request a Transcript"
        description="Former students of Anlo Senior High School who require an academic transcript can submit a request to the school."
      />

      <div className="mx-auto max-w-[1060px] space-y-10 px-5 py-20 sm:px-8 lg:px-12">
        <section className="grid gap-8 bg-white p-8 shadow-[0_18px_45px_rgba(13,46,107,0.06)] md:grid-cols-[auto_1fr] md:p-10">
          <div className="flex h-14 w-14 items-center justify-center bg-[#0D2E6B] text-[#FACC15]"><FileText size={25} /></div>
          <div>
            <h2 className="font-display mt-3 text-3xl font-bold text-[#1A1A1A]">Submit your request to ANSECO</h2>
            <p className="mt-5 text-base leading-8 text-[#4A4A4A]">
              Transcript requests may be sent by mail to the school. Applicants should call the school to confirm the current official email channel before attempting to submit a request electronically.
            </p>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3"><MapPin size={19} className="mt-1 shrink-0 text-[#8A6700]" /><div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#1A1A1A]">Postal Address</p><address className="mt-2 not-italic text-sm leading-7 text-[#666666]">{siteConfig.addressLines.map((line) => <span key={line} className="block">{line}</span>)}</address></div></div>
              <div className="flex items-start gap-3"><Phone size={19} className="mt-1 shrink-0 text-[#8A6700]" /><div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#1A1A1A]">Confirm by Telephone</p><div className="mt-2">{siteConfig.phones.map((phone) => <a key={phone.href} href={`tel:${phone.href}`} className="block text-sm font-bold leading-7 text-[#1A1A1A] hover:text-[#8A6700]">{phone.label}</a>)}</div></div></div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 sm:p-10">
          <h2 className="font-display mt-3 text-3xl font-bold text-[#1A1A1A]">Information to Include</h2>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {requestDetails.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-[#4A4A4A]"><CheckCircle size={17} className="mt-1 shrink-0 text-[#8A6700]" />{item}</li>)}
          </ul>
        </section>

        <section className="bg-white p-8 sm:p-10">
          <h2 className="font-display mt-3 text-3xl font-bold text-[#1A1A1A]">Indicate your preferred option</h2>
          <ul className="mt-7 space-y-4">
            {deliveryOptions.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-[#4A4A4A]"><CheckCircle size={17} className="mt-1 shrink-0 text-[#8A6700]" />{item}</li>)}
          </ul>
        </section>

        <aside className="border-l-4 border-[#C9990A] bg-[#0D2E6B] p-7 text-white sm:p-8">
          <p className="text-sm leading-7 text-white/75">
            Additional identification, processing fees, or supporting documents may be required. Applicants should confirm the current requirements with the school before submitting their request.
          </p>
        </aside>
      </div>
    </div>
  );
}
