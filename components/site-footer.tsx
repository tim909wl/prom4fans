'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { FlagIcon } from '@/components/flag-icon';
import type { Locale } from '@/lib/i18n';

type FooterCopy = {
  navTitle: string;
  nav: Array<{ label: string; href: string }>;
  platformsTitle: string;
  legalTitle: string;
  legal: Array<{ label: string; href: string }>;
  languageTitle: string;
  contact: string;
  note: string;
};

const copy: Record<Locale, FooterCopy> = {
  de: {
    navTitle: 'Navigation',
    nav: [
      { label: 'Creator Management', href: '/de/creator-management' },
      { label: 'OnlyFans Management', href: '/de/onlyfans-management' },
      { label: 'Leistungen', href: '/de#services' },
      { label: 'So läuft’s', href: '/de#process' },
      { label: 'Über uns', href: '/de#about' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
    platformsTitle: 'Plattformen',
    legalTitle: 'Rechtliches',
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'Nutzungsbedingungen', href: '/nutzungsbedingungen' },
    ],
    languageTitle: 'Sprache',
    contact: 'Gespräch starten',
    note: 'Strategie, Content und Wachstum für Creator, die Struktur wollen.',
  },
  en: {
    navTitle: 'Navigation',
    nav: [
      { label: 'Creator Management', href: '/en/creator-management' },
      { label: 'OnlyFans Management', href: '/en/onlyfans-management' },
      { label: 'Services', href: '/en#services' },
      { label: 'How it works', href: '/en#process' },
      { label: 'About', href: '/en#about' },
      { label: 'Contact', href: '/kontakt' },
    ],
    platformsTitle: 'Platforms',
    legalTitle: 'Legal',
    legal: [
      { label: 'Imprint', href: '/impressum' },
      { label: 'Privacy', href: '/datenschutz' },
    ],
    languageTitle: 'Language',
    contact: 'Start a conversation',
    note: 'Strategy, content and growth for creators who want a clear system.',
  },
};

const platforms = [
  { name: 'OnlyFans', src: '/images/platforms/onlyfans.svg' },
  { name: 'Fansly', src: '/images/platforms/fansly.png' },
  { name: 'Fanvue', src: '/images/platforms/fanvue.png' },
  { name: 'MalouM', src: '/images/platforms/maloum.png' },
];

export function SiteFooter({
  locale = 'de',
  onLocaleChange,
}: {
  locale?: Locale;
  onLocaleChange?: (next: Locale) => void;
}) {
  const c = copy[locale];
  const year = new Date().getFullYear();
  const router = useRouter();
  const changeLocale = onLocaleChange ?? ((next: Locale) => router.push(`/${next}`));

  return (
    <footer className="bg-[#15162d] text-white">
      <div className="mx-auto grid w-[min(100%-2rem,90rem)] gap-14 py-20 md:grid-cols-[1fr_1.6fr] md:py-28">
        <div>
          <Link href={`/${locale}`} className="inline-flex font-black tracking-[.12em] text-[#d6fa43]">
            PROM4FANS
          </Link>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-[#c9cbda]">{c.note}</p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#15162d] transition hover:bg-[#d6fa43]"
          >
            {c.contact}
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 md:gap-12">
          <FooterGroup title={c.navTitle} links={c.nav} />

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[.16em] text-[#878aa1]">{c.platformsTitle}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <span
                  key={platform.name}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#f4f2ff]"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-white">
                    <Image src={platform.src} alt="" width={13} height={13} className="size-[13px] object-contain" />
                  </span>
                  {platform.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <FooterGroup title={c.legalTitle} links={c.legal} />
            <div className="mt-8">
              <h2 className="text-xs font-extrabold uppercase tracking-[.16em] text-[#878aa1]">{c.languageTitle}</h2>
              <div className="mt-4 flex gap-3 text-sm font-bold uppercase tracking-widest">
                <button
                  type="button"
                  className={`-m-2 flex items-center gap-1.5 p-2 ${locale === 'de' ? 'text-[#d6fa43]' : 'text-[#c9cbda] hover:text-white'}`}
                  onClick={() => changeLocale('de')}
                >
                  <FlagIcon locale="de" className="h-3 w-4 rounded-[2px]" />
                  DE
                </button>
                <button
                  type="button"
                  className={`-m-2 flex items-center gap-1.5 p-2 ${locale === 'en' ? 'text-[#d6fa43]' : 'text-[#c9cbda] hover:text-white'}`}
                  onClick={() => changeLocale('en')}
                >
                  <FlagIcon locale="en" className="h-3 w-4 rounded-[2px]" />
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-[min(100%-2rem,90rem)] py-6 text-xs text-[#878aa1]">
          <span>© {year} Prom4Fans</span>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h2 className="text-xs font-extrabold uppercase tracking-[.16em] text-[#878aa1]">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link className="text-sm font-semibold text-[#f4f2ff] transition hover:text-[#d6fa43]" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
