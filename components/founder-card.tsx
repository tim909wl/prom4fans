'use client';

import Image from 'next/image';
import type { Locale } from '@/lib/i18n';

const altText: Record<Locale, string> = {
  de: 'Julius Blumberg, Gründer von Prom4Fans',
  en: 'Julius Blumberg, founder of Prom4Fans',
};

export function FounderCard({
  role,
  name,
  bio,
  locale,
}: {
  role: string;
  name: readonly [string, string];
  bio: string;
  locale: Locale;
}) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#23244a] to-[#15162d] sm:aspect-[3/4] md:aspect-auto md:h-[36rem]">
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-44 w-44 rounded-[45%_55%_60%_40%] bg-[#6c35ed]/25 blur-2xl"
      />
      <Image
        src="/images/image.png"
        alt={altText[locale]}
        fill
        sizes="(max-width: 768px) 90vw, 34rem"
        className="object-contain object-bottom"
      />
      <div className="absolute inset-x-5 bottom-5 z-10 rounded-2xl border border-white/15 bg-[#15162d]/70 p-4 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-5">
        <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#d6fa43]">{role}</p>
        <h3 className="mt-2 text-2xl font-black leading-[1] tracking-[-.01em] text-white sm:text-3xl">
          {name[0]} {name[1]}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#c9cadd]">{bio}</p>
      </div>
    </div>
  );
}
