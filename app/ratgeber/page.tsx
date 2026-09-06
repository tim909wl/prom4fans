import type { Metadata } from 'next';
import { GuideHubShell } from '@/components/guide-hub-shell';

const base = 'https://www.prom4fans.com';

export const metadata: Metadata = {
  title: 'Creator Ratgeber: Content, Wachstum, Sicherheit & OnlyFans',
  description: 'Praxisnahe Creator-Guides zu OnlyFans, Positionierung, Content-Planung, Social Media, Sicherheit, Reporting und Creator Management.',
  alternates: { canonical: '/ratgeber' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/ratgeber',
    title: 'Prom4Fans Ratgeber für Creator',
    description: 'Praxisnahe Guides zu Positionierung, Content, Reichweite, Sicherheit und Creator Management.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prom4Fans Ratgeber für Creator',
    description: 'Praxisnahe Guides zu Positionierung, Content, Reichweite, Sicherheit und Creator Management.',
  },
};

export default function GuideHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Prom4Fans Ratgeber',
    description: 'Praxisnahe Guides zu Positionierung, Content, Reichweite, Sicherheit und Creator Management.',
    url: `${base}/ratgeber`,
    isPartOf: { '@type': 'WebSite', name: 'Prom4Fans', url: base },
    publisher: { '@type': 'Organization', name: 'Prom4Fans', url: base },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideHubShell />
    </>
  );
}
