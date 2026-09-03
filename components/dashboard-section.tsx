'use client';

import { GrowthBackdrop } from '@/components/growth-backdrop';
import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

export function DashboardSection({
  eyebrow,
  title,
  lead,
  stages,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  stages: readonly string[];
}) {
  const [ref, reveal] = useReveal<HTMLDivElement>(0);

  return (
    <section className="relative overflow-hidden bg-[#15162d] py-24 text-white md:py-44">
      <GrowthBackdrop visible={reveal.visible} />
      <div
        ref={ref}
        style={reveal.style}
        className={cn('relative z-10 mx-auto w-[min(100%-2rem,78rem)]', reveal.className)}
      >
        <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d6fa43]">{eyebrow}</p>
        <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.02] tracking-[-.02em] md:text-7xl md:leading-[.92] md:tracking-[-.03em]">{title}</h2>
        <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-300 md:text-lg">{lead}</p>

        <div className="mt-16 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-7 sm:grid-cols-4">
          {stages.map((stage) => (
            <div key={stage} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#d6fa43]" />
              {stage}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
