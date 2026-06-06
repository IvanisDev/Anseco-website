import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}

export function isFutureOrToday(date: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(date) >= today;
}
