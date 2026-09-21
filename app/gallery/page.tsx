import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { getGalleryAlbums } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo albums featuring the ANSECO campus, students, sports and cultural activities."
};

export default function GalleryPage() {
  const albums = getGalleryAlbums();
  const [featuredAlbum, ...otherAlbums] = albums;

  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader title="Gallery" eyebrow="Life in Pictures" description="Explore moments from the ANSECO campus, student activities, sports and school culture." />

      <main className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 grid gap-6 border-b border-[#0D2E6B]/10 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Photo Collections</p>
              <h2 className="font-display text-4xl font-bold text-[#0D2E6B] sm:text-5xl">Explore ANSECO</h2>
            </div>
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-[#64748B]"><Images size={18} className="text-[#C9990A]" />{albums.length} albums</div>
          </div>

          {featuredAlbum ? (
            <Link href={`/gallery/${featuredAlbum.slug}`} className="group grid overflow-hidden bg-[#0D2E6B] text-white shadow-[0_24px_60px_rgba(13,46,107,0.16)] lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-[#EDF1F9] sm:min-h-[460px]">
                <Image src={featuredAlbum.coverImage} alt="" fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#FACC15]">Featured Album</p>
                  <h3 className="font-display mt-5 text-4xl font-bold leading-tight sm:text-5xl">{featuredAlbum.title}</h3>
                  <p className="mt-5 text-base leading-8 text-white/65">{featuredAlbum.description}</p>
                </div>
                <span className="mt-12 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em]">Open album <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ) : null}

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherAlbums.map((album) => (
              <Link key={album.slug} href={`/gallery/${album.slug}`} className="group flex h-full flex-col overflow-hidden border border-[#0D2E6B]/10 bg-white shadow-[0_16px_38px_rgba(13,46,107,0.05)] transition-all hover:-translate-y-1 hover:border-[#C9990A] hover:shadow-[0_24px_55px_rgba(13,46,107,0.1)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDF1F9]">
                  <Image src={album.coverImage} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9990A]">Album</p>
                  <h3 className="mt-3 text-2xl font-black text-[#0D2E6B] transition-colors group-hover:text-[#C9990A]">{album.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#64748B]">{album.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-black uppercase tracking-[0.12em] text-[#0D2E6B]">View photos <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
