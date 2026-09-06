import Link from 'next/link';
import { ArrowRight, BookOpen, Clock3, Compass, Layers3, Sparkles } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getCopy } from '@/lib/i18n';
import { allGuideList } from '@/lib/all-guides';

const categoryOrder = ['Einstieg', 'Content', 'Wachstum', 'Management', 'Sicherheit', 'Analyse'] as const;
const featuredSlugs = ['onlyfans-starten', 'onlyfans-follower-gewinnen', 'onlyfans-management-vs-selbst-machen'];

export function GuideHubShell() {
  const c = getCopy('de');
  const featured = featuredSlugs.map((slug) => allGuideList.find((guide) => guide.slug === slug)).filter(Boolean);

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
        <section className="overflow-hidden border-b border-[#e8e5ef] bg-[#f7f5ff] py-12 sm:py-16 md:py-28">
          <div className="mx-auto grid w-[min(100%-1.25rem,78rem)] gap-9 sm:w-[min(100%-2rem,78rem)] md:grid-cols-[1.2fr_.8fr] md:items-end md:gap-12">
            <div>
              <div className="flex items-center gap-2 text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#6c35ed] sm:text-xs">
                <BookOpen className="size-4" aria-hidden />
                Prom4Fans Ratgeber
              </div>
              <h1 className="mt-4 max-w-5xl text-[clamp(2.7rem,12vw,7.2rem)] font-black leading-[.9] tracking-[-.045em] sm:mt-5">Wissen, das dir echte Entscheidungen abnimmt.</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#565a72] sm:mt-8 sm:text-lg sm:leading-relaxed md:text-xl">
                Praxisnahe Guides zu Positionierung, Content, Reichweite, Sicherheit und Creator Management. Keine Sammlung austauschbarer SEO-Texte, sondern Systeme, Checklisten und Entscheidungsgrundlagen.
              </p>
            </div>

            <div className="relative min-h-[15rem] overflow-hidden rounded-[1.8rem] bg-[#15162d] p-5 text-white sm:min-h-[18rem] sm:p-7">
              <div className="absolute -right-10 -top-10 size-40 rounded-full border border-white/10" />
              <div className="absolute -right-3 top-12 size-24 rounded-full bg-[#6c35ed]" />
              <div className="absolute bottom-4 right-5 grid size-20 place-items-center rounded-full bg-[#d6fa43] text-[#15162d]"><Compass className="size-8" aria-hidden /></div>
              <p className="text-xs font-black uppercase tracking-[.14em] text-[#d6fa43]">Themenbibliothek</p>
              <p className="mt-4 max-w-[12rem] text-4xl font-black leading-none tracking-[-.04em] sm:text-5xl">{allGuideList.length} Guides</p>
              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2 sm:bottom-7 sm:left-7">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">Content</span>
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">Growth</span>
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">Management</span>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 w-[min(100%-1.25rem,78rem)] sm:mt-10 sm:w-[min(100%-2rem,78rem)]">
            <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categoryOrder.map((category) => (
                <a key={category} href={`#${category.toLowerCase()}`} className="shrink-0 snap-start rounded-full border border-[#dcd6ee] bg-white px-4 py-2 text-sm font-semibold transition hover:border-[#6c35ed]/40 hover:text-[#6c35ed]">{category}</a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#e8e5ef] bg-white py-12 sm:py-16">
          <div className="mx-auto w-[min(100%-1.25rem,78rem)] sm:w-[min(100%-2rem,78rem)]">
            <div className="flex items-center gap-2 text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#6c35ed] sm:text-xs"><Sparkles className="size-4" aria-hidden />Guter Einstieg</div>
            <h2 className="mt-3 text-3xl font-black tracking-[-.035em] sm:text-4xl">Drei Guides, wenn du nicht weißt, wo du anfangen sollst.</h2>
            <div className="-mx-2 mt-6 flex snap-x gap-3 overflow-x-auto px-2 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
              {featured.map((page, index) => page && (
                <Link key={page.slug} href={`/ratgeber/${page.slug}`} className="group min-w-[84%] snap-start rounded-3xl border border-[#ded9eb] bg-[#fbfaf8] p-5 transition hover:-translate-y-0.5 hover:border-[#6c35ed]/35 hover:shadow-lg sm:min-w-0 sm:p-6">
                  <div className="flex items-center justify-between"><span className="grid size-8 place-items-center rounded-full bg-[#6c35ed] text-xs font-black text-white">0{index + 1}</span><ArrowRight className="size-4 text-[#6c35ed] transition-transform group-hover:translate-x-1" aria-hidden /></div>
                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[.13em] text-[#7a7d90]">{page.category}</p>
                  <h3 className="mt-2 text-xl font-black leading-tight tracking-[-.02em]">{page.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#64687e]">{page.lead}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24">
          <div className="mx-auto w-[min(100%-1.25rem,78rem)] space-y-14 sm:w-[min(100%-2rem,78rem)] sm:space-y-20">
            {categoryOrder.map((category) => {
              const pages = allGuideList.filter((guide) => guide.category === category);
              if (!pages.length) return null;
              return (
                <section key={category} id={category.toLowerCase()} className="scroll-mt-24 sm:scroll-mt-28">
                  <div className="flex items-end justify-between gap-4 border-b border-[#ded9eb] pb-4 sm:pb-6">
                    <div>
                      <p className="text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#6c35ed] sm:text-xs">Themenbereich</p>
                      <h2 className="mt-1.5 text-3xl font-black tracking-[-.035em] sm:mt-2 sm:text-4xl md:text-5xl">{category}</h2>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-[#777a8e] sm:text-sm">{pages.length} {pages.length === 1 ? 'Guide' : 'Guides'}</span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-5 md:grid-cols-2">
                    {pages.map((page) => (
                      <article key={page.slug} className="group flex flex-col rounded-[1.4rem] border border-[#ded9eb] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#6c35ed]/35 hover:shadow-[0_24px_55px_rgba(21,22,45,.08)] sm:rounded-3xl sm:p-7 md:p-8">
                        <div className="flex items-center justify-between gap-4 text-[.68rem] font-bold uppercase tracking-[.12em] text-[#7c7f92] sm:text-xs">
                          <span>{page.eyebrow}</span>
                          <span className="inline-flex items-center gap-1 normal-case tracking-normal"><Clock3 className="size-3.5" aria-hidden />{page.readingTime}</span>
                        </div>
                        <h3 className="mt-3 text-xl font-black leading-tight tracking-[-.025em] sm:mt-4 sm:text-2xl md:text-3xl">{page.title}</h3>
                        <p className="mt-3 flex-1 text-sm leading-6 text-[#5b6075] sm:mt-4 sm:text-base sm:leading-relaxed">{page.lead}</p>
                        <Link href={`/ratgeber/${page.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#6c35ed] sm:mt-7">
                          Guide lesen <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="bg-[#f1edfc] py-14 sm:py-20">
          <div className="mx-auto grid w-[min(100%-1.25rem,78rem)] gap-3 sm:w-[min(100%-2rem,78rem)] sm:gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 sm:p-6"><Layers3 className="size-5 text-[#6c35ed]" aria-hidden /><h2 className="mt-5 text-xl font-black">Cluster statt Einzeltexte</h2><p className="mt-2 text-sm leading-6 text-[#64687e]">Verwandte Guides sind untereinander verlinkt. So kannst du ein Thema vom Einstieg bis zur Entscheidung vertiefen.</p></div>
            <div className="rounded-2xl bg-white p-5 sm:p-6"><BookOpen className="size-5 text-[#6c35ed]" aria-hidden /><h2 className="mt-5 text-xl font-black">Redaktionell gepflegt</h2><p className="mt-2 text-sm leading-6 text-[#64687e]">Artikel tragen Veröffentlichungs- und Aktualisierungsdatum und werden überarbeitet, wenn sich Prozesse oder Plattformen ändern.</p></div>
            <div className="rounded-2xl bg-white p-5 sm:p-6"><Compass className="size-5 text-[#6c35ed]" aria-hidden /><h2 className="mt-5 text-xl font-black">Für echte Entscheidungen</h2><p className="mt-2 text-sm leading-6 text-[#64687e]">Jeder Guide enthält Kurzantwort, konkrete Schritte, Checklisten und passende nächste Inhalte statt Keyword-Fülltext.</p></div>
          </div>
        </section>

        <section className="bg-[#15162d] py-16 text-white sm:py-20 md:py-28">
          <div className="mx-auto grid w-[min(100%-1.25rem,78rem)] gap-8 sm:w-[min(100%-2rem,78rem)] md:grid-cols-[1.1fr_.9fr] md:items-end md:gap-10">
            <div>
              <p className="text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#d6fa43] sm:text-xs">Nicht nur lesen</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-.035em] sm:mt-4 sm:text-4xl md:text-6xl">Aus einzelnen Tipps wird erst mit einem System echte Entlastung.</h2>
            </div>
            <div>
              <p className="text-sm leading-6 text-[#c9cbda] sm:text-base sm:leading-relaxed">Wenn du Positionierung, Content, Distribution und Reporting nicht selbst zusammensetzen möchtest, kannst du dir ansehen, wie Prom4Fans diese Bausteine im Creator Management verbindet.</p>
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link href="/de/creator-management" className="rounded-full bg-[#d6fa43] px-5 py-3 text-center text-sm font-bold text-[#15162d]">Creator Management</Link>
                <Link href="/de/onlyfans-management" className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-bold text-white hover:bg-white/10">OnlyFans Management</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="de" />
    </>
  );
}
