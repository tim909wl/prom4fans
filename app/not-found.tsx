import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-[min(100%-2rem,48rem)] flex-col items-start justify-center py-24">
      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">404</p>
      <h1 className="mt-5 text-[clamp(2.75rem,7vw,5rem)] font-black leading-[.9] tracking-[-.07em] text-[#15162d]">
        Diese Seite gibt es nicht.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-[#586078]">
        Der Link ist möglicherweise veraltet oder falsch eingegeben.
      </p>
      <Link
        href="/de"
        className="mt-8 inline-flex items-center rounded-full bg-[#15162d] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#6c35ed]"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
