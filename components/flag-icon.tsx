import type { Locale } from '@/lib/i18n';

// Small, dependency-free inline flags (no emoji — inconsistent rendering
// across platforms/fonts). Simplified but recognizable at icon size.
export function FlagIcon({ locale, className }: { locale: Locale; className?: string }) {
  if (locale === 'de') {
    return (
      <svg viewBox="0 0 20 14" className={className} aria-hidden>
        <rect width="20" height="14" fill="#000" />
        <rect y="4.67" width="20" height="9.33" fill="#DD0000" />
        <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden>
      <rect width="20" height="14" fill="#00247d" />
      <path d="M0,0 L20,14 M20,0 L0,14" stroke="#fff" strokeWidth="2.8" />
      <path d="M0,0 L20,14 M20,0 L0,14" stroke="#cf142b" strokeWidth="1.2" />
      <path d="M10,0 V14 M0,7 H20" stroke="#fff" strokeWidth="4.6" />
      <path d="M10,0 V14 M0,7 H20" stroke="#cf142b" strokeWidth="2.6" />
    </svg>
  );
}
