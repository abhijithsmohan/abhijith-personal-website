/**
 * Minimal Utility Layer
 *
 * Lightweight helper utilities for string formatting, class name composition,
 * and canonical URL resolution.
 */

/**
 * Utility for combining conditional CSS class names without third-party dependencies.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format ISO date string into human-readable format (e.g. "September 2026").
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

/**
 * Helper to get the canonical URL for a path using the production domain.
 */
export function getCanonicalUrl(path: string = ""): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abhijithsmohan.in";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath === "/" ? "" : cleanPath}`;
}
