import Link from 'next/link';
import { ArrowRight, Check, Clock3 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getCopy } from '@/lib/i18n';
import { guides, type GuidePage } from '@/lib/guide-pages';

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

export function GuideShell({ page }: { page: GuidePage }) {
  const c = getCopy('de');
  const related = page.related.map((slug) => guides[slug]);

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
          <header className="border-b border-[#e8e5ef] bg-[#f7f5ff] py-16 md:py-24">
            <div className="mx-auto w-[min(100%-2rem,70rem)]">
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#6d7087]">
                <Link href="/de" className="hover:text-[#6c35ed]">Prom4Fans</Link>
                <span aria-hidden>/</span>
                <Link href="/ratgeber" className="hover:text-[#6c35ed]">Ratgeber</Link>
                <span aria-hidden>/</span>
                <span className="text-[#15162d]">{page.eyebrow}</span>
              </nav>

              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">{page.category} · {page.eyebrow}</p>
              <h1 className="mt-5 max-w-5xl text-[clamp(2.8rem,7vw,6.4rem)] font-black leading-[.94] tracking-[-.04em]">{page.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#565a72] md:text-xl">{page.lead}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#73768b]">
                <span>Von der Prom4Fans Redaktion</span>
                <span>Aktualisiert am {formatDate(page.updated)}</span>
                <span className="inline-flex items-center gap-1.5"><Clock3 className="size-4" aria-hidden />{page.readingTime} Lesezeit</span>
              </div>
            </div>
          </header>

          <div className="mx-auto grid w-[min(100%-2rem,70rem)] gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 lg:py-20">
            <div className="min-w-0">
              <section aria-labelledby="kurzantwort" className="rounded-3xl bg-[#15162d] p-7 text-white md:p-9">
                <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d6fa43]">Kurzantwort</p>
                <h2 id="kurzantwort" className="sr-only">Kurzantwort</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#ececf5]">{page.shortAnswer}</p>
              </section>

              <div className="mt-14 space-y-14">
                {page.sections.map((section) => {
                  const id = headingId(section.title);
                  return (
                    <section key={section.title} id={id} className="scroll-mt-28">
                      <h2 className="text-3xl font-black leading-tight tracking-[-.03em] md:text-4xl">{section.title}</h2>
                      <div className="mt-5 space-y-5 text-[1.05rem] leading-8 text-[#50556c]">
                        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                      {section.bullets && (
                        <ul className="mt-6 space-y-3 rounded-2xl border border-[#e3ddf7] bg-white p-6">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3 leading-relaxed text-[#44495f]">
                              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#d6fa43] text-[#15162d]"><Check className="size-3.5" aria-hidden /></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.callout && (
                        <p className="mt-6 border-l-4 border-[#6c35ed] bg-[#f7f5ff] px-5 py-4 font-semibold leading-relaxed text-[#35394f]">{section.callout}</p>
                      )}
                    </section>
                  );
                })}
              </div>

              <section className="mt-16 rounded-3xl border border-[#ded9eb] bg-white p-7 md:p-9">
                <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">Zum Abhaken</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-.03em]">{page.checklistTitle}</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {page.checklist.map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl bg-[#f7f5ff] p-4 text-sm font-semibold leading-relaxed text-[#3e4258]">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#6c35ed]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-16 border-t border-[#ded9eb] pt-12">
                <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#6c35ed]">Passend dazu</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-.03em]">Weiterlesen im Prom4Fans Ratgeber</h2>
                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {related.map((item) => (
                    <Link key={item.slug} href={`/ratgeber/${item.slug}`} className="group rounded-2xl border border-[#ded9eb] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#6c35ed]/40 hover:shadow-lg">
                      <span className="text-xs font-bold uppercase tracking-[.12em] text-[#6c35ed]">{item.category}</span>
                      <h3 className="mt-3 font-bold leading-snug text-[#15162d]">{item.title}</h3>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#575b73] group-hover:text-[#6c35ed]">Ratgeber öffnen <ArrowRight className="size-4" aria-hidden /></span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="mt-16 rounded-3xl bg-[#6c35ed] p-7 text-white md:p-9">
                <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d6fa43]">Vom Wissen zur Umsetzung</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-.03em] md:text-4xl">Du musst das System nicht allein bauen.</h2>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {page.serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15">
                      <h3 className="font-bold text-white">{link.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#ece7ff]">{link.text}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#d6fa43]">Mehr erfahren <ArrowRight className="size-4" aria-hidden /></span>
                    </Link>
                  ))}
                </div>
              </section>

              <p className="mt-8 text-sm leading-relaxed text-[#7a7d91]">
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
