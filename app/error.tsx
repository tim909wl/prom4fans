'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] w-[min(100%-2rem,48rem)] flex-col items-start justify-center py-24">
      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">Fehler</p>
      <h1 className="mt-5 text-[clamp(2.75rem,7vw,5rem)] font-black leading-[.9] tracking-[-.07em] text-[#15162d]">
        Etwas ist schiefgelaufen.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-[#586078]">
        Bitte versuche es erneut oder kehre zur Startseite zurück.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center rounded-full bg-[#15162d] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#6c35ed]"
        >
          Erneut versuchen
        </button>
        <Link href="/de" className="text-sm font-bold text-[#6c35ed] transition-colors hover:text-[#15162d]">
          Startseite
        </Link>
      </div>
    </main>
  );
}
