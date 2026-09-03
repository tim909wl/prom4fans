'use client';

import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

type OfferItem = { title: string; description: string };

function OfferCard({ item, index }: { item: OfferItem; index: number }) {
  const [ref, reveal] = useReveal<HTMLDivElement>(index * 100);
  return (
    <div
      ref={ref}
      style={reveal.style}
      className={cn(
        'group rounded-3xl border border-[#e7e5ed] bg-white p-7 shadow-[0_1px_0_#eee] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6c35ed]/40 hover:shadow-[0_24px_50px_-28px_rgba(108,53,237,.5)] md:p-8',
        reveal.className,
      )}
    >
      <span className="grid size-11 place-items-center rounded-full bg-[#f2edff] text-sm font-bold text-[#6c35ed]">
        0{index + 1}
      </span>
      <h3 className="mt-6 text-2xl font-bold tracking-[-.02em] text-[#15162d]">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#585b73]">{item.description}</p>
    </div>
  );
}

export function OfferSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly OfferItem[];
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
          'mt-5 max-w-2xl text-3xl font-black leading-[1.08] tracking-[-.015em] text-[#15162d] md:text-5xl md:leading-[1.02] md:tracking-[-.02em]',
          titleReveal.className,
        )}
      >
        {title}
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        {items.map((item, i) => (
          <OfferCard item={item} index={i} key={item.title} />
        ))}
      </div>
    </section>
  );
}
