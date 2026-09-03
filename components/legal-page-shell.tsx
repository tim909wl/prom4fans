'use client';

import { useEffect } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { useLocalePreference } from '@/lib/use-locale-preference';
import { getCopy } from '@/lib/i18n';
import type { LegalPage } from '@/lib/legal-copy';

export function LegalPageShell({ copy }: { copy: Record<'de' | 'en', LegalPage> }) {
  const [locale, setLocale] = useLocalePreference('de');
  const c = getCopy(locale);
  const page = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${page.title} | Prom4Fans`;
  }, [locale, page.title]);

  return (
    <>
      <SiteHeader
        locale={locale}
        nav={c.nav}
        cta={c.cta}
        navAriaLabel={c.navAriaLabel}
        menuOpenLabel={c.menuOpen}
        menuCloseLabel={c.menuClose}
        onLocaleChange={setLocale}
      />
      <main className="content">
        <h1>{page.title}</h1>
        {page.lead && <p className="mt-6 max-w-2xl text-lg text-[#586078]">{page.lead}</p>}
        <section className="mt-10 max-w-3xl space-y-8 text-[#35374b]">
          {page.sections.map((section, i) => (
            <div key={section.heading || i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.body.map((paragraph, j) => (
                <p key={j}>
                  {paragraph.split('\n').map((line, k, arr) => (
                    <span key={k}>
                      {line}
                      {k < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          ))}
          <p className="text-sm text-[#7b7e92]">{page.updated}</p>
        </section>
      </main>
      <SiteFooter locale={locale} onLocaleChange={setLocale} />
    </>
  );
}
