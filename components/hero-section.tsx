'use client';

import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

export function HeroSection({
  eyebrow,
  hero,
  lead,
  ctaLabel,
}: {
  eyebrow: string;
  hero: readonly [string, string, string];
  lead: string;
  ctaLabel: string;
}) {
  const [eyebrowRef, eyebrowReveal] = useReveal<HTMLParagraphElement>(0);
  const [headingRef, headingReveal] = useReveal<HTMLHeadingElement>(80);
  const [rowRef, rowReveal] = useReveal<HTMLDivElement>(200);

  return (
    <section className="mx-auto w-[min(100%-2rem,64rem)] py-20 text-center md:py-32">
      <p
        ref={eyebrowRef}
        style={eyebrowReveal.style}
        className={cn(
          'text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]',
          eyebrowReveal.className,
        )}
      >
        {eyebrow}
      </p>

      <h1
        ref={headingRef}
        style={headingReveal.style}
        className={cn(
          'mx-auto mt-6 max-w-3xl text-[clamp(3.1rem,8vw,6.4rem)] font-black leading-[.98] tracking-[-.025em] text-[#15162d]',
          headingReveal.className,
        )}
      >
        {hero[0]}
        <br />
        <span className="text-[#6c35ed]">{hero[1]}</span> {hero[2]}
      </h1>

      <div
        ref={rowRef}
        style={rowReveal.style}
        className={cn('mx-auto mt-9 flex max-w-xl flex-col items-center gap-8', rowReveal.className)}
      >
        <p className="text-lg leading-relaxed text-[#586078] md:text-xl">{lead}</p>
        <a
          href="#contact"
          className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#15162d] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#6c35ed]"
        >
          {ctaLabel}
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
