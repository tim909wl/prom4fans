import type { Metadata } from 'next';
import { KontaktShell } from '@/components/kontakt-shell';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Sprich mit Prom4Fans über eine Zusammenarbeit im Creator Management.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    type: 'website',
    url: '/kontakt',
    title: 'Kontakt | Prom4Fans',
    description: 'Sprich mit Prom4Fans über eine Zusammenarbeit im Creator Management.',
  },
};

export const dynamic = 'force-static';

export default function ContactPage() {
  return <KontaktShell />;
}
