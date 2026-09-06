import Link from 'next/link';
import { ArrowRight, Check, ChevronDown, Clock3 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { GuideGraphic } from '@/components/guide-graphic';
import { getCopy } from '@/lib/i18n';
import { allGuides, type UnifiedGuidePage } from '@/lib/all-guides';

function headingId(title: string) {
  return title
    .toLowerCase()
    .replace(/[ä]/g, 'ae')
    .replace(/[ö]/g, 'oe')
    .replace(/[ü]/g, 'ue')
    .replace(/[ß]/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(`${value}T12:00:00Z`));
}

export function GuideShell({ page }: { page: UnifiedGuidePage }) {
  const c = getCopy('de');
  const related = page.related.map((slug) => allGuides[slug]).filter(Boolean);

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
        <article>
          <header className="border-b border-[#e8e5ef] bg-[#f7f5ff] py-10 sm:py-14 md:py-24">
            <div className="mx-auto w-[min(100%-1.25rem,70rem)] sm:w-[min(100%-2rem,70rem)]">
              <nav aria-label="Breadcrumb" className="-mx-1 mb-6 flex snap-x items-center gap-2 overflow-x-auto px-1 pb-1 text-xs font-semibold text-[#6d7087] [scrollbar-width:none] sm:mb-8 sm:text-sm [&::-webkit-scrollbar]:hidden">
                <Link href="/de" className="shrink-0 hover:text-[#6c35ed]">Prom4Fans</Link>
                <span aria-hidden className="shrink-0">/</span>
                <Link href="/ratgeber" className="shrink-0 hover:text-[#6c35ed]">Ratgeber</Link>
                <span aria-hidden className="shrink-0">/</span>
                <span className="shrink-0 text-[#15162d]">{page.eyebrow}</span>
              </nav>

              <p className="text-[.68rem] font-extrabold uppercase tracking-[.15em] text-[#6c35ed] sm:text-xs">{page.category} · {page.eyebrow}</p>
              <h1 className="mt-4 max-w-5xl text-[clamp(2.35rem,11vw,6.4rem)] font-black leading-[.94] tracking-[-.045em] sm:mt-5">{page.title}</h1>
              <p className="mt-5 max-w-3xl text-[1.03rem] leading-7 text-[#565a72] sm:mt-7 sm:text-lg sm:leading-relaxed md:text-xl">{page.lead}</p>

              <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-[#65697f] sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2 sm:text-sm">
                <span className="col-span-2 rounded-xl bg-white/70 px-3 py-2 sm:col-auto sm:bg-transparent sm:p-0">Von der Prom4Fans Redaktion</span>
                <span className="rounded-xl bg-white/70 px-3 py-2 sm:bg-transparent sm:p-0">Aktualisiert<br className="sm:hidden" /> {formatDate(page.updated)}</span>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-2 sm:bg-transparent sm:p-0"><Clock3 className="size-3.5 sm:size-4" aria-hidden />{page.readingTime} Lesezeit</span>
              </div>
            </div>
          </header>

          <div className="mx-auto grid w-[min(100%-1.25rem,70rem)] gap-10 py-8 sm:w-[min(100%-2rem,70rem)] sm:py-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 lg:py-20">
            <div className="min-w-0">
              <details className="group mb-5 rounded-2xl border border-[#ded9eb] bg-white lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-sm font-black text-[#2d3045] [&::-webkit-details-marker]:hidden">
                  <span>Auf dieser Seite</span>
                  <ChevronDown className="size-4 text-[#6c35ed] transition group-open:rotate-180" aria-hidden />
                </summary>
                <nav aria-label="Mobiles Inhaltsverzeichnis" className="border-t border-[#ece8f3] px-4 py-3">
                  <ol className="space-y-1.5">
                    {page.sections.map((section, index) => (
                      <li key={section.title}>
                        <a href={`#${headingId(section.title)}`} className="flex gap-3 rounded-xl px-2 py-2 text-sm font-semibold leading-snug text-[#62667b] hover:bg-[#f7f5ff] hover:text-[#6c35ed]">
                          <span className="w-5 shrink-0 text-xs font-black text-[#a093cf]">{String(index + 1).padStart(2, '0')}</span>
                          <span>{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </details>

              <section aria-labelledby="kurzantwort" className="rounded-[1.6rem] bg-[#15162d] p-5 text-white sm:rounded-3xl sm:p-7 md:p-9">
                <p className="text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#d6fa43] sm:text-xs">Kurzantwort</p>
                <h2 id="kurzantwort" className="sr-only">Kurzantwort</h2>
                <p className="mt-3 text-base leading-7 text-[#ececf5] sm:mt-4 sm:text-lg sm:leading-relaxed">{page.shortAnswer}</p>
              </section>

              <div className="mt-5 sm:mt-7">
                <GuideGraphic page={page} />
              </div>

              <div className="mt-10 space-y-11 sm:mt-14 sm:space-y-14">
                {page.sections.map((section, sectionIndex) => {
                  const id = headingId(section.title);
                  return (
                    <section key={section.title} id={id} className="scroll-mt-24 sm:scroll-mt-28">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-[#ece7fb] text-[.68rem] font-black text-[#6c35ed] sm:size-9 sm:text-xs">{String(sectionIndex + 1).padStart(2, '0')}</span>
                        <h2 className="text-[1.7rem] font-black leading-[1.05] tracking-[-.035em] sm:text-3xl md:text-4xl">{section.title}</h2>
                      </div>
                      <div className="mt-4 space-y-4 text-[1rem] leading-7 text-[#50556c] sm:mt-5 sm:space-y-5 sm:text-[1.05rem] sm:leading-8">
                        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                      {section.bullets && (
                        <ul className="mt-5 space-y-2.5 rounded-2xl border border-[#e3ddf7] bg-white p-4 sm:mt-6 sm:space-y-3 sm:p-6">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-6 text-[#44495f] sm:text-base sm:leading-relaxed">
                              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#d6fa43] text-[#15162d] sm:size-6"><Check className="size-3 sm:size-3.5" aria-hidden /></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.callout && (
                        <p className="mt-5 rounded-r-2xl border-l-4 border-[#6c35ed] bg-[#f1edfc] px-4 py-4 text-sm font-semibold leading-6 text-[#35394f] sm:mt-6 sm:px-5 sm:text-base sm:leading-relaxed">{section.callout}</p>
                      )}
                    </section>
                  );
                })}
              </div>

              <section className="mt-12 rounded-[1.6rem] border border-[#ded9eb] bg-white p-5 sm:mt-16 sm:rounded-3xl sm:p-7 md:p-9">
                <p className="text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#6c35ed] sm:text-xs">Zum Abhaken</p>
                <h2 className="mt-2 text-2xl font-black tracking-[-.03em] sm:mt-3 sm:text-3xl">{page.checklistTitle}</h2>
                <ul className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                  {page.checklist.map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl bg-[#f7f5ff] p-3.5 text-sm font-semibold leading-5 text-[#3e4258] sm:p-4 sm:leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#6c35ed]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-12 border-t border-[#ded9eb] pt-9 sm:mt-16 sm:pt-12">
                <p className="text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#6c35ed] sm:text-xs">Passend dazu</p>
                <h2 className="mt-2 text-2xl font-black tracking-[-.03em] sm:mt-3 sm:text-3xl">Weiterlesen im Prom4Fans Ratgeber</h2>
                <div className="-mx-2 mt-5 flex snap-x gap-3 overflow-x-auto px-2 pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-3 [&::-webkit-scrollbar]:hidden">
                  {related.map((item) => (
                    <Link key={item.slug} href={`/ratgeber/${item.slug}`} className="group min-w-[82%] snap-start rounded-2xl border border-[#ded9eb] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#6c35ed]/40 hover:shadow-lg sm:min-w-0">
                      <span className="text-[.68rem] font-bold uppercase tracking-[.12em] text-[#6c35ed] sm:text-xs">{item.category}</span>
                      <h3 className="mt-3 font-bold leading-snug text-[#15162d]">{item.title}</h3>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#575b73] group-hover:text-[#6c35ed]">Ratgeber öffnen <ArrowRight className="size-4" aria-hidden /></span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="mt-12 rounded-[1.6rem] bg-[#6c35ed] p-5 text-white sm:mt-16 sm:rounded-3xl sm:p-7 md:p-9">
                <p className="text-[.68rem] font-extrabold uppercase tracking-[.16em] text-[#d6fa43] sm:text-xs">Vom Wissen zur Umsetzung</p>
                <h2 className="mt-2 max-w-2xl text-2xl font-black tracking-[-.03em] sm:mt-3 sm:text-3xl md:text-4xl">Du musst das System nicht allein bauen.</h2>
                <div className="mt-5 grid gap-3 sm:mt-7 md:grid-cols-2 md:gap-4">
                  {page.serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-2xl bg-white/10 p-4 transition hover:bg-white/15 sm:p-5">
                      <h3 className="font-bold text-white">{link.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#ece7ff]">{link.text}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#d6fa43]">Mehr erfahren <ArrowRight className="size-4" aria-hidden /></span>
                    </Link>
                  ))}
                </div>
              </section>

              <p className="mt-6 text-xs leading-5 text-[#7a7d91] sm:mt-8 sm:text-sm sm:leading-relaxed">
                Hinweis: Plattformfunktionen und Richtlinien können sich ändern. Prüfe sicherheits-, vertrags- oder plattformspezifische Details vor einer wichtigen Entscheidung zusätzlich in den jeweils aktuellen offiziellen Informationen. Prom4Fans gibt keine Einkommensgarantien.
              </p>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-[#ded9eb] bg-white p-5">
                <p className="text-xs font-extrabold uppercase tracking-[.14em] text-[#6c35ed]">Auf dieser Seite</p>
                <nav aria-label="Inhaltsverzeichnis" className="mt-4">
                  <ul className="space-y-3 text-sm font-semibold leading-snug text-[#64677d]">
                    {page.sections.map((section) => (
                      <li key={section.title}>
                        <a href={`#${headingId(section.title)}`} className="hover:text-[#6c35ed]">{section.title}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Link href="/ratgeber" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#15162d] hover:text-[#6c35ed]">Alle Ratgeber <ArrowRight className="size-4" aria-hidden /></Link>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <SiteFooter locale="de" />
    </>
  );
}
