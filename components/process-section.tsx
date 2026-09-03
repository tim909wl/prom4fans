'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

type Step = { title: string; description: string };

function ProcessCard({ step, index }: { step: Step; index: number }) {
  const [ref, reveal] = useReveal<HTMLDivElement>(index * 110);
  return (
    <div ref={ref} style={reveal.style} className={cn('relative', reveal.className)}>
      <div className="mb-4 hidden items-center gap-3 md:flex">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#6c35ed] text-xs font-bold text-white">
          {index + 1}
        </span>
        <span className={cn('h-px flex-1 bg-[#ded8f0]', index === 3 && 'opacity-0')} />
      </div>
      <Card className="min-h-56 rounded-3xl border-[#e7e5ed] bg-white shadow-none transition-transform duration-300 hover:-translate-y-1.5 hover:border-[#6c35ed]/40 hover:shadow-[0_20px_45px_-25px_rgba(108,53,237,.45)]">
        <CardContent className="flex h-full flex-col justify-between p-6 md:p-7">
          <span className="text-sm font-bold text-[#6c35ed] md:hidden">0{index + 1}</span>
          <div>
            <h3 className="text-2xl font-bold tracking-[-.02em] text-[#15162d]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#666a82]">{step.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function ProcessSection({
  eyebrow,
  title,
  process,
}: {
  eyebrow: string;
  title: string;
  process: readonly Step[];
}) {
  const [eyebrowRef, eyebrowReveal] = useReveal<HTMLParagraphElement>(0);
  const [titleRef, titleReveal] = useReveal<HTMLHeadingElement>(100);

  return (
    <section id="process" className="scroll-mt-20 bg-[#fbfaf8] py-24 md:py-40">
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
            'mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-.02em] text-[#15162d] md:text-8xl md:leading-[.9] md:tracking-[-.03em]',
            titleReveal.className,
          )}
        >
          {title}
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-16 md:grid-cols-4 md:gap-4">
          {process.map((step, i) => (
            <ProcessCard step={step} index={i} key={step.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
