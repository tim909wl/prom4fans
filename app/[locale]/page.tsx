import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HomeShell } from '@/components/home-shell';
import { locales, type Locale } from '@/lib/i18n';

const seo: Record<Locale, { title: string; description: string }> = {
  de: {
    title: 'Creator Management für Frauen 35+',
    description: 'Prom4Fans begleitet Frauen 35+ mit Positionierung, Content-System, Distribution, Reporting und persönlichem Creator Management.',
  },
  en: {
    title: 'Creator Management for Women 35+',
    description: 'Prom4Fans supports women 35+ with positioning, content systems, distribution, reporting and personal creator management.',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = locales.includes(locale) ? seo[locale] : seo.de;
  const fullTitle = `${copy.title} | Prom4Fans`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { de: '/de', en: '/en', 'x-default': '/de' },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: `/${locale}`,
      title: fullTitle,
      description: copy.description,
      images: [{ url: '/images/creator-window.png', alt: 'Prom4Fans Creator Management' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: copy.description,
      images: ['/images/creator-window.png'],
    },
  };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const copy = seo[locale];
  const base = 'https://www.prom4fans.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${base}/#organization`,
        name: 'Prom4Fans',
        url: base,
        description: copy.description,
        email: 'contact@prom4fans.com',
        telephone: '+49 177 3624269',
        logo: `${base}/favicon.svg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Brückenstr. 9',
          postalCode: '24220',
          addressLocality: 'Flintbek',
          addressCountry: 'DE',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: base,
        name: 'Prom4Fans',
        publisher: { '@id': `${base}/#organization` },
        inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
      },
      {
        '@type': 'WebPage',
        url: `${base}/${locale}`,
        name: `${copy.title} | Prom4Fans`,
        description: copy.description,
        isPartOf: { '@id': `${base}/#website` },
        about: { '@id': `${base}/#organization` },
        inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeShell initialLocale={locale} />
    </>
  );
}
