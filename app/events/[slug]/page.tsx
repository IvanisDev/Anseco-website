import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { getEvent, getEvents } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

type SlugParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: SlugParams }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  return {
    title: event?.title || "Event",
    description: event?.excerpt,
    openGraph: {
      title: event?.title,
      description: event?.excerpt,
      images: event?.coverImage ? [event.coverImage] : undefined
    }
  };
}

export default async function EventPage({ params }: { params: SlugParams }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <article>
      <header className="container py-10">
        <Badge>{event.location}</Badge>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{event.title}</h1>
        <p className="mt-4 text-muted-foreground">
          {formatDate(event.startDate)}
          {event.endDate ? ` - ${formatDate(event.endDate)}` : null}
        </p>
        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-lg border">
          <Image src={event.coverImage} alt="" fill sizes="100vw" className="object-cover" priority />
        </div>
      </header>
      <div className="container pb-12">
        <div className="prose-school max-w-3xl">
          <MDXRemote source={event.content} />
        </div>
      </div>
    </article>
  );
}
