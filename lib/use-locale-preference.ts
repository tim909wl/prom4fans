'use client';

import { useEffect, useState } from 'react';
import { locales, type Locale } from '@/lib/i18n';

const STORAGE_KEY = 'p4f-locale';

function isLocale(value: string | null): value is Locale {
  return value !== null && (locales as readonly string[]).includes(value);
}

function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'de';
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const candidate of candidates) {
    const base = candidate.slice(0, 2).toLowerCase();
    if (isLocale(base)) return base;
  }
  return 'de';
}

/**
 * Locale state that survives across pages/visits: a manual choice is saved to
 * localStorage and wins on every future load. With no saved choice yet, the
 * browser's language (navigator.language) picks the initial locale instead of
 * always defaulting to German.
 *
 * `initial` is the server-rendered locale (from the URL, or 'de' for
 * locale-less routes like /kontakt) and is what gets used for the very first
 * paint, so hydration always matches the server. Any override from storage or
 * browser detection is applied client-side right after mount.
 */
export function useLocalePreference(initial: Locale) {
  const [locale, setLocaleState] = useState<Locale>(initial);

  useEffect(() => {
    // Reading localStorage/navigator and syncing them into React state is a
    // one-time "pull" from an external system on mount, not a reaction to a
    // React-owned value — queueMicrotask hands the actual setState call to a
    // callback (matching the observer-callback pattern used elsewhere) so it
    // doesn't run synchronously in the effect body itself.
    queueMicrotask(() => {
      let stored: string | null = null;
      try {
        stored = window.localStorage.getItem(STORAGE_KEY);
      } catch {
        // localStorage can throw in private-browsing/blocked-storage contexts — fall through to detection.
      }

      if (isLocale(stored)) {
        if (stored !== initial) setLocaleState(stored);
        return;
      }

      const detected = detectBrowserLocale();
      if (detected !== initial) setLocaleState(detected);
      try {
        window.localStorage.setItem(STORAGE_KEY, detected);
      } catch {
        // Ignore — detection still applies for this session even if it can't be persisted.
      }
    });
    // Only ever run once, right after mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore — the in-memory state still switches for this session.
    }
  }

  return [locale, setLocale] as const;
}
