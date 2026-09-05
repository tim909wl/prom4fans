'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { FlagIcon } from '@/components/flag-icon';
import { useLocalePreference } from '@/lib/use-locale-preference';
import { getCopy } from '@/lib/i18n';
import { impressumCopy, datenschutzCopy } from '@/lib/legal-copy';

export function KontaktShell() {
  const [locale, setLocale] = useLocalePreference('de');
  const c = getCopy(locale);
  const other = locale === 'de' ? 'en' : 'de';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${c.contactMetaTitle} | Prom4Fans`;
  }, [locale, c.contactMetaTitle]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e8e5ef]/80 bg-[#fbfaf8]/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-[min(100%-2rem,78rem)] items-center justify-between">
          <Link
            href={`/${locale}`}
            className="font-black tracking-[.1em] text-[#6c35ed] transition-transform hover:scale-[1.03]"
          >
            PROM4FANS
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href={`/${locale}`}
              className="hidden text-sm font-semibold text-[#5b6075] transition-colors hover:text-[#6c35ed] sm:inline-block"
            >
              {c.backToHome}
            </Link>
            <button
              type="button"
              aria-label={`Sprache wechseln zu ${other}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#595b70] transition-colors hover:text-[#6c35ed]"
              onClick={() => setLocale(other)}
            >
              <FlagIcon locale={other} className="h-3 w-4 rounded-[2px]" />
              {other}
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#fbfaf8] text-[#15162d]">
        <section className="mx-auto grid w-[min(100%-2rem,78rem)] gap-12 py-24 md:min-h-[calc(100vh-9rem)] md:grid-cols-[1.15fr_.85fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">{c.contactEyebrow}</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(3.4rem,7.4vw,6.4rem)] font-black leading-[.94] tracking-[-.03em]">
              {c.contactTitle[0]}
              <br />
              {c.contactTitle[1]}
            </h1>
            <p className="mt-8 max-w-lg text-xl leading-relaxed text-[#586078]">{c.contactLead}</p>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-[#8a8da3]">{c.contactNote}</p>
          </div>

          <aside className="rounded-3xl bg-[#15162d] p-7 text-white shadow-[0_28px_70px_rgba(21,22,45,.16)] md:p-9">
            <ContactForm locale={locale} />
          </aside>
        </section>
      </main>

      <footer className="border-t border-[#e8e5ef] bg-white">
        <div className="mx-auto flex w-[min(100%-2rem,78rem)] flex-col items-center gap-5 py-8 text-sm text-[#5b6075] sm:flex-row sm:justify-between">
          <Link href={`/${locale}`} className="font-semibold transition-colors hover:text-[#6c35ed]">
            ← {c.backToHome}
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="transition-colors hover:text-[#6c35ed]">
              {impressumCopy[locale].title}
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-[#6c35ed]">
              {datenschutzCopy[locale].title}
            </Link>
            <button
              type="button"
              aria-label={`Sprache wechseln zu ${other}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#595b70] transition-colors hover:text-[#6c35ed]"
              onClick={() => setLocale(other)}
            >
              <FlagIcon locale={other} className="h-3 w-4 rounded-[2px]" />
              {other}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
