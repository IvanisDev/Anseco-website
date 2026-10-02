"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const routesToPrefetch = [
  "/about",
  "/about/our-history",
  "/about/school-administration",
  "/admissions",
  "/admissions/how-to-apply",
  "/admissions/prospectus",
  "/admissions/student-guidelines",
  "/learning-areas",
  "/final-year-students",
  "/news",
  "/events",
  "/campus-life",
  "/contact"
];

export function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const prefetch = () => {
      routesToPrefetch.forEach((route) => router.prefetch(route));
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(prefetch, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(prefetch, 1200);
    return () => globalThis.clearTimeout(timeoutId);
  }, [router]);

  return null;
}
