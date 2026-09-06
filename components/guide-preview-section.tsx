'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

const featured = [
  {
    href: '/ratgeber/onlyfans-starten',
    eyebrow: 'Einstieg',
    title: 'OnlyFans starten: ein realistischer Plan für die ersten 30 Tage',
    text: 'Positionierung, Profil, Content-Puffer, Reichweite und Sicherheit in einer sinnvollen Reihenfolge aufbauen.',
  },
  {
    href: '/ratgeber/content-plan-erstellen',
    eyebrow: 'Content',
    title: 'Content-Plan erstellen, der auch nach vier Wochen noch funktioniert',
    text: 'Themen-Säulen, Formate, Produktionsrhythmus und Review-System so planen, dass der Alltag nicht am Content hängt.',
  },
  {
    href: '/ratgeber/creator-management-agentur',
    eyebrow: 'Management',
    title: '12 Fragen, bevor du eine Creator Management Agentur beauftragst',
    text: 'Scope, Account-Eigentum, Sicherheit, Reporting, Vergütung und Kündigung vor einer Zusammenarbeit sauber klären.',
  },
] as const;

export function GuidePreviewSection({ locale }: { locale: Locale }) {
  if (locale !== 'de') return null;

  return (
    <section className="border-y border-[#e8e5ef] bg-[#fbfaf8] py-20 text-[#15162d] md:py-28">
      <div className="mx-auto w-[min(100%-2rem,78rem)]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">Ratgeber</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1] tracking-[-.03em] md:text-6xl">Erst verstehen. Dann entscheiden.</h2>
          </div>
          <Link href="/ratgeber" className="inline-flex items-center gap-1.5 font-bold text-[#6c35ed]">
            Alle Creator-Guides <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group rounded-3xl border border-[#ded9eb] bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#6c35ed]/40 hover:shadow-[0_20px_50px_rgba(21,22,45,.08)]">
              <span className="text-xs font-extrabold uppercase tracking-[.14em] text-[#6c35ed]">{guide.eyebrow}</span>
              <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-.025em]">{guide.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5b6075]">{guide.text}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#6c35ed]">Guide lesen <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
