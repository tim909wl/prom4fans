'use client';

import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

function ProofItem({ item, index }: { item: string; index: number }) {
  const [ref, reveal] = useReveal<HTMLDivElement>(index * 100);
  return (
    <div
      ref={ref}
      style={reveal.style}
      className={cn(
        'group flex items-start gap-3 py-7 text-sm font-semibold leading-snug text-[#35374b] transition-transform duration-300 hover:-translate-y-0.5 md:px-6 first:md:pl-0 last:md:pr-0',
        reveal.className,
      )}
    >
      <span className="mt-0.5 text-xs font-black tracking-[.1em] text-[#6c35ed]">0{index + 1}</span>
      <span className="mt-1 h-3 w-px shrink-0 bg-[#6c35ed]/40" aria-hidden />
      {item}
    </div>
  );
}

export function ProofStrip({ items }: { items: readonly string[] }) {
  return (
    <section className="border-y-2 border-dashed border-[#ded8f0] bg-white">
      <div className="mx-auto grid w-[min(100%-2rem,78rem)] divide-y divide-dashed divide-[#ded8f0] md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((item, index) => (
          <ProofItem item={item} index={index} key={item} />
        ))}
      </div>
    </section>
  );
}
