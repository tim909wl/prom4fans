import type { MetadataRoute } from 'next';
import { serviceSlugs } from '@/lib/service-pages';
import { allGuideList } from '@/lib/all-guides';

export const dynamic = 'force-static';

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.prom4fans.com').replace(/\/$/, '');
const locales = ['de', 'en'] as const;
const siteModified = new Date('2026-09-06T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = {
    de: `${base}/de`,
    en: `${base}/en`,
    'x-default': `${base}/de`,
  };

  const localePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: siteModified,
    changeFrequency: 'weekly',
    priority: 1,
    alternates: { languages: homeLanguages },
  }));

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.flatMap((service) => {
    const languages = {
      de: `${base}/de/${service}`,
      en: `${base}/en/${service}`,
      'x-default': `${base}/de/${service}`,
    };
    return locales.map((locale) => ({
      url: `${base}/${locale}/${service}`,
      lastModified: siteModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: { languages },
    }));
  });

  const guides: MetadataRoute.Sitemap = allGuideList.map((guide) => ({
    url: `${base}/ratgeber/${guide.slug}`,
    lastModified: new Date(`${guide.updated}T00:00:00.000Z`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...localePages,
    ...servicePages,
    { url: `${base}/ratgeber`, lastModified: siteModified, changeFrequency: 'weekly', priority: 0.9 },
    ...guides,
    { url: `${base}/kontakt`, lastModified: siteModified, changeFrequency: 'monthly', priority: 0.75 },
  ];
}
