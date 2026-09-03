'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const platforms = [
  { value: 'OnlyFans', label: 'OnlyFans', src: '/images/platforms/onlyfans.svg' },
  { value: 'Fansly', label: 'Fansly', src: '/images/platforms/fansly.png' },
  { value: 'Fanvue', label: 'Fanvue', src: '/images/platforms/fanvue.png' },
  { value: 'MalouM', label: 'MalouM', src: '/images/platforms/maloum.png' },
];

const copy: Record<Locale, {
  name: string;
  email: string;
  message: string;
  messagePlaceholder: string;
  consent: (link: string) => [string, string, string];
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  errors: Record<string, string>;
}> = {
  de: {
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    messagePlaceholder: 'Erzähl uns kurz, wo du stehst und wohin du möchtest.',
    consent: (link) => ['Ich habe die ', 'Datenschutzerklärung', ' gelesen und bin mit der Verarbeitung meiner Angaben einverstanden.'],
    submit: 'Nachricht senden',
    submitting: 'Wird gesendet …',
    successTitle: 'Angekommen.',
    successBody: 'Danke für deine Nachricht. Wir melden uns in der Regel innerhalb von 1–2 Werktagen persönlich zurück.',
    errors: {
      invalid_name: 'Bitte gib deinen Namen an.',
      invalid_email: 'Bitte gib eine gültige E-Mail-Adresse an.',
      invalid_message: 'Deine Nachricht sollte zwischen 10 und 3000 Zeichen lang sein.',
      invalid_profile: 'Bitte vervollständige alle Profilangaben.',
      invalid: 'Bitte fülle alle Pflichtfelder aus und bestätige die Datenschutzerklärung.',
      consent_required: 'Bitte bestätige die Datenschutzerklärung.',
      rate_limited: 'Zu viele Anfragen. Bitte versuch es in einer Stunde erneut.',
      spam_check_failed: 'Das hat nicht geklappt. Bitte lade die Seite neu und versuch es noch einmal.',
      send_failed: 'Senden fehlgeschlagen. Bitte versuch es später erneut oder schreib uns direkt.',
      default: 'Etwas ist schiefgelaufen. Bitte versuch es erneut.',
    },
  },
  en: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Tell us briefly where you stand and where you want to go.',
    consent: (link) => ['I’ve read the ', 'privacy policy', ' and agree to my details being processed.'],
    submit: 'Send message',
    submitting: 'Sending …',
    successTitle: 'Got it.',
    successBody: 'Thanks for your message. We usually get back to you in person within 1–2 business days.',
    errors: {
      invalid_name: 'Please enter your name.',
      invalid_email: 'Please enter a valid email address.',
      invalid_message: 'Your message should be between 10 and 3000 characters.',
      invalid_profile: 'Please complete all profile details.',
      invalid: 'Please complete all required fields and accept the privacy policy.',
      consent_required: 'Please confirm the privacy policy.',
      rate_limited: 'Too many requests. Please try again in an hour.',
      spam_check_failed: 'That didn’t work. Please reload the page and try again.',
      send_failed: 'Sending failed. Please try again later or email us directly.',
      default: 'Something went wrong. Please try again.',
    },
  },
};

export function ContactForm({ token, locale = 'de' }: { token: string; locale?: Locale }) {
  const c = copy[locale];
  const [status, setStatus] = useState<Status>('idle');
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorKey(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/kontakt.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          age: data.get('age'), country: data.get('country'), platform: data.get('platform'),
          reach: data.get('reach'), comfort: data.get('comfort'), goal: data.get('goal'),
          consent: data.get('consent') === 'on',
          company: data.get('company'), // honeypot
          token,
          locale,
        }),
      });
      const json = await res.json().catch(() => ({ ok: false, error: 'default' }));
      if (!res.ok || !json.ok) {
        setErrorKey(json.error ?? 'default');
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch {
      setErrorKey('default');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div>
        <div className="grid size-12 place-items-center rounded-2xl bg-[#d6fa43] text-[#15162d]">
          <Check className="size-5" />
        </div>
        <h2 className="mt-7 text-3xl font-black leading-[.9] tracking-[-.02em]">{c.successTitle}</h2>
        <p className="mt-5 leading-relaxed text-[#d0d0df]">{c.successBody}</p>
      </div>
    );
  }

  const [before, linkText, after] = c.consent('/datenschutz');

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid size-12 place-items-center rounded-2xl bg-[#d6fa43] text-[#15162d]">
        <ArrowUpRight className="size-5" />
      </div>
      <h2 className="mt-7 text-3xl font-black leading-[.9] tracking-[-.06em]">Dein erster Schritt.</h2>
      <div className="mt-6 flex items-center gap-2" aria-label={`Schritt ${step} von 3`}>{[1, 2, 3].map((n) => <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= step ? 'bg-[#d6fa43]' : 'bg-white/15'}`} />)}</div>

      <div className="mt-7 flex flex-col gap-4">
        <div className={step === 1 ? 'contents' : 'hidden'}>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#aeb0c3]">{c.name}</span>
          <input
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#6c6e88] focus:border-[#d6fa43] focus:outline-none"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Alter" name="age" type="number" min="18" max="99" required />
          <Field label="Land" name="country" placeholder="z. B. Deutschland" required />
        </div>
        </div>

        <div className={step === 2 ? 'contents' : 'hidden'}>
        <fieldset>
          <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-[#aeb0c3]">Aktuelle oder geplante Subscription-Plattform</legend>
          <div className="grid grid-cols-2 gap-2">
            {platforms.map((platform) => <label key={platform.value} className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm has-[:checked]:border-[#d6fa43] has-[:checked]:bg-[#d6fa43]/10"><input required type="radio" name="platform" value={platform.value} className="sr-only" /><span className="grid size-7 place-items-center rounded-full bg-white"><Image src={platform.src} alt="" width={16} height={16} className="size-4 object-contain" /></span><span>{platform.label}</span></label>)}
          </div>
        </fieldset>

        <Field label="Aktuelle Social-Media-Reichweite" name="reach" placeholder="z. B. noch keine oder ca. 12.000 Follower" required />
        </div>

        <div className={step === 3 ? 'contents' : 'hidden'}>
        <SelectField label="Womit fühlst du dich wohl zu posten?" name="comfort" options={[['lifestyle','Nur nicht-explizite / Lifestyle-Inhalte'],['both','Lifestyle und explizite Inhalte'],['unsure','Noch unsicher – lass uns darüber sprechen']]} />
        <SelectField label="Was ist dein Hauptziel?" name="goal" options={[['start','Erste Subscription aufbauen'],['grow','Bestehende Subscription wachsen lassen'],['system','Mehr Struktur und weniger Stress'],['other','Etwas anderes']]} />

        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#aeb0c3]">{c.email}</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#6c6e88] focus:border-[#d6fa43] focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#aeb0c3]">Erzähl uns von dir</span>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={4}
            placeholder={c.messagePlaceholder}
            className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#6c6e88] focus:border-[#d6fa43] focus:outline-none"
          />
        </label>

        {/* Honeypot — hidden from sighted users and keyboard/tab order, but present for bots that fill every field. */}
        <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label>
            Company
            <input name="company" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label className="flex items-start gap-2.5 text-xs leading-relaxed text-[#aeb0c3]">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 size-4 shrink-0 rounded border-white/25 bg-white/5 accent-[#d6fa43]"
          />
          <span>
            {before}
            <Link href="/datenschutz" className="underline hover:text-white">{linkText}</Link>
            {after}
          </span>
        </label>
        </div>

        {status === 'error' && (
          <p role="alert" className="text-sm font-semibold text-[#ff8fa3]">
            {c.errors[errorKey ?? 'default'] ?? c.errors.default}
          </p>
        )}

        <div className="mt-2 flex gap-2">
          {step > 1 && <button type="button" onClick={() => { setErrorKey(null); setStatus('idle'); setStep((value) => value - 1); }} className="rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Zurück</button>}
          {step < 3 ? <button type="button" onClick={() => { setErrorKey(null); setStatus('idle'); setStep((value) => value + 1); }} className="inline-flex flex-1 items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#15162d] transition hover:bg-[#d6fa43]">Weiter <ArrowUpRight className="size-4" /></button> : <button type="submit" disabled={status === 'submitting'} className="inline-flex flex-1 items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#15162d] transition hover:bg-[#d6fa43] disabled:opacity-60">{status === 'submitting' ? c.submitting : c.submit}{status === 'submitting' ? <Loader2 className="size-4 animate-spin" /> : <ArrowUpRight className="size-4" />}</button>}
        </div>
      </div>
    </form>
  );
}

function Field({ label, name, type = 'text', placeholder, min, max, required = false }: { label: string; name: string; type?: string; placeholder?: string; min?: string; max?: string; required?: boolean }) {
  return <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#aeb0c3]">{label}</span><input name={name} type={type} min={min} max={max} required={required} placeholder={placeholder} className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#6c6e88] focus:border-[#d6fa43] focus:outline-none" /></label>;
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[][] }) {
  return <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#aeb0c3]">{label}</span><select name={name} required defaultValue="" className="w-full appearance-none rounded-xl border border-white/15 bg-[#252641] px-4 py-3 text-sm text-white focus:border-[#d6fa43] focus:outline-none"><option value="" disabled>Bitte auswählen</option>{options.map(([value, text]) => <option key={value} value={value}>{text}</option>)}</select></label>;
}
