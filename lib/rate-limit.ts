/**
 * Best-effort in-memory rate limiter, keyed by IP. Good enough to blunt a
 * naive spam script; not a substitute for a real store — on serverless
 * platforms each cold start gets a fresh Map, so this resets on deploys and
 * doesn't share state across instances. Combined with the honeypot + timing
 * token in lib/contact-token.ts, it's a reasonable layer for a contact form
 * that doesn't warrant a Redis dependency.
 */

const hits = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_HITS = 5;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_HITS) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Prevent unbounded growth from many distinct IPs over a long-running process.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t > WINDOW_MS)) hits.delete(k);
    }
  }

  return false;
}
