import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import downloadsData from "@/data/downloads.json";
import galleryData from "@/data/gallery.json";
import programmesData from "@/data/programmes.json";

const root = process.cwd();

export type NewsPost = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage: string;
  slug: string;
  content: string;
};

export type EventPost = {
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
  excerpt: string;
  coverImage: string;
  slug: string;
  content: string;
};

export type Programme = (typeof programmesData.programmes)[number];
export type Download = (typeof downloadsData.items)[number];
export type GalleryAlbum = (typeof galleryData.albums)[number];

function readMdxCollection<T>(folder: "news" | "events") {
  const directory = path.join(root, "content", folder);
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(directory, file), "utf8");
      const { data, content } = matter(raw);
      return { ...data, content } as T;
    });
}

export function getNewsPosts() {
  return readMdxCollection<NewsPost>("news").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getNewsPost(slug: string) {
  return getNewsPosts().find((post) => post.slug === slug);
}

export function getEvents() {
  return readMdxCollection<EventPost>("events").sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
}

export function getEvent(slug: string) {
  return getEvents().find((event) => event.slug === slug);
}

export function getProgrammes() {
  return programmesData.programmes;
}

export function getProgramme(slug: string) {
  return programmesData.programmes.find((programme) => programme.slug === slug);
}

export function getDownloads() {
  return downloadsData.items;
}

export function getGalleryAlbums() {
  return galleryData.albums;
}

export function getGalleryAlbum(slug: string) {
  return galleryData.albums.find((album) => album.slug === slug);
}
