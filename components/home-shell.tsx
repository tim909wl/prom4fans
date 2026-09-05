'use client';

import { useEffect } from 'react';
import { useLocalePreference } from '@/lib/use-locale-preference';
import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { StatementSection } from '@/components/statement-section';
import { ServicesSection } from '@/components/services-section';
import { OfferSection } from '@/components/offer-section';
import { PricingSection } from '@/components/pricing-section';
import { PhoneStage } from '@/components/phone-stage';
import { DashboardSection } from '@/components/dashboard-section';
import { ProcessSection } from '@/components/process-section';
import { ProofStrip } from '@/components/proof-strip';
import { AboutPanel } from '@/components/about-panel';
import { FaqSection } from '@/components/faq-section';
import { FinalCtaSection } from '@/components/final-cta-section';
import { SiteFooter } from '@/components/site-footer';
import { getCopy, type Locale } from '@/lib/i18n';

export function HomeShell({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useLocalePreference(initialLocale);
  const c = getCopy(locale);

  // Keep the visible URL and the <html lang> attribute in sync whenever the
  // locale changes — from a manual switch, a saved preference, or browser
  // detection on first load. Preserve search params and the current section
  // anchor so changing language never kicks the visitor back to the page top.
  useEffect(() => {
    document.documentElement.lang = locale;
    if (window.location.pathname !== `/${locale}`) {
      const { search, hash } = window.location;
      window.history.replaceState(null, '', `/${locale}${search}${hash}`);
    }
  }, [locale]);

  function handleLocaleChange(next: Locale) {
    if (next !== locale) setLocale(next);
  }

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-3"
        href="#content"
      >
        Skip to content
      </a>
      <SiteHeader
        locale={locale}
        nav={c.nav}
        cta={c.cta}
        navAriaLabel={c.navAriaLabel}
        menuOpenLabel={c.menuOpen}
        menuCloseLabel={c.menuClose}
        onLocaleChange={handleLocaleChange}
      />
      <main id="content">
        <HeroSection
          eyebrow={c.heroEyebrow}
          hero={c.hero}
          lead={c.lead}
          ctaLabel={c.heroButton}
        />
        <ProofStrip items={c.proof} />
        <StatementSection statement={c.statement} />
        <ServicesSection eyebrow={c.servicesEyebrow} title={c.servicesTitle} services={c.services} />
        <OfferSection eyebrow={c.offerEyebrow} title={c.offerTitle} items={c.offerItems} />
        <PricingSection locale={locale} />
        <PhoneStage
          eyebrow={c.phoneEyebrow}
          title={c.phoneTitle}
          lead={c.phoneLead}
          badge={c.phoneBadge}
          sticker={c.phoneSticker}
          locale={locale}
        />
        <DashboardSection
          eyebrow={c.dashboardEyebrow}
          title={c.dashboardTitle}
          lead={c.dashboardLead}
          stages={c.dashboardStages}
        />
        <ProcessSection eyebrow={c.processEyebrow} title={c.processTitle} process={c.process} />
        <AboutPanel
          eyebrow={c.aboutEyebrow}
          title={c.aboutTitle}
          lead={c.aboutLead}
          bullets={c.aboutBullets}
          ctaLabel={c.aboutCta}
          founderRole={c.founderRole}
          founderName={c.founderName}
          founderBio={c.founderBio}
          locale={locale}
        />
        <FaqSection eyebrow={c.faqEyebrow} title={c.faqTitle} items={c.faq} />
        <FinalCtaSection eyebrow={c.finalEyebrow} title={c.final} ctaLabel={c.cta} />
      </main>
      <SiteFooter locale={locale} onLocaleChange={handleLocaleChange} />
    </>
  );
}
