import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prom4fans.de';
const locales = ['de', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((locale) => [locale, `${base}/${locale}`]));
  const now = new Date();

  const localePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages },
  }));

  return [...localePages, { url: `${base}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 }];
}
