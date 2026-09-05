import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ServiceLandingShell } from '@/components/service-landing-shell';
import { locales, type Locale } from '@/lib/i18n';
import { servicePages, serviceSlugs, type ServiceSlug } from '@/lib/service-pages';

export function generateStaticParams() {
  return locales.flatMap((locale) => serviceSlugs.map((service) => ({ locale, service })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: ServiceSlug }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  if (!locales.includes(locale) || !serviceSlugs.includes(service)) return {};
  const page = servicePages[locale][service];
  const canonical = `/${locale}/${service}`;
  const languages = {
    de: `/de/${service}`,
    en: `/en/${service}`,
    'x-default': `/de/${service}`,
  };

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: canonical,
      title: `${page.metaTitle} | Prom4Fans`,
      description: page.metaDescription,
      images: [{ url: '/images/creator-window.png', alt: 'Prom4Fans Creator Management' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.metaTitle} | Prom4Fans`,
      description: page.metaDescription,
      images: ['/images/creator-window.png'],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ locale: Locale; service: ServiceSlug }> }) {
  const { locale, service } = await params;
  if (!locales.includes(locale) || !serviceSlugs.includes(service)) notFound();
  const page = servicePages[locale][service];
  const base = 'https://www.prom4fans.com';
  const url = `${base}/${locale}/${service}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.metaTitle,
        description: page.metaDescription,
        url,
        provider: { '@type': 'Organization', name: 'Prom4Fans', url: base },
        areaServed: { '@type': 'Country', name: 'Germany' },
        serviceType: page.eyebrow,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Prom4Fans', item: `${base}/${locale}` },
          { '@type': 'ListItem', position: 2, name: page.eyebrow, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceLandingShell locale={locale} page={page} />
    </>
  );
}
