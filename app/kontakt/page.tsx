import type { Metadata } from 'next';
import { KontaktShell } from '@/components/kontakt-shell';
import { createContactToken } from '@/lib/contact-token';

export const metadata: Metadata = { title: 'Kontakt', description: 'Sprich mit Prom4Fans über eine Zusammenarbeit.' };

// The anti-spam token is minted per request (see lib/contact-token.ts); this
// page must be rendered dynamically, never statically cached, or every
// visitor would share one token that goes stale ~2h after the last build.
// Static hosting compatibility: the form itself posts to the API endpoint.
// The token is embedded at build time for the exported page.
export const dynamic = 'force-static';

export default function ContactPage() {
  const token = createContactToken();

  return <KontaktShell token={token} />;
}
