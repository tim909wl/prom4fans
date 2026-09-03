import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prom4fans.de';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Prom4Fans',
    template: '%s | Prom4Fans',
  },
  description: 'Prom4Fans – die Plattform für echte Fan-Momente.',
  applicationName: 'Prom4Fans',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/',
    siteName: 'Prom4Fans',
    title: 'Prom4Fans',
    description: 'Die Plattform für echte Fan-Momente.',
  },
  twitter: { card: 'summary', title: 'Prom4Fans', description: 'Die Plattform für echte Fan-Momente.' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#15162d', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de" className={cn("font-sans", geist.variable)}><body>{children}</body></html>;
}
