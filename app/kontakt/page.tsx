import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { ContactForm } from '@/components/contact-form';
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

  return (
    <>
      <main className="min-h-screen bg-[#fbfaf8] text-[#15162d]">
        <header className="mx-auto flex h-20 w-[min(100%-2rem,78rem)] items-center justify-between border-b border-[#e8e5ef]">
          <Link href="/de" className="font-black tracking-[.12em] text-[#6c35ed]">PROM4FANS</Link>
          <Link href="/de" className="text-sm font-semibold text-[#5b6075] transition-colors hover:text-[#6c35ed]">Zurück zur Startseite</Link>
        </header>

        <section className="mx-auto grid w-[min(100%-2rem,78rem)] gap-12 py-24 md:min-h-[calc(100vh-5rem)] md:grid-cols-[1.15fr_.85fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">Erstgespräch</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(3.4rem,7.4vw,6.4rem)] font-black leading-[.94] tracking-[-.03em]">
              Lass uns<br />ehrlich sprechen.
            </h1>
            <p className="mt-8 max-w-lg text-xl leading-relaxed text-[#586078]">
              Erzähl uns, wo du gerade stehst und wohin du möchtest. Wir finden gemeinsam heraus, ob eine Zusammenarbeit Sinn ergibt.
            </p>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-[#8a8da3]">
              Keine Einkommensgarantien, keine Verpflichtung durch deine Nachricht. Wir melden uns persönlich zurück.
            </p>
          </div>

          <aside className="rounded-3xl bg-[#15162d] p-7 text-white shadow-[0_28px_70px_rgba(21,22,45,.16)] md:p-9">
            <ContactForm token={token} locale="de" />
          </aside>
        </section>
      </main>
      <SiteFooter locale="de" />
    </>
  );
}
