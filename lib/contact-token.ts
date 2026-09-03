import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Lightweight, dependency-free spam guard for the contact form — no CAPTCHA
 * service, no third-party keys.
 *
 * A short-lived, server-signed timestamp token is embedded in the form when
 * the page renders. On submit we check that:
 *   1) the signature is valid (the token wasn't forged or edited), and
 *   2) enough time has passed since the page loaded (bots that submit
 *      instantly, without ever rendering the page, fail this check), and
 *   3) the token isn't stale (older than MAX_AGE_MS).
 * Combined with the honeypot field in the form itself, this stops the vast
 * majority of automated spam without inconveniencing real visitors.
 */

const MIN_AGE_MS = 3_000; // fastest a human could plausibly fill the form
const MAX_AGE_MS = 2 * 60 * 60 * 1000; // 2 hours

function getSecret(): string {
  const secret = process.env.FORM_SECRET;
  if (!secret) {
    throw new Error(
      'FORM_SECRET is not set. Add it to .env.local (see .env.example) before using the contact form.',
    );
  }
  return secret;
}

function sign(timestamp: string): string {
  return createHmac('sha256', getSecret()).update(timestamp).digest('hex');
}

export function createContactToken(): string {
  const timestamp = Date.now().toString();
  return `${timestamp}.${sign(timestamp)}`;
}

export function verifyContactToken(token: unknown): { ok: true } | { ok: false; reason: string } {
  if (typeof token !== 'string' || !token.includes('.')) {
    return { ok: false, reason: 'malformed' };
  }
  const [timestamp, signature] = token.split('.');
  if (!timestamp || !signature) return { ok: false, reason: 'malformed' };

  const expected = sign(timestamp);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, reason: 'invalid-signature' };
  }

  const issuedAt = Number(timestamp);
  if (!Number.isFinite(issuedAt)) return { ok: false, reason: 'malformed' };

  const age = Date.now() - issuedAt;
  if (age < MIN_AGE_MS) return { ok: false, reason: 'too-fast' };
  if (age > MAX_AGE_MS) return { ok: false, reason: 'expired' };

  return { ok: true };
}
