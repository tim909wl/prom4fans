import { BarChart3, CheckCircle2, Layers3, Route, ShieldCheck, Sparkles } from 'lucide-react';
import type { UnifiedGuidePage } from '@/lib/all-guides';

export function GuideGraphic({ page }: { page: UnifiedGuidePage }) {
  if (page.category === 'Sicherheit') return <SecurityGraphic />;
  if (page.category === 'Analyse') return <AnalyticsGraphic />;
  if (page.category === 'Management') return <ManagementGraphic />;
  if (page.category === 'Wachstum') return <FunnelGraphic />;
  if (page.category === 'Content') return <ContentGraphic />;
  return <StartGraphic />;
}

function Frame({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-[#ded9eb] bg-white shadow-[0_20px_55px_rgba(21,22,45,.06)]">
      <figcaption className="border-b border-[#ece8f3] px-5 py-4 sm:px-6">
        <p className="text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">{eyebrow}</p>
        <p className="mt-1 text-sm font-bold text-[#2d3045] sm:text-base">{title}</p>
      </figcaption>
      <div className="p-4 sm:p-6">{children}</div>
    </figure>
  );
}

function StartGraphic() {
  return (
    <Frame eyebrow="Startsystem" title="Aus einer Idee wird ein belastbarer Ablauf">
      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ['01', 'Positionierung', 'Für wen und wofür?'],
          ['02', 'Profil', 'Erwartung sofort klären'],
          ['03', 'Content', 'Formate wiederholbar machen'],
          ['04', 'Messen', 'Aus Daten nachsteuern'],
        ].map(([number, label, text], index) => (
          <div key={label} className="relative rounded-2xl bg-[#f7f5ff] p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-black tracking-[.12em] text-[#6c35ed]">{number}</span>
              {index < 3 && <span aria-hidden className="hidden text-[#b9addf] sm:block">→</span>}
            </div>
            <p className="mt-6 font-black text-[#15162d]">{label}</p>
            <p className="mt-1 text-xs leading-relaxed text-[#686c82]">{text}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function ContentGraphic() {
  return (
    <Frame eyebrow="Content-System" title="Thema → Format → Produktion → Wiederverwendung">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-2xl bg-[#15162d] p-5 text-white">
          <div className="flex items-center gap-2 text-[#d6fa43]"><Sparkles className="size-4" aria-hidden /><span className="text-xs font-black uppercase tracking-[.14em]">Ideenpool</span></div>
          <div className="mt-4 space-y-2">
            {['Themen-Säulen', 'Community-Fragen', 'Serien & Hooks'].map((item) => <div key={item} className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold">{item}</div>)}
          </div>
        </div>
        <div className="grid size-11 place-items-center justify-self-center rounded-full bg-[#d6fa43] text-[#15162d] rotate-90 sm:rotate-0"><span aria-hidden>→</span></div>
        <div className="grid grid-cols-2 gap-2">
          {['Short Video', 'Story', 'Guide', 'Post'].map((item, index) => <div key={item} className={`rounded-2xl p-4 ${index === 0 ? 'bg-[#6c35ed] text-white' : 'bg-[#f7f5ff] text-[#30334a]'}`}><Layers3 className="size-4" aria-hidden /><p className="mt-6 text-sm font-black">{item}</p></div>)}
        </div>
      </div>
    </Frame>
  );
}

function FunnelGraphic() {
  return (
    <Frame eyebrow="Growth-Funnel" title="Nicht nur Reichweite messen – den ganzen Weg sehen">
      <div className="space-y-2">
        {[
          ['Aufmerksamkeit', '100 %', 'Viele sehen dich'],
          ['Profilbesuch', '24 %', 'Die richtigen werden neugierig'],
          ['Vertrauen', '11 %', 'Wiederkehrende Kontakte'],
          ['Handlung', '4 %', 'Klarer nächster Schritt'],
        ].map(([label, value, text], index) => (
          <div key={label} className="mx-auto rounded-2xl border border-[#e7e1f5] bg-[#f9f8fd] px-4 py-3" style={{ width: `${100 - index * 10}%` }}>
            <div className="flex items-center justify-between gap-4"><span className="text-sm font-black text-[#15162d]">{label}</span><span className="text-xs font-bold text-[#6c35ed]">{value}</span></div>
            <p className="mt-1 text-xs text-[#777a8f]">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs font-semibold leading-relaxed text-[#777a8f]">Beispielhafte Funnel-Visualisierung – keine versprochenen Conversion-Werte.</p>
    </Frame>
  );
}

function ManagementGraphic() {
  return (
    <Frame eyebrow="Management" title="Delegieren, ohne die Kontrolle zu verlieren">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-[#f7f5ff] p-5"><Route className="size-5 text-[#6c35ed]" aria-hidden /><p className="mt-5 font-black">Du entscheidest</p><p className="mt-2 text-xs leading-relaxed text-[#686c82]">Grenzen, Positionierung, Freigaben und Ziele.</p></div>
        <div className="rounded-2xl bg-[#15162d] p-5 text-white"><Layers3 className="size-5 text-[#d6fa43]" aria-hidden /><p className="mt-5 font-black">System übernimmt</p><p className="mt-2 text-xs leading-relaxed text-[#c9cbda]">Planung, Prozesse, Dokumentation und Auswertung.</p></div>
        <div className="rounded-2xl bg-[#f7f5ff] p-5"><CheckCircle2 className="size-5 text-[#6c35ed]" aria-hidden /><p className="mt-5 font-black">Alles bleibt sichtbar</p><p className="mt-2 text-xs leading-relaxed text-[#686c82]">Zugänge, Daten, Verantwortlichkeiten und nächste Schritte.</p></div>
      </div>
    </Frame>
  );
}

function SecurityGraphic() {
  return (
    <Frame eyebrow="Sicherheit" title="Mehrere Schutzschichten statt eines einzelnen Passworts">
      <div className="relative mx-auto grid aspect-square max-w-[22rem] place-items-center rounded-full border border-[#e3ddf7] bg-[#fbfaff] p-5">
        <div className="absolute inset-[8%] rounded-full border border-dashed border-[#cfc3f3]" />
        <div className="absolute inset-[22%] rounded-full border border-[#b8a6ee] bg-white" />
        <div className="relative z-10 grid size-24 place-items-center rounded-full bg-[#15162d] text-[#d6fa43] shadow-xl"><ShieldCheck className="size-10" aria-hidden /></div>
        <span className="absolute left-[8%] top-[18%] rounded-full bg-white px-3 py-1.5 text-[.7rem] font-bold shadow-sm">2FA</span>
        <span className="absolute right-[5%] top-[42%] rounded-full bg-white px-3 py-1.5 text-[.7rem] font-bold shadow-sm">Backups</span>
        <span className="absolute bottom-[14%] left-[14%] rounded-full bg-white px-3 py-1.5 text-[.7rem] font-bold shadow-sm">Rollen</span>
      </div>
    </Frame>
  );
}

function AnalyticsGraphic() {
  return (
    <Frame eyebrow="Analyse" title="Entscheidungen aus einer kleinen, klaren Kennzahlenkette">
      <div className="grid gap-3 sm:grid-cols-[1fr_1.3fr]">
        <div className="rounded-2xl bg-[#15162d] p-5 text-white"><BarChart3 className="size-5 text-[#d6fa43]" aria-hidden /><p className="mt-7 text-3xl font-black">4</p><p className="mt-1 text-xs text-[#c9cbda]">Kernsignale statt 40 Vanity Metrics</p></div>
        <div className="grid grid-cols-2 gap-2">
          {[['Reach', 'Aufmerksamkeit'], ['Visits', 'Interesse'], ['Clicks', 'Intent'], ['Retention', 'Bindung']].map(([label, text]) => <div key={label} className="rounded-2xl bg-[#f7f5ff] p-4"><p className="text-sm font-black text-[#6c35ed]">{label}</p><p className="mt-5 text-xs font-semibold text-[#686c82]">{text}</p></div>)}
        </div>
      </div>
    </Frame>
  );
}
