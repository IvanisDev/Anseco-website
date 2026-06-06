import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { getNewsPost, getNewsPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getNewsPosts().map((post) => ({ slug: post.slug }));
}

type SlugParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: SlugParams }): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  return {
    title: post?.title || "News",
    description: post?.excerpt,
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      images: post?.coverImage ? [post.coverImage] : undefined
    }
  };
}

export default async function NewsPostPage({ params }: { params: SlugParams }) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="container py-10">
        <Badge>{post.category}</Badge>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-muted-foreground">{formatDate(post.date)}</p>
        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-lg border">
          <Image src={post.coverImage} alt="" fill sizes="100vw" className="object-cover" priority />
        </div>
      </header>
      <div className="container pb-12">
        <div className="prose-school max-w-3xl">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
