import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.prom4fans.com').replace(/\/$/, '');
const locales = ['de', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((locale) => [locale, `${base}/${locale}`]));
  const now = new Date('2026-09-03T00:00:00.000Z');

  const localePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages },
  }));

  return [...localePages, { url: `${base}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 }];
}
