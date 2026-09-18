import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { getGalleryAlbum, getGalleryAlbums } from "@/lib/content";

export function generateStaticParams() {
  return getGalleryAlbums().map((album) => ({ slug: album.slug }));
}

type SlugParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: SlugParams }): Promise<Metadata> {
  const { slug } = await params;
  const album = getGalleryAlbum(slug);
  return {
    title: album?.title || "Gallery album",
    description: album?.description
  };
}

export default async function GalleryAlbumPage({ params }: { params: SlugParams }) {
  const { slug } = await params;
  const album = getGalleryAlbum(slug);
  if (!album) notFound();

  return (
    <>
      <PageHeader title={album.title} eyebrow="Gallery" description={album.description} />
      <section className="container grid gap-4 py-20 md:grid-cols-2 lg:grid-cols-3">
        {album.photos.map((photo) => (
          <figure key={photo.src} className="overflow-hidden border bg-card">
            <div className="relative aspect-[4/3]">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="p-3 text-sm text-muted-foreground">{photo.alt}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
