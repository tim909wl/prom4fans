'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useReveal } from '@/lib/use-reveal';

type MessageKey = 'follow' | 'discover' | 'like' | 'join';
type Platform = 'onlyfans' | 'fansly' | 'fanvue' | 'maloum';

const notifications = [
  ['Mira', 'follow', 'onlyfans'], ['Sophie', 'discover', 'fansly'], ['Leonie', 'follow', 'fanvue'], ['Nina', 'like', 'maloum'], ['Clara', 'join', 'onlyfans'], ['Lena', 'follow', 'fansly'], ['Paula', 'discover', 'fanvue'], ['Mara', 'like', 'onlyfans'], ['Julia', 'join', 'maloum'], ['Anna', 'follow', 'fansly'], ['Sarah', 'discover', 'onlyfans'], ['Laura', 'follow', 'fanvue'], ['Emma', 'like', 'maloum'], ['Johanna', 'join', 'onlyfans'], ['Marie', 'follow', 'fansly'], ['Livia', 'discover', 'fanvue'], ['Hannah', 'like', 'onlyfans'], ['Elisa', 'join', 'maloum'], ['Amelie', 'follow', 'fansly'], ['Mia', 'discover', 'onlyfans'], ['Sina', 'join', 'fanvue'], ['Fiona', 'follow', 'maloum'], ['Carla', 'like', 'onlyfans'], ['Tessa', 'join', 'fansly'], ['Nele', 'follow', 'fanvue'], ['Romy', 'discover', 'onlyfans'], ['Alina', 'like', 'maloum'], ['Zoe', 'join', 'fansly'], ['Ida', 'follow', 'onlyfans'], ['Maja', 'discover', 'fanvue'], ['Lukas', 'follow', 'onlyfans'], ['Jonas', 'discover', 'fansly'], ['Felix', 'like', 'fanvue'], ['Noah', 'join', 'maloum'], ['Elias', 'follow', 'onlyfans'],
] as const satisfies ReadonlyArray<readonly [string, MessageKey, Platform]>;

const icons: Record<Platform, string> = {
  onlyfans: '/images/platforms/onlyfans.svg',
  fansly: '/images/platforms/fansly.png',
  fanvue: '/images/platforms/fanvue.png',
  maloum: '/images/platforms/maloum.png',
};

const messages: Record<'de' | 'en', Record<MessageKey, string>> = {
  de: { follow: 'folgt dir jetzt', discover: 'hat dein Profil entdeckt', like: 'hat dir ein Like gegeben', join: 'ist neu dabei' },
  en: { follow: 'just followed you', discover: 'discovered your profile', like: 'liked your post', join: 'just joined' },
};

const now = { de: 'jetzt', en: 'now' };

const phoneAlt = {
  de: 'Creatorin mit Kamera am Fenster',
  en: 'Creator with a camera by the window',
};

type Notification = (typeof notifications)[number];

const VISIBLE_STACK_SIZE = 4;
const STACK_BUFFER_SIZE = VISIBLE_STACK_SIZE + 1;
const ROTATE_MS = 3200;

const stackPositionClasses = [
  'translate-y-0 scale-100 opacity-100',
  '-translate-y-[54px] scale-[.99] opacity-[.98] sm:-translate-y-[64px] md:-translate-y-[72px]',
  '-translate-y-[108px] scale-[.98] opacity-[.96] sm:-translate-y-[128px] md:-translate-y-[144px]',
  '-translate-y-[162px] scale-[.97] opacity-[.92] sm:-translate-y-[192px] md:-translate-y-[216px]',
  '-translate-y-[216px] scale-[.95] opacity-0 sm:-translate-y-[256px] md:-translate-y-[288px]',
] as const;

/**
 * Keeps one invisible buffer card behind the visible stack. When a new card
 * arrives, the oldest visible card can therefore animate out before it is
 * removed on the following tick instead of popping away abruptly.
 */
function useNotificationStack() {
  const [stack, setStack] = useState<Array<{ id: number; item: Notification }>>(() => [
    { id: 0, item: notifications[0] },
  ]);
  const cursor = useRef(1);
  const nextId = useRef(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const item = notifications[cursor.current % notifications.length];
      cursor.current += 1;
      const id = nextId.current++;
      setStack((prev) => [{ id, item }, ...prev].slice(0, STACK_BUFFER_SIZE));
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, []);

  return stack;
}

function NotificationCard({ item, locale }: { item: Notification; locale: 'de' | 'en' }) {
  const [name, messageKey, platform] = item;
  return (
    <div className="flex h-12 items-center gap-1.5 overflow-hidden rounded-xl border border-white/55 bg-white/95 p-1.5 text-[#16172c] shadow-xl backdrop-blur sm:h-14 sm:gap-2 sm:rounded-2xl sm:p-2.5 md:h-16">
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white p-1 shadow-sm sm:size-7 md:size-8 md:p-1.5">
        <Image src={icons[platform]} alt="" width={18} height={18} className="object-contain" />
      </span>
      <p className="min-w-0 flex-1 text-[9px] leading-tight sm:text-[10px] md:text-[11px]">
        <b className="block">{name}</b>{messages[locale][messageKey]}
      </p>
      <span className="ml-auto hidden shrink-0 text-[9px] text-slate-400 sm:inline">{now[locale]}</span>
    </div>
  );
}

export function PhoneStage({
  eyebrow,
  title,
  lead,
  badge,
  sticker,
  locale = 'de',
}: {
  eyebrow: string;
  title: string;
  lead: string;
  badge: string;
  sticker: string;
  locale?: 'de' | 'en';
}) {
  const [time, setTime] = useState('--:--');
  const [date, setDate] = useState('');
  const stack = useNotificationStack();

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const language = locale === 'de' ? 'de-DE' : 'en-US';
      setTime(now.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit', hour12: false }));
      setDate(now.toLocaleDateString(language, { weekday: 'long', day: 'numeric', month: 'long' }));
    };
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, [locale]);

  const [textRef, textReveal] = useReveal<HTMLDivElement>(0);
  const [phoneRef, phoneReveal] = useReveal<HTMLDivElement>(150);

  return (
    <section className="relative isolate overflow-hidden bg-[#6c35ed] py-16 text-white md:py-32">
      <div className="mx-auto grid w-[min(100%-2rem,78rem)] grid-cols-[1.3fr_1fr] items-center gap-5 sm:gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-16">
        <div ref={textRef} style={textReveal.style} className={textReveal.className}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white md:text-xs">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d6fa43] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[#d6fa43]" />
            </span>
            {sticker}
          </div>
          <p className="mt-4 text-[10px] font-extrabold tracking-[.14em] text-[#f1ecff] uppercase md:mt-5 md:text-xs md:tracking-[.16em]">{eyebrow}</p>
          <h2 className="mt-3 max-w-[12rem] text-3xl font-black leading-[1.02] tracking-[-.02em] sm:max-w-xs md:mt-5 md:max-w-md md:text-7xl md:leading-[.92] md:tracking-[-.03em]">
            {title}
          </h2>
          <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-[#e3dbff] sm:max-w-sm md:mt-7 md:text-lg">{lead}</p>
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold md:mt-10 md:gap-3 md:text-sm">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#d6fa43] text-[#15162d] md:size-8">
              <Heart className="size-3.5 fill-current md:size-4" aria-hidden />
            </span>
            {badge}
          </div>
        </div>

        <div
          ref={phoneRef}
          style={phoneReveal.style}
          className={cn('relative z-0 mx-auto w-full max-w-[9.5rem] pb-6 pt-5 sm:max-w-[12rem] md:max-w-[24rem] md:pb-12 md:pt-10', phoneReveal.className)}
        >
          <div className="relative z-10 mx-auto aspect-[9/19.5] w-full overflow-hidden rounded-[1.6rem] border-[5px] border-[#17182b] bg-[#111222] shadow-[10px_14px_0_#4520a5] sm:rounded-[2rem] sm:border-[7px] sm:shadow-[16px_20px_0_#4520a5] md:rounded-[3.35rem] md:border-[11px] md:shadow-[26px_32px_0_#4520a5]">
            <div className="absolute left-1/2 top-0 z-30 h-3 w-12 -translate-x-1/2 rounded-b-[.6rem] bg-[#17182b] sm:h-4 sm:w-16 md:h-7 md:w-28 md:rounded-b-[1.2rem]" />
            <Image
              src="/images/creator-window.png"
              alt={phoneAlt[locale]}
              fill
              sizes="(max-width: 768px) 40vw, 336px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#15162d]/45 via-[#15162d]/10 to-[#111222]/85" />
            <div className="absolute inset-x-0 top-8 z-10 text-center sm:top-10 md:top-16">
              <time className="block text-[1.55rem] font-light leading-none tracking-[-.04em] text-white drop-shadow-md sm:text-[2rem] md:text-[clamp(3.4rem,10vw,5.3rem)] md:tracking-[-.08em]">
                {time}
              </time>
              <span className="mt-1 block text-[8px] font-semibold tracking-wide text-white/90 capitalize sm:text-[9px] md:mt-2 md:text-[11px]">{date || ' '}</span>
            </div>
            <div className="absolute inset-x-2 bottom-2 z-20 sm:inset-x-3 sm:bottom-3">
              <div className="relative h-[210px] sm:h-[285px] md:h-[360px]">
                {stack.map(({ id, item }, index) => (
                  <div
                    key={id}
                    className={cn(
                      'absolute inset-x-0 bottom-0 origin-bottom transition-[transform,opacity] duration-700 ease-out will-change-transform',
                      stackPositionClasses[index] ?? stackPositionClasses[STACK_BUFFER_SIZE - 1],
                      index === 0 && 'notification-enter',
                    )}
                    style={{ zIndex: STACK_BUFFER_SIZE - index }}
                  >
                    <NotificationCard item={item} locale={locale} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes notification-enter {
          0% { opacity: 0; transform: translateY(22px) scale(.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .notification-enter { animation: notification-enter .65s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .notification-enter { animation: none; }
        }
      `}</style>
    </section>
  );
}
