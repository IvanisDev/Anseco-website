# ANSECO Static School Website

A complete static website for Anlo Senior High School, built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style UI components, local MDX and JSON content.

## What is included

- Home, about, programmes, admissions, news, events, gallery, alumni and contact pages
- Static dynamic routes for programmes, news, events and gallery albums
- Local content in `content/` and `data/`
- Placeholder school images in `public/images/`
- Placeholder downloadable PDFs in `public/downloads/`
- Sticky navigation with mobile menu
- Admissions checklist, FAQ accordion, downloads and contact CTAs
- Client-side news and events filters
- Front-end-only contact form that opens the visitor's email app
- Metadata, OpenGraph, `sitemap.xml` and `robots.txt`

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The project uses `output: "export"` in `next.config.mjs`, so the static export is written to `out/`.

## Deploy

### Vercel

1. Push this repository to GitHub.
2. Import the project into Vercel.
3. Set environment variables if needed.
4. Build command: `npm run build`.
5. Output directory: `out`.

### Netlify

1. Push this repository to GitHub.
2. Create a new Netlify site from the repository.
3. Build command: `npm run build`.
4. Publish directory: `out`.

## Environment variables

The site URL has a safe fallback in `config/site.ts`.

```bash
NEXT_PUBLIC_SITE_URL=https://anseco.edu.gh
```

## Staff content updates

### News

Add or edit files in `content/news/*.mdx`.

Each news file needs this frontmatter:

```mdx
---
title: "Reopening Notice for Students"
date: "2026-06-10"
category: "Notice"
excerpt: "Short summary shown on cards."
coverImage: "/images/campus.svg"
slug: "reopening-notice"
---

Article body goes here.
```

### Events

Add or edit files in `content/events/*.mdx`.

Each event file needs this frontmatter:

```mdx
---
title: "PTA Meeting"
startDate: "2026-07-12"
endDate: "2026-07-12"
location: "Assembly Hall"
excerpt: "Short summary shown on cards."
coverImage: "/images/pta.svg"
slug: "pta-meeting"
---

Event details go here.
```

After staff edit content, they commit/push the changes. Vercel or Netlify rebuilds the static site and publishes the updates.

## Other local data

- Programmes: `data/programmes.json`
- Downloads: `data/downloads.json`
- Gallery albums: `data/gallery.json`

Replace placeholder PDFs in `public/downloads/` with official files before launch.
