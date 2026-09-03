import type { Locale } from '@/lib/i18n';

// Long-form legal copy lives here rather than in lib/i18n.ts to keep the UI
// copy file from being swamped by paragraphs of Impressum/Datenschutz text.
// Both pages share the same content structure: an optional lead paragraph,
// then sections with a heading and one or more body blocks (each block's
// '\n' becomes a <br/>, matching the address-style layout of the original).

export type LegalSection = { heading: string; body: string[] };
export type LegalPage = { title: string; lead?: string; sections: LegalSection[]; updated: string };

export const impressumCopy: Record<Locale, LegalPage> = {
  de: {
    title: 'Impressum',
    lead: 'Angaben gemäß § 5 TMG.',
    sections: [
      {
        heading: 'Betreiber',
        body: ['Julius Blumberg\nProm4Fans\nBrückenstr. 9\n24220 Flintbek\nDeutschland'],
      },
      {
        heading: 'Kontakt',
        body: ['Tel.: +49 177 3624269\nE-Mail: contact@prom4fans.com'],
      },
      {
        heading: '',
        body: ['Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.'],
      },
    ],
    updated: 'Stand: 02.09.2026',
  },
  en: {
    title: 'Imprint',
    lead: 'Information pursuant to § 5 of the German Telemedia Act (TMG).',
    sections: [
      {
        heading: 'Operator',
        body: ['Julius Blumberg\nProm4Fans\nBrückenstr. 9\n24220 Flintbek\nGermany'],
      },
      {
        heading: 'Contact',
        body: ['Phone: +49 177 3624269\nEmail: contact@prom4fans.com'],
      },
      {
        heading: '',
        body: ['We are neither obliged nor willing to participate in dispute-resolution proceedings before a consumer arbitration board.'],
      },
    ],
    updated: 'Last updated: 2 September 2026',
  },
};

export const datenschutzCopy: Record<Locale, LegalPage> = {
  de: {
    title: 'Datenschutz',
    lead: 'Wir behandeln deine Angaben vertraulich und verarbeiten sie nur, soweit es für die Kontaktaufnahme und die Anbahnung einer Zusammenarbeit erforderlich ist.',
    sections: [
      {
        heading: '1. Verantwortlicher',
        body: ['Julius Blumberg · Prom4Fans\nBrückenstr. 9 · 24220 Flintbek · Deutschland\nE-Mail: contact@prom4fans.com'],
      },
      {
        heading: '2. Allgemeines zur Datenverarbeitung',
        body: ['Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung der Website sowie unserer Leistungen erforderlich ist. Grundlage ist deine Einwilligung oder eine gesetzliche Erlaubnis nach Art. 6 DSGVO.'],
      },
      {
        heading: '3. Hosting',
        body: ['Diese Website wird bei IONOS gehostet. Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur. IONOS verarbeitet in unserem Auftrag Server-Logfiles auf Grundlage unseres berechtigten Interesses an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO besteht.'],
      },
      {
        heading: '4. Bewerbungsformular',
        body: ['Bei einer Bewerbung verarbeiten wir deine eingegebenen Daten, um sie zu prüfen und mit dir Kontakt aufzunehmen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. deine Einwilligung nach lit. a. Das Formular wird technisch über Formspree, Inc. (USA) abgewickelt und per E-Mail an contact@prom4fans.com weitergeleitet. Dabei kann eine Drittlandübermittlung stattfinden; Formspree verwendet hierfür geeignete Garantien wie EU-Standardvertragsklauseln. Die Daten werden spätestens nach sechs Monaten gelöscht, sofern keine gesetzlichen Pflichten oder eine Zusammenarbeit entgegenstehen.'],
      },
      {
        heading: '5. Cookies und Analyse',
        body: ['Wir setzen keine Analyse- oder Marketing-Tools ein. Eine lokale Speicherung kann ausschließlich dazu dienen, deine Datenschutz-Auswahl zu merken.'],
      },
      {
        heading: '6. Deine Rechte',
        body: ['Du hast insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Widerruf einer Einwilligung. Wende dich dafür an contact@prom4fans.com. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.'],
      },
      {
        heading: '7. Datensicherheit und Änderungen',
        body: ['Wir treffen angemessene technische und organisatorische Maßnahmen. Diese Erklärung kann angepasst werden, wenn sich rechtliche oder technische Rahmenbedingungen ändern.'],
      },
    ],
    updated: 'Stand: 02.09.2026',
  },
  en: {
    title: 'Privacy Policy',
    lead: 'We treat your details confidentially and only process them to the extent required to respond to you and explore working together.',
    sections: [
      {
        heading: '1. Controller',
        body: ['Julius Blumberg · Prom4Fans\nBrückenstr. 9 · 24220 Flintbek · Germany\nEmail: contact@prom4fans.com'],
      },
      {
        heading: '2. General information on data processing',
        body: ['We only process personal data to the extent necessary to provide this website and our services. The legal basis is your consent or a statutory permission under Art. 6 GDPR.'],
      },
      {
        heading: '3. Hosting',
        body: ['This website is hosted with IONOS. The provider is IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. On our behalf, IONOS processes server log files on the basis of our legitimate interest in secure and stable operation (Art. 6(1)(f) GDPR). A data-processing agreement pursuant to Art. 28 GDPR is in place.'],
      },
      {
        heading: '4. Application form',
        body: ['When you submit an application, we process the details you enter in order to review them and get in touch with you. The legal basis is Art. 6(1)(b) GDPR, or your consent under (a). The form is technically handled via Formspree, Inc. (USA) and forwarded by email to contact@prom4fans.com. This may involve a transfer to a third country; Formspree uses appropriate safeguards such as the EU Standard Contractual Clauses for this. Data is deleted after six months at the latest, unless legal obligations or an ongoing collaboration require otherwise.'],
      },
      {
        heading: '5. Cookies and analytics',
        body: ['We do not use analytics or marketing tools. Local storage, where used, serves only to remember your privacy/cookie choice.'],
      },
      {
        heading: '6. Your rights',
        body: ['You have the right to access, rectification, erasure, restriction, data portability, objection, and to withdraw consent at any time. Contact us at contact@prom4fans.com. You also have the right to lodge a complaint with a data protection supervisory authority.'],
      },
      {
        heading: '7. Data security and changes',
        body: ['We take appropriate technical and organisational measures. This policy may be updated when legal or technical requirements change.'],
      },
    ],
    updated: 'Last updated: 2 September 2026',
  },
};
