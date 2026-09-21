import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ContentCard({
  href,
  title,
  excerpt,
  image,
  meta,
  badge,
  external = false
}: {
  href: string;
  title: string;
  excerpt: string;
  image: string;
  meta: string;
  badge?: string;
  external?: boolean;
}) {
  const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};
  const isRemoteImage = image.startsWith("http://") || image.startsWith("https://");

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.05)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_24px_55px_rgba(13,46,107,0.1)]">
      <Link href={href} className="flex h-full flex-col" {...linkProps}>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EDF1F9]">
          {isRemoteImage ? (
            // External news images are served directly from the source site.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          ) : (
            <Image src={image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#94A3B8]">
            {badge ? <span className="bg-[#C9990A]/10 px-2.5 py-1 font-black uppercase tracking-[0.14em] text-[#C9990A]">{badge}</span> : null}
            <span>{meta.includes("-") ? formatDate(meta) : meta}</span>
          </div>
          <h2 className="mt-5 text-xl font-black leading-tight text-[#0D2E6B] transition-colors group-hover:text-[#C9990A]">{title}</h2>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#64748B]">{excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B]">
            {external ? "Read at source" : "View details"}
            {external ? <ExternalLink size={14} /> : <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />}
          </span>
        </div>
      </Link>
    </article>
  );
}
