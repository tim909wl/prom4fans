import Link from 'next/link';
import { ArrowRight, BookOpen, Clock3 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getCopy } from '@/lib/i18n';
import { guideList } from '@/lib/guide-pages';

const categoryOrder = ['Einstieg', 'Content', 'Wachstum', 'Management', 'Sicherheit', 'Analyse'] as const;

export function GuideHubShell() {
  const c = getCopy('de');

  return (
    <>
      <SiteHeader
        locale="de"
        nav={c.nav}
        cta={c.cta}
        navAriaLabel={c.navAriaLabel}
        menuOpenLabel={c.menuOpen}
        menuCloseLabel={c.menuClose}
      />

      <main className="bg-[#fbfaf8] text-[#15162d]">
        <section className="border-b border-[#e8e5ef] bg-[#f7f5ff] py-20 md:py-28">
          <div className="mx-auto w-[min(100%-2rem,78rem)]">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">
              <BookOpen className="size-4" aria-hidden />
              Prom4Fans Ratgeber
            </div>
            <h1 className="mt-5 max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[.9] tracking-[-.04em]">Wissen, das dir echte Entscheidungen abnimmt.</h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#565a72] md:text-xl">
              Praxisnahe Guides zu Positionierung, Content, Reichweite, Sicherheit und Creator Management. Keine Umsatzversprechen und keine Sammlung austauschbarer SEO-Texte – sondern klare Systeme, Checklisten und Entscheidungsgrundlagen.
            </p>
            <div className="mt-9 flex flex-wrap gap-2 text-sm font-semibold">
              {categoryOrder.map((category) => (
                <a key={category} href={`#${category.toLowerCase()}`} className="rounded-full border border-[#dcd6ee] bg-white px-4 py-2 transition hover:border-[#6c35ed]/40 hover:text-[#6c35ed]">{category}</a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto w-[min(100%-2rem,78rem)] space-y-20">
            {categoryOrder.map((category) => {
              const pages = guideList.filter((guide) => guide.category === category);
              if (!pages.length) return null;
              return (
                <section key={category} id={category.toLowerCase()} className="scroll-mt-28">
                  <div className="flex flex-col gap-3 border-b border-[#ded9eb] pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">Themenbereich</p>
                      <h2 className="mt-2 text-4xl font-black tracking-[-.03em] md:text-5xl">{category}</h2>
                    </div>
                    <span className="text-sm font-semibold text-[#777a8e]">{pages.length} {pages.length === 1 ? 'Guide' : 'Guides'}</span>
                  </div>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    {pages.map((page) => (
                      <article key={page.slug} className="group flex flex-col rounded-3xl border border-[#ded9eb] bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#6c35ed]/35 hover:shadow-[0_24px_55px_rgba(21,22,45,.08)] md:p-8">
                        <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[.12em] text-[#7c7f92]">
                          <span>{page.eyebrow}</span>
                          <span className="inline-flex items-center gap-1 normal-case tracking-normal"><Clock3 className="size-3.5" aria-hidden />{page.readingTime}</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-.025em] md:text-3xl">
                          <Link href={`/ratgeber/${page.slug}`} className="transition group-hover:text-[#6c35ed]">{page.title}</Link>
                        </h3>
                        <p className="mt-4 flex-1 leading-relaxed text-[#5b6075]">{page.lead}</p>
                        <Link href={`/ratgeber/${page.slug}`} className="mt-7 inline-flex items-center gap-1.5 font-bold text-[#6c35ed]">
                          {page.eyebrow} Guide lesen <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="border-t border-[#e8e5ef] bg-white py-20 md:py-24">
          <div className="mx-auto grid w-[min(100%-2rem,78rem)] gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">Redaktion & Methodik</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-.03em] md:text-5xl">Wie unsere Ratgeber entstehen.</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[#5b6075]">
              <p>Die Beiträge werden von der Prom4Fans Redaktion für Creator geschrieben, die konkrete Entscheidungen treffen müssen. Jeder Guide konzentriert sich deshalb auf einen klaren Anwendungsfall und enthält bewusst umsetzbare Schritte statt bloßer Definitionen.</p>
              <p>Wir trennen allgemeine, langfristig brauchbare Prinzipien von Details, die sich auf Plattformen verändern können. Bei sicherheits-, vertrags- oder plattformspezifischen Fragen weisen wir darauf hin, aktuelle offizielle Informationen zusätzlich zu prüfen. Inhalte werden überarbeitet, wenn sich unser praktischer Ansatz oder relevante Rahmenbedingungen wesentlich ändern.</p>
              <p>Prom4Fans veröffentlicht keine Einkommensgarantien. Reichweite, Conversion und Umsatz hängen von vielen Faktoren ab und lassen sich nicht seriös versprechen.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#15162d] py-20 text-white md:py-28">
          <div className="mx-auto grid w-[min(100%-2rem,78rem)] gap-10 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d6fa43]">Nicht nur lesen</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.03em] md:text-6xl">Aus einzelnen Tipps wird erst mit einem System echte Entlastung.</h2>
            </div>
            <div>
              <p className="leading-relaxed text-[#c9cbda]">Wenn du Positionierung, Content, Distribution und Reporting nicht selbst zusammensetzen möchtest, kannst du dir ansehen, wie Prom4Fans diese Bausteine im Creator Management verbindet.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/de/creator-management" className="rounded-full bg-[#d6fa43] px-5 py-3 text-sm font-bold text-[#15162d]">Creator Management</Link>
                <Link href="/de/onlyfans-management" className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">OnlyFans Management</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="de" />
    </>
  );
}
