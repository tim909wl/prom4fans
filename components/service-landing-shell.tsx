'use client';

import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getCopy, type Locale } from '@/lib/i18n';
import type { ServiceSlug } from '@/lib/service-pages';

type ServicePageContent = {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  lead: string;
  introTitle: string;
  intro: string;
  benefitsTitle: string;
  benefits: Array<{ title: string; text: string }>;
  processTitle: string;
  process: Array<{ title: string; text: string }>;
  fitTitle: string;
  fit: string[];
  ctaTitle: string;
  ctaText: string;
};

export function ServiceLandingShell({ locale, page }: { locale: Locale; page: ServicePageContent }) {
  const router = useRouter();
  const c = getCopy(locale);

  function changeLocale(next: Locale) {
    router.push(`/${next}/${page.slug}`);
  }

  return (
    <>
      <SiteHeader
        locale={locale}
        nav={c.nav}
        cta={c.cta}
        navAriaLabel={c.navAriaLabel}
        menuOpenLabel={c.menuOpen}
        menuCloseLabel={c.menuClose}
        onLocaleChange={changeLocale}
      />
      <main>
        <section className="bg-[#f7f5ff] py-24 text-[#15162d] md:py-36">
          <div className="mx-auto w-[min(100%-2rem,78rem)]">
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">{page.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[.9] tracking-[-.04em]">{page.title}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#565a72] md:text-2xl">{page.lead}</p>
            <Link href="/kontakt" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#15162d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#6c35ed]">
              {c.heroButton}
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </section>

        <section className="bg-white py-20 text-[#15162d] md:py-28">
          <div className="mx-auto grid w-[min(100%-2rem,78rem)] gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
            <h2 className="text-3xl font-black leading-tight tracking-[-.03em] md:text-5xl">{page.introTitle}</h2>
            <p className="text-lg leading-relaxed text-[#5b6075]">{page.intro}</p>
          </div>
        </section>

        <section className="bg-[#15162d] py-20 text-white md:py-28">
          <div className="mx-auto w-[min(100%-2rem,78rem)]">
            <h2 className="max-w-3xl text-4xl font-black tracking-[-.03em] md:text-6xl">{page.benefitsTitle}</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {page.benefits.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[.04] p-7 md:p-9">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#c9cbda]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf8] py-20 text-[#15162d] md:py-28">
          <div className="mx-auto w-[min(100%-2rem,78rem)]">
            <h2 className="max-w-3xl text-4xl font-black tracking-[-.03em] md:text-6xl">{page.processTitle}</h2>
            <div className="mt-12 divide-y divide-[#ded9eb] border-y border-[#ded9eb]">
              {page.process.map((item) => (
                <article key={item.title} className="grid gap-3 py-7 md:grid-cols-[15rem_1fr] md:gap-10 md:py-9">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="max-w-2xl leading-relaxed text-[#5b6075]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-[#15162d] md:py-28">
          <div className="mx-auto grid w-[min(100%-2rem,78rem)] gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-20">
            <h2 className="text-4xl font-black tracking-[-.03em] md:text-5xl">{page.fitTitle}</h2>
            <ul className="space-y-4">
              {page.fit.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-[#4f546b]">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#d6fa43] text-[#15162d]"><Check className="size-3.5" aria-hidden /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#6c35ed] py-20 text-white md:py-28">
          <div className="mx-auto flex w-[min(100%-2rem,78rem)] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-.03em] md:text-6xl">{page.ctaTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#e7e0ff]">{page.ctaText}</p>
            </div>
            <Link href="/kontakt" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d6fa43] px-6 py-3.5 text-sm font-bold text-[#15162d] transition hover:bg-white">
              {c.cta}
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} onLocaleChange={changeLocale} />
    </>
  );
}
