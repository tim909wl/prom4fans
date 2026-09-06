import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { GuideShell } from '@/components/guide-shell';
import { guideSlugs, guides, type GuideSlug } from '@/lib/guide-pages';

const base = 'https://www.prom4fans.com';

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: GuideSlug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!guideSlugs.includes(slug)) return {};
  const page = guides[slug];
  const canonical = `/ratgeber/${slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    authors: [{ name: 'Prom4Fans Redaktion', url: '/ratgeber' }],
    alternates: { canonical },
    openGraph: {
      type: 'article',
      locale: 'de_DE',
      url: canonical,
      title: `${page.metaTitle} | Prom4Fans`,
      description: page.metaDescription,
      publishedTime: `${page.published}T09:00:00+02:00`,
      modifiedTime: `${page.updated}T09:00:00+02:00`,
      authors: ['Prom4Fans Redaktion'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.metaTitle} | Prom4Fans`,
      description: page.metaDescription,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: GuideSlug }> }) {
  const { slug } = await params;
  if (!guideSlugs.includes(slug)) notFound();
  const page = guides[slug];
  const url = `${base}/ratgeber/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: page.title,
        description: page.metaDescription,
        datePublished: page.published,
        dateModified: page.updated,
        inLanguage: 'de-DE',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: { '@type': 'Organization', name: 'Prom4Fans Redaktion', url: `${base}/ratgeber` },
        publisher: {
          '@type': 'Organization',
          name: 'Prom4Fans',
          url: base,
          logo: { '@type': 'ImageObject', url: `${base}/favicon.svg` },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Prom4Fans', item: `${base}/de` },
          { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: `${base}/ratgeber` },
          { '@type': 'ListItem', position: 3, name: page.eyebrow, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideShell page={page} />
    </>
  );
}
