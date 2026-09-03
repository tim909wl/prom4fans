'use client';

import { ArrowUpRight, Check } from 'lucide-react';
import { FounderCard } from '@/components/founder-card';
import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';
import type { Locale } from '@/lib/i18n';

function Bullet({ item, index }: { item: string; index: number }) {
  const [ref, reveal] = useReveal<HTMLLIElement>(index * 110);
  return (
    <li ref={ref} style={reveal.style} className={cn('flex items-center gap-3', reveal.className)}>
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#d6fa43] text-[#15162d]">
        <Check className="size-3.5" aria-hidden />
      </span>
      {item}
    </li>
  );
}

export function AboutPanel({
  eyebrow,
  title,
  lead,
  bullets,
  ctaLabel,
  founderRole,
  founderName,
  founderBio,
  locale,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  bullets: readonly string[];
  ctaLabel: string;
  founderRole: string;
  founderName: readonly [string, string];
  founderBio: string;
  locale: Locale;
}) {
  const [leadRef, leadReveal] = useReveal<HTMLDivElement>(0);
  const [founderRef, founderReveal] = useReveal<HTMLDivElement>(150);

  return (
    <section id="about" className="bg-[#15162d] py-20 text-white md:py-32">
      <div className="mx-auto w-[min(100%-2rem,78rem)]">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
          <div ref={leadRef} style={leadReveal.style} className={leadReveal.className}>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d6fa43]">{eyebrow}</p>
            <h2 className="mt-5 max-w-md text-4xl font-black leading-[1.04] tracking-[-.02em] md:text-6xl md:leading-[.96]">
              {title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#c9cadd] md:text-lg">{lead}</p>
            <ul className="mt-8 space-y-4 text-sm font-semibold">
              {bullets.map((item, index) => (
                <Bullet item={item} index={index} key={item} />
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#d6fa43] transition-colors hover:text-white"
            >
              {ctaLabel}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
            </a>
          </div>

          <div ref={founderRef} style={founderReveal.style} className={founderReveal.className}>
            <FounderCard role={founderRole} name={founderName} bio={founderBio} locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
