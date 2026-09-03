import { NextRequest, NextResponse } from 'next/server';
import { verifyContactToken } from '@/lib/contact-token';
import { isRateLimited } from '@/lib/rate-limit';
import { sendContactEmails } from '@/lib/mailer';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. If it's filled,
  // pretend success so the bot doesn't learn to look for another signal.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const tokenResult = verifyContactToken(body.token);
  if (!tokenResult.ok) {
    return NextResponse.json({ ok: false, error: 'spam_check_failed' }, { status: 400 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const age = Number(body.age);
  const country = typeof body.country === 'string' ? body.country.trim() : '';
  const platform = typeof body.platform === 'string' ? body.platform.trim() : '';
  const reach = typeof body.reach === 'string' ? body.reach.trim() : '';
  const comfort = typeof body.comfort === 'string' ? body.comfort.trim() : '';
  const goal = typeof body.goal === 'string' ? body.goal.trim() : '';
  const locale = body.locale === 'en' ? 'en' : 'de';
  const consent = body.consent === true;

  if (!name || name.length > 100) {
    return NextResponse.json({ ok: false, error: 'invalid_name' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }
  if (message.length < 10 || message.length > 3000) {
    return NextResponse.json({ ok: false, error: 'invalid_message' }, { status: 400 });
  }
  if (!Number.isInteger(age) || age < 18 || age > 99 || !country || country.length > 100 || !platform || !reach || !comfort || !goal) {
    return NextResponse.json({ ok: false, error: 'invalid_profile' }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: 'consent_required' }, { status: 400 });
  }

  try {
    const profileMessage = `${message}\n\n--- Bewerbungsprofil ---\nAlter: ${age}\nLand: ${country}\nPlattform: ${platform}\nReichweite: ${reach}\nPosting-Komfort: ${comfort}\nHauptziel: ${goal}`;
    await sendContactEmails({ name, email, message: profileMessage, locale });
  } catch (error) {
    console.error('[kontakt] failed to send email:', error);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
