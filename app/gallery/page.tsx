import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { getGalleryAlbums } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo albums from ANSECO school activities and campus life."
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" eyebrow="Albums" description="Browse school albums. Replace placeholder images with real school photographs before launch." />
      <section className="container grid gap-5 py-20 md:grid-cols-2 lg:grid-cols-4">
        {getGalleryAlbums().map((album) => (
          <Card key={album.slug} className="overflow-hidden">
            <Link href={`/gallery/${album.slug}`}>
              <div className="relative aspect-[4/3]">
                <Image src={album.coverImage} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <CardContent className="pt-5">
                <h2 className="text-lg font-semibold">{album.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{album.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </section>
    </>
  );
}
