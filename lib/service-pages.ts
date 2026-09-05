import type { Locale } from '@/lib/i18n';

export const serviceSlugs = ['creator-management', 'onlyfans-management'] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

type ServicePage = {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  introTitle: string;
  intro: string;
  benefitsTitle: string;
  benefits: Array<{ title: string; text: string }>;
  processTitle: string;
  process: Array<{ title: string; text: string }>;
  fitTitle: string;
  fit: string[];
  ctaTitle: string;
  ctaText: string;
};

export const servicePages: Record<Locale, Record<ServiceSlug, ServicePage>> = {
  de: {
    'creator-management': {
      slug: 'creator-management',
      eyebrow: 'Creator Management',
      title: 'Creator Management, das zu dir passt.',
      lead: 'Prom4Fans begleitet Creatorinnen mit Positionierung, Content-System, Distribution und Auswertung – persönlich, nachvollziehbar und ohne dir die Kontrolle über deinen Auftritt abzunehmen.',
      metaTitle: 'Creator Management für Frauen 35+',
      metaDescription: 'Creator Management für Frauen 35+: Positionierung, Content, Distribution, Reporting und persönliche Begleitung bei Prom4Fans.',
      introTitle: 'Mehr Struktur, ohne dass dein Auftritt künstlich wirkt.',
      intro: 'Gutes Creator Management beginnt nicht mit mehr Posts, sondern mit einer klaren Richtung. Gemeinsam definieren wir, wofür du stehen willst, welche Zielgruppe zu dir passt und welche Formate du langfristig durchhalten kannst. Danach entsteht ein System, das deinen Alltag entlastet und Entscheidungen messbarer macht.',
      benefitsTitle: 'Was wir konkret übernehmen',
      benefits: [
        { title: 'Positionierung', text: 'Zielgruppe, Profil, Tonalität und visuelle Linie werden so geschärft, dass dein Auftritt wiedererkennbar bleibt.' },
        { title: 'Content-System', text: 'Wir planen Themen, Formate und Veröffentlichungsrhythmus, damit Content nicht jeden Tag neu erfunden werden muss.' },
        { title: 'Distribution', text: 'Social-Kanäle und Subscription-Plattformen werden aufeinander abgestimmt, statt isoliert nebeneinander zu laufen.' },
        { title: 'Reporting', text: 'Du bekommst klare Kennzahlen und konkrete nächste Schritte statt unübersichtlicher Vanity Metrics.' },
      ],
      processTitle: 'So startet die Zusammenarbeit',
      process: [
        { title: '1. Kennenlernen', text: 'Wir besprechen deinen Status quo, deine Grenzen und deine Ziele.' },
        { title: '2. Fundament', text: 'Wir entwickeln Positionierung, Formate und einen realistischen Content-Rhythmus.' },
        { title: '3. Umsetzung', text: 'Wir begleiten Veröffentlichung, Distribution und laufende Optimierung.' },
        { title: '4. Weiterentwicklung', text: 'Wir werten Ergebnisse aus und passen das System an, wenn sich dein Alltag oder deine Ziele verändern.' },
      ],
      fitTitle: 'Für wen Prom4Fans gedacht ist',
      fit: [
        'Für Frauen ab 35, die sich professioneller positionieren möchten.',
        'Für Einsteigerinnen, die von Anfang an mit einem klaren System starten wollen.',
        'Für bestehende Creatorinnen, denen Struktur, Auswertung oder ein verlässlicher Ansprechpartner fehlt.',
        'Für Creatorinnen, die selbst entscheiden wollen, was sie veröffentlichen und wie sie auftreten.',
      ],
      ctaTitle: 'Passt das zu dir?',
      ctaText: 'Erzähl uns kurz, wo du gerade stehst. Im Erstgespräch klären wir, ob und in welchem Umfang eine Zusammenarbeit sinnvoll ist.',
    },
    'onlyfans-management': {
      slug: 'onlyfans-management',
      eyebrow: 'OnlyFans Management',
      title: 'OnlyFans Management ohne Kontrolle abzugeben.',
      lead: 'Wir verbinden Positionierung, Social Distribution, Content-Planung und Auswertung zu einem klaren System rund um deinen OnlyFans-Auftritt.',
      metaTitle: 'OnlyFans Management & Creator Betreuung',
      metaDescription: 'OnlyFans Management mit persönlicher Betreuung: Positionierung, Content-Planung, Distribution, Reporting und Privacy bei Prom4Fans.',
      introTitle: 'Nicht mehr posten. Besser zusammenspielen.',
      intro: 'OnlyFans funktioniert nicht isoliert. Profil, Social-Reichweite, Content-Rhythmus und Bindung müssen zusammenpassen. Deshalb betrachten wir nicht nur die Subscription-Seite, sondern den gesamten Weg von der ersten Aufmerksamkeit bis zur langfristigen Community. Entscheidungen werden gemeinsam getroffen; dein Account und deine inhaltlichen Grenzen bleiben bei dir.',
      benefitsTitle: 'Unser Fokus im OnlyFans Management',
      benefits: [
        { title: 'Profil & Positionierung', text: 'Bio, Content-Schwerpunkte und Ansprache werden auf eine klare Zielgruppe ausgerichtet.' },
        { title: 'Social Distribution', text: 'Wir planen, wie Reichweite auf passenden Social-Kanälen aufgebaut und sinnvoll weitergeleitet wird.' },
        { title: 'Content-Rhythmus', text: 'Ein realistischer Plan sorgt für Kontinuität, ohne deinen Alltag dauerhaft zu überladen.' },
        { title: 'Retention & Sicherheit', text: 'Wir betrachten Bindung, Zugänge, Rollen und Backups mit – nicht nur kurzfristige Reichweite.' },
      ],
      processTitle: 'Von der Analyse zum laufenden System',
      process: [
        { title: '1. Audit', text: 'Wir prüfen Profil, Social-Kanäle, Content und vorhandene Kennzahlen.' },
        { title: '2. Strategie', text: 'Wir priorisieren die Hebel, die zu deinem Profil und deinen verfügbaren Ressourcen passen.' },
        { title: '3. Umsetzung', text: 'Content, Distribution und Reporting laufen in einem festen Rhythmus.' },
        { title: '4. Optimierung', text: 'Wir testen, lernen aus echten Daten und verändern nur, was nachvollziehbar verbessert werden kann.' },
      ],
      fitTitle: 'Wann OnlyFans Management sinnvoll ist',
      fit: [
        'Wenn du starten willst, aber nicht planlos Reichweite und Content aufbauen möchtest.',
        'Wenn du bereits aktiv bist, aber dir ein konsistentes System fehlt.',
        'Wenn du nachvollziehen möchtest, welche Maßnahmen tatsächlich Wirkung zeigen.',
        'Wenn du persönliche Betreuung statt eines anonymen Ticket- oder Massenmodells suchst.',
      ],
      ctaTitle: 'Lass uns deinen Status quo ansehen.',
      ctaText: 'Im Erstgespräch schauen wir gemeinsam, was bereits funktioniert, was fehlt und ob Prom4Fans der richtige Partner für deinen nächsten Schritt ist.',
    },
  },
  en: {
    'creator-management': {
      slug: 'creator-management',
      eyebrow: 'Creator Management',
      title: 'Creator management built around you.',
      lead: 'Prom4Fans supports creators with positioning, content systems, distribution and reporting — personally, transparently and without taking control of your public identity away from you.',
      metaTitle: 'Creator Management for Women 35+',
      metaDescription: 'Creator management for women 35+: positioning, content, distribution, reporting and personal support from Prom4Fans.',
      introTitle: 'More structure without losing your own voice.',
      intro: 'Good creator management starts with direction, not with simply posting more. Together we define who you want to reach, what you want to be known for and which formats are realistic for you. From there we build a system that reduces daily guesswork and makes decisions easier to evaluate.',
      benefitsTitle: 'What we help you manage',
      benefits: [
        { title: 'Positioning', text: 'Audience, profile, tone and visual direction are sharpened so your presence stays recognisable.' },
        { title: 'Content system', text: 'We plan topics, formats and cadence so content does not have to be reinvented every day.' },
        { title: 'Distribution', text: 'Social channels and subscription platforms are coordinated instead of operating in isolation.' },
        { title: 'Reporting', text: 'You get clear metrics and concrete next steps rather than a wall of vanity metrics.' },
      ],
      processTitle: 'How the collaboration starts',
      process: [
        { title: '1. Get to know you', text: 'We discuss where you stand today, your boundaries and your goals.' },
        { title: '2. Build the foundation', text: 'We develop positioning, formats and a realistic publishing rhythm.' },
        { title: '3. Put it into practice', text: 'We support publishing, distribution and ongoing optimisation.' },
        { title: '4. Keep improving', text: 'We review results and adapt the system as your goals or schedule change.' },
      ],
      fitTitle: 'Who Prom4Fans is for',
      fit: [
        'Women 35+ who want a more professional and recognisable creator presence.',
        'New creators who want to start with a clear system from day one.',
        'Existing creators who are missing structure, reporting or a reliable point of contact.',
        'Creators who want to keep deciding what they publish and how they show up.',
      ],
      ctaTitle: 'Does that sound like you?',
      ctaText: 'Tell us briefly where you stand today. In the initial conversation we work out whether a collaboration makes sense and what scope would actually help.',
    },
    'onlyfans-management': {
      slug: 'onlyfans-management',
      eyebrow: 'OnlyFans Management',
      title: 'OnlyFans management without giving up control.',
      lead: 'We connect positioning, social distribution, content planning and reporting into one clear system around your OnlyFans presence.',
      metaTitle: 'OnlyFans Management & Creator Support',
      metaDescription: 'OnlyFans management with personal support: positioning, content planning, distribution, reporting and privacy with Prom4Fans.',
      introTitle: 'Not more posting. Better coordination.',
      intro: 'OnlyFans does not work in isolation. Profile, social reach, content cadence and retention need to fit together. That is why we look at the entire path from first attention to a lasting community. Decisions are made with you; your account and content boundaries remain yours.',
      benefitsTitle: 'What our OnlyFans management focuses on',
      benefits: [
        { title: 'Profile & positioning', text: 'Bio, content themes and messaging are aligned around a clear audience.' },
        { title: 'Social distribution', text: 'We plan how reach can be built on suitable social channels and directed sensibly.' },
        { title: 'Content cadence', text: 'A realistic plan creates consistency without overloading your everyday life.' },
        { title: 'Retention & security', text: 'We consider retention, access, roles and backups as well as short-term reach.' },
      ],
      processTitle: 'From audit to a working system',
      process: [
        { title: '1. Audit', text: 'We review your profile, social channels, content and available data.' },
        { title: '2. Strategy', text: 'We prioritise the levers that fit your profile and available resources.' },
        { title: '3. Execution', text: 'Content, distribution and reporting run on a clear rhythm.' },
        { title: '4. Optimisation', text: 'We test, learn from real data and change what can be improved for a reason.' },
      ],
      fitTitle: 'When OnlyFans management can make sense',
      fit: [
        'When you want to start without building reach and content blindly.',
        'When you are already active but lack a consistent system.',
        'When you want to understand which actions are actually producing results.',
        'When you prefer personal support over an anonymous high-volume model.',
      ],
      ctaTitle: 'Let’s look at where you stand today.',
      ctaText: 'In the initial conversation we review what already works, what is missing and whether Prom4Fans is the right partner for your next step.',
    },
  },
};
