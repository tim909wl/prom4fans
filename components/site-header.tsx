'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { FlagIcon } from '@/components/flag-icon';
import type { Locale } from '@/lib/i18n';

// Absolute (locale-prefixed) so the nav also works from pages other than the
// homepage, e.g. /kontakt — a same-path fragment (like on the homepage itself)
// just scrolls, a different path does a real navigation to the section.
function navTargets(locale: Locale) {
  return [`/${locale}#services`, `/${locale}#process`, `/${locale}#about`];
}

export function SiteHeader({
  locale,
  nav,
  cta,
  navAriaLabel,
  menuOpenLabel,
  menuCloseLabel,
  onLocaleChange,
}: {
  locale: Locale;
  nav: readonly string[];
  cta: string;
  navAriaLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  onLocaleChange: (next: Locale) => void;
}) {
  const other = locale === 'de' ? 'en' : 'de';
  const targets = navTargets(locale);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  // Full-screen menu should never survive a resize back to desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const close = () => setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e8e5ef]/80 bg-[#fbfaf8]/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-[min(100%-2rem,90rem)] items-center justify-between">
          <Link
            href={`/${locale}`}
            className="font-black tracking-[.1em] text-[#6c35ed] transition-transform hover:scale-[1.03]"
            onClick={() => setOpen(false)}
          >
            PROM4FANS
          </Link>

          <nav aria-label={navAriaLabel} className="hidden gap-8 text-base font-semibold text-[#3d3f57] md:flex">
            {nav.map((item, index) => (
              <a
                className="group relative py-1 transition-colors hover:text-[#6c35ed]"
                key={item}
                href={targets[index]}
              >
                {item}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#6c35ed] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={`Sprache wechseln zu ${other}`}
              className="hidden items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#595b70] transition-colors hover:text-[#6c35ed] sm:inline-flex"
              onClick={() => onLocaleChange(other)}
            >
              <FlagIcon locale={other} className="h-3 w-4 rounded-[2px]" />
              {other}
            </button>
            <Link
              className="hidden h-10 items-center rounded-full bg-[#15162d] px-4 text-sm font-bold text-white transition-colors hover:bg-[#6c35ed] md:inline-flex"
              href="/kontakt"
            >
              {cta}
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? menuCloseLabel : menuOpenLabel}
              onClick={() => setOpen((value) => !value)}
              className={cn(
                'relative z-[60] grid size-11 place-items-center rounded-full border transition-colors md:hidden',
                open
                  ? 'border-transparent text-white'
                  : 'border-[#e8e5ef] text-[#15162d] hover:border-[#6c35ed] hover:text-[#6c35ed]',
              )}
            >
              <span className="relative grid size-5 place-items-center">
                <Menu
                  aria-hidden
                  className={cn(
                    'absolute size-5 transition-all duration-300',
                    open ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100',
                  )}
                />
                <X
                  aria-hidden
                  className={cn(
                    'absolute size-5 transition-all duration-300',
                    open ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0',
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile nav overlay — kept OUTSIDE <header> on purpose: header has
          backdrop-blur, and a backdrop-filter ancestor becomes the containing block for
          position:fixed descendants, which broke "inset-0" down to the header's own
          80px box instead of the viewport. The overlay has its own close button because
          it sits above the header's stacking context on mobile. */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-[#15162d] transition-opacity duration-300 ease-out md:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="mx-auto flex h-20 w-[min(100%-2rem,90rem)] shrink-0 items-center justify-end">
          <button
            type="button"
            aria-label={menuCloseLabel}
            onClick={() => setOpen(false)}
            className="grid size-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#15162d]"
          >
            <X aria-hidden className="size-5" />
          </button>
        </div>

        <nav
          aria-label={navAriaLabel}
          className="flex flex-1 flex-col justify-center gap-1 px-8 pb-16"
        >
          {nav.map((item, index) => (
            <a
              className={cn(
                'border-b border-white/10 py-4 text-4xl font-black tracking-[-.04em] text-white transition-all duration-500 first:pt-0',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
              )}
              style={{ transitionDelay: open ? `${100 + index * 70}ms` : '0ms' }}
              key={item}
              href={targets[index]}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4 border-t border-white/10 px-8 py-8">
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#d6fa43] px-6 text-base font-bold text-[#15162d] transition-colors hover:bg-white"
          >
            {cta}
          </Link>
          <button
            type="button"
            aria-label={`Sprache wechseln zu ${other}`}
            onClick={() => {
              onLocaleChange(other);
              setOpen(false);
            }}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold uppercase tracking-widest text-white/80 transition-colors hover:border-white/50 hover:text-white"
          >
            <FlagIcon locale={other} className="h-3.5 w-5 rounded-[2px]" />
            {other}
          </button>
        </div>
      </div>
    </>
  );
}
