import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.prom4fans.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Prom4Fans',
    template: '%s | Prom4Fans',
  },
  description: 'Prom4Fans begleitet Frauen ab 35 beim Aufbau und Wachstum ihrer Subscription-Präsenz – mit klarer Strategie, Content und persönlichem Management.',
  applicationName: 'Prom4Fans',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/',
    siteName: 'Prom4Fans',
    title: 'Prom4Fans',
    description: 'Creator Management für Frauen ab 35: klare Positionierung, Content und nachhaltige Subscription-Strukturen.',
  },
  twitter: { card: 'summary_large_image', title: 'Prom4Fans', description: 'Creator Management für Frauen ab 35.' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#15162d', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de" className={cn("font-sans", geist.variable)}><body>{children}</body></html>;
}
