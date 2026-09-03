import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/legal-page-shell';
import { impressumCopy } from '@/lib/legal-copy';

export const metadata: Metadata = { title: 'Impressum', robots: { index: false, follow: false } };

export default function ImprintPage() {
  return <LegalPageShell copy={impressumCopy} />;
}
