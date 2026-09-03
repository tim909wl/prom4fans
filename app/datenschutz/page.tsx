import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/legal-page-shell';
import { datenschutzCopy } from '@/lib/legal-copy';

export const metadata: Metadata = { title: 'Datenschutz', robots: { index: false, follow: false } };

export default function PrivacyPage() {
  return <LegalPageShell copy={datenschutzCopy} />;
}
