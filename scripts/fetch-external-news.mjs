import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputPath = path.join(root, "data", "external-news.json");

const sources = [
  {
    name: "Veritas News",
    siteUrl: "https://veritasnewsgh.com",
    endpoints: [
      "https://veritasnewsgh.com/wp-json/wp/v2/posts?search=ANSECO&per_page=10&_embed=1",
      "https://veritasnewsgh.com/wp-json/wp/v2/posts?search=Anlo%20Senior%20High&per_page=10&_embed=1",
      "https://veritasnewsgh.com/feed/"
    ]
  },
  {
    name: "NSMQ",
    siteUrl: "https://www.nsmq.com.gh",
    endpoints: [
      "https://www.nsmq.com.gh/wp-json/wp/v2/posts?search=ANSECO&per_page=10&_embed=1",
      "https://www.nsmq.com.gh/wp-json/wp/v2/posts?search=Anlo%20Senior%20High&per_page=10&_embed=1",
      "https://www.nsmq.com.gh/news",
      "https://www.nsmq.com.gh/feed/"
    ]
  }
];

const matchTerms = [
  "anseco",
  "anlo senior high",
  "anlo senior high school",
  "anlo shs",
  "anlo senior high sch"
];

const maxAgeDays = Number(process.env.EXTERNAL_NEWS_MAX_AGE_DAYS || 180);
const maxItems = Number(process.env.EXTERNAL_NEWS_MAX_ITEMS || 8);

function stripHtml(value = "") {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, "\"")
    .replace(/&#8211;|&#8212;/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function isCurrent(date) {
  if (!date) return true;
  const time = new Date(date).getTime();
  if (Number.isNaN(time)) return false;
  const age = Date.now() - time;
  return age <= maxAgeDays * 24 * 60 * 60 * 1000;
}

function isAnsecoRelated(item) {
  const haystack = `${item.title} ${item.excerpt} ${item.content || ""}`.toLowerCase();
  return matchTerms.some((term) => haystack.includes(term));
}

function normalizeItem(item, source) {
  const title = stripHtml(item.title);
  const excerpt = stripHtml(item.excerpt || item.content || "").slice(0, 220);
  const url = item.url;
  const coverImage = item.coverImage;

  if (!title || !url) return null;

  return {
    title,
    excerpt: excerpt || `Read the latest ANSECO-related update from ${source.name}.`,
    date: item.date || new Date().toISOString(),
    category: "External",
    source: source.name,
    ...(coverImage ? { coverImage } : {}),
    url,
    slug: `external-${slugify(source.name)}-${slugify(title)}`
  };
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "ANSECO website build fetcher",
      accept: "application/json,text/html,application/rss+xml,application/xml;q=0.9,*/*;q=0.8"
    }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return {
    contentType: response.headers.get("content-type") || "",
    text: await response.text()
  };
}

function parseWordPressJson(text) {
  const posts = JSON.parse(text);
  if (!Array.isArray(posts)) return [];

  return posts.map((post) => ({
    title: post.title?.rendered,
    excerpt: post.excerpt?.rendered,
    content: post.content?.rendered,
    date: post.date_gmt || post.date,
    url: post.link,
    coverImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  }));
}

function getTagValue(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  if (!match) return "";
  return match[1].replace(/^<!\[CDATA\[|\]\]>$/g, "");
}

function parseFeed(text) {
  const itemBlocks = [...text.matchAll(/<item[\s\S]*?<\/item>/gi)].map((match) => match[0]);
  const entryBlocks = [...text.matchAll(/<entry[\s\S]*?<\/entry>/gi)].map((match) => match[0]);

  return [...itemBlocks, ...entryBlocks].map((block) => ({
    title: getTagValue(block, "title"),
    excerpt: getTagValue(block, "description") || getTagValue(block, "summary"),
    content: getTagValue(block, "content:encoded") || getTagValue(block, "content"),
    date: getTagValue(block, "pubDate") || getTagValue(block, "updated") || getTagValue(block, "published"),
    url: getTagValue(block, "link") || block.match(/<link[^>]+href="([^"]+)"/i)?.[1],
    coverImage: block.match(/<media:(?:content|thumbnail)[^>]+url=["']([^"']+)["']/i)?.[1]
      || block.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]+type=["']image\//i)?.[1]
  }));
}

function parseNewsListing(text, baseUrl) {
  const matches = [...text.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  return matches
    .map((match) => {
      const title = stripHtml(match[2]);
      if (!title || title.length < 12) return null;
      const url = new URL(match[1], baseUrl).toString();
      return { title, excerpt: title, content: title, date: null, url };
    })
    .filter(Boolean);
}

async function collectFromSource(source) {
  const items = [];

  for (const endpoint of source.endpoints) {
    try {
      const { contentType, text } = await fetchText(endpoint);
      const parsed = contentType.includes("application/json")
        ? parseWordPressJson(text)
        : endpoint.includes("/feed") || contentType.includes("xml")
          ? parseFeed(text)
          : parseNewsListing(text, source.siteUrl);

      for (const rawItem of parsed) {
        const item = normalizeItem(rawItem, source);
        if (item && isCurrent(item.date) && isAnsecoRelated({ ...item, content: rawItem.content })) {
          items.push(item);
        }
      }
    } catch (error) {
      console.warn(`[external-news] ${source.name}: skipped ${endpoint} (${error.message})`);
    }
  }

  return items;
}

const allItems = (await Promise.all(sources.map(collectFromSource))).flat();
let manualItems = [];

try {
  const existing = JSON.parse(await fs.readFile(outputPath, "utf8"));
  manualItems = Array.isArray(existing.items) ? existing.items.filter((item) => item.manual) : [];
} catch {
  manualItems = [];
}

const unique = new Map();

for (const item of [...manualItems, ...allItems]) {
  unique.set(item.url, item);
}

const items = [...unique.values()]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, maxItems);

await fs.writeFile(
  outputPath,
  `${JSON.stringify({ updatedAt: new Date().toISOString(), items }, null, 2)}\n`
);

console.log(`[external-news] saved ${items.length} ANSECO-related item(s) to data/external-news.json`);
