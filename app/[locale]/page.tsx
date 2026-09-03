import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HomeShell } from '@/components/home-shell';
import { locales, type Locale } from '@/lib/i18n';

const seo: Record<Locale, { title: string; description: string }> = {
  de: {
    title: 'Creator Management mit Klarheit',
    description:
      'Creator Management für Frauen 35+: klare Positionierung, Content und nachhaltige Subscription-Strukturen.',
  },
  en: {
    title: 'Creator management with clarity',
    description: 'Creator management for women 35+: clear positioning, content and sustainable subscription structures.',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Only 'de' and 'en' are valid locale segments — anything else should be a real
// 404 instead of being dynamically rendered and only failing inside the page.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = locales.includes(locale) ? seo[locale] : seo.de;
  const fullTitle = `Prom4Fans – ${copy.title}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { de: '/de', en: '/en', 'x-default': '/de' },
    },
    openGraph: {
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: `/${locale}`,
      title: fullTitle,
      description: copy.description,
    },
    twitter: { title: fullTitle, description: copy.description },
  };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const copy = seo[locale];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prom4Fans',
    url: `https://www.prom4fans.com/${locale}`,
    description: copy.description,
    email: 'contact@prom4fans.com',
    telephone: '+49 177 3624269',
    logo: 'https://www.prom4fans.com/favicon.svg',
    address: { '@type': 'PostalAddress', streetAddress: 'Brückenstr. 9', postalCode: '24220', addressLocality: 'Flintbek', addressCountry: 'DE' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeShell initialLocale={locale} />
    </>
  );
}
