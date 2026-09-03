'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

type Service = { title: string; description: string; points: readonly string[] };

function ServiceRow({ item, index }: { item: Service; index: number }) {
  const [ref, reveal] = useReveal<HTMLDivElement>(index * 90);
  return (
    <div
      ref={ref}
      style={reveal.style}
      className={cn(
        'grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr] md:gap-8 md:py-10',
        reveal.className,
      )}
    >
      <span className="text-sm font-bold text-[#6c35ed] md:text-base">0{index + 1}</span>
      <div>
        <h3 className="text-2xl font-bold tracking-[-.02em] text-[#15162d] md:text-4xl">{item.title}</h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#585b73]">{item.description}</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {item.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-semibold text-[#3d3f57]">
              <Check className="size-3.5 shrink-0 text-[#6c35ed]" aria-hidden />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ServicesSection({
  eyebrow,
  title,
  services,
}: {
  eyebrow: string;
  title: string;
  services: readonly Service[];
}) {
  const [eyebrowRef, eyebrowReveal] = useReveal<HTMLParagraphElement>(0);
  const [titleRef, titleReveal] = useReveal<HTMLHeadingElement>(100);

  return (
    <section id="services" className="scroll-mt-20 bg-[#f7f5ff] py-20 md:py-32">
      <div className="mx-auto w-[min(100%-2rem,78rem)]">
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
            'mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-.02em] text-[#15162d] md:text-7xl md:leading-[.92] md:tracking-[-.03em]',
            titleReveal.className,
          )}
        >
          {title}
        </h2>
        <div className="mt-12 divide-y divide-[#e3ddf7] border-y border-[#e3ddf7] md:mt-16">
          {services.map((item, i) => (
            <ServiceRow item={item} index={i} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
