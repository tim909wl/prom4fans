'use client';

import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

type FaqItem = { q: string; a: string };

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [ref, reveal] = useReveal<HTMLDetailsElement>(index * 80);
  return (
    <details ref={ref} style={reveal.style} className={cn('group py-5', reveal.className)}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <h3 className="text-lg font-bold tracking-[-.02em] text-[#15162d] transition-colors group-hover:text-[#6c35ed] md:text-xl">
          {item.q}
        </h3>
        <Plus aria-hidden className="size-4 shrink-0 text-[#6c35ed] transition-transform duration-300 group-open:rotate-45" />
      </summary>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#585b73]">{item.a}</p>
    </details>
  );
}

export function FaqSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly FaqItem[];
}) {
  const [eyebrowRef, eyebrowReveal] = useReveal<HTMLParagraphElement>(0);
  const [titleRef, titleReveal] = useReveal<HTMLHeadingElement>(100);

  return (
    <section className="mx-auto w-[min(100%-2rem,78rem)] py-20 md:py-28">
      <p
        ref={eyebrowRef}
        style={eyebrowReveal.style}
        className={cn('text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]', eyebrowReveal.className)}
      >
        {eyebrow}
      </p>
      <h2
        ref={titleRef}
        style={titleReveal.style}
        className={cn(
          'mt-5 text-3xl font-black leading-[1.1] tracking-[-.015em] text-[#15162d] md:text-5xl md:leading-[1.05] md:tracking-[-.02em]',
          titleReveal.className,
        )}
      >
        {title}
      </h2>
      <div className="mt-10 max-w-3xl divide-y border-y">
        {items.map((item, i) => (
          <FaqRow item={item} index={i} key={item.q} />
        ))}
      </div>
    </section>
  );
}
