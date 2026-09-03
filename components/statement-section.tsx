'use client';

import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

export function StatementSection({ statement }: { statement: readonly [string, string, string] }) {
  const [ref, reveal] = useReveal<HTMLDivElement>(0);
  return (
    <section className="bg-[#15162d] py-24 text-white md:py-40">
      <div
        ref={ref}
        style={reveal.style}
        className={cn(
          'mx-auto w-[min(100%-2rem,78rem)] text-[clamp(2.6rem,6.4vw,6.6rem)] font-black leading-[1.05] tracking-[-.015em] md:leading-[.94] md:tracking-[-.025em]',
          reveal.className,
        )}
      >
        {statement[0]} <span className="text-[#ff5e83]">{statement[1]}</span>
        <br />
        <span className="block md:pl-16 text-[#aa8bff]">{statement[2]}</span>
      </div>
    </section>
  );
}
