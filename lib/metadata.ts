import type { Metadata } from "next";
import { DEFAULT_SOCIAL_IMAGE } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image = DEFAULT_SOCIAL_IMAGE }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      images: [{ url: image, alt: `${title} - Anlo Senior High School` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
