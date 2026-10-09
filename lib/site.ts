const fallbackOrigin = "https://anseco-website.netlify.app";
const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackOrigin;

function normalizeOrigin(value: string) {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(`NEXT_PUBLIC_SITE_URL must be a valid absolute URL. Received: ${value}`);
  }

  if (url.protocol !== "https:" && url.hostname !== "localhost") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS outside local development.");
  }

  return url.origin;
}

export const SITE_ORIGIN = normalizeOrigin(configuredOrigin);
export const DEFAULT_SOCIAL_IMAGE = "/images/optimized/ama-anseco.jpg";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, `${SITE_ORIGIN}/`).toString();
}
