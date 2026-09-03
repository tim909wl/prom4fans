'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

export function FinalCtaSection({
  eyebrow,
  title,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  ctaLabel: string;
}) {
  const [eyebrowRef, eyebrowReveal] = useReveal<HTMLParagraphElement>(0);
  const [titleRef, titleReveal] = useReveal<HTMLHeadingElement>(120);
  const [ctaRef, ctaReveal] = useReveal<HTMLAnchorElement>(260);

  return (
    <section id="contact" className="bg-[#ff5e83] py-28 md:py-52">
      <div className="mx-auto w-[min(100%-2rem,78rem)]">
        <p
          ref={eyebrowRef}
          style={eyebrowReveal.style}
          className={cn('text-xs font-extrabold uppercase tracking-[.16em] text-[#15162d]', eyebrowReveal.className)}
        >
          {eyebrow}
        </p>
        <h2
          ref={titleRef}
          style={titleReveal.style}
          className={cn(
            'mt-12 max-w-3xl text-[clamp(3.2rem,9vw,9rem)] font-black leading-[.94] tracking-[-.02em] text-[#15162d] md:mt-16 md:leading-[.85] md:tracking-[-.03em]',
            titleReveal.className,
          )}
        >
          {title}
        </h2>
        <Link
          ref={ctaRef}
          style={ctaReveal.style}
          href="/kontakt"
          className={cn(
            'mt-20 inline-flex rounded-full bg-[#15162d] px-7 py-4 font-bold text-white transition-transform hover:-translate-y-1 md:mt-24',
            ctaReveal.className,
          )}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
