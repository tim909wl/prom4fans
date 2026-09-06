import type { SearchDemandGuidePage } from '@/lib/search-demand-guide-pages';

export const searchDemandGuides2: Record<string, SearchDemandGuidePage> = {
  'onlyfans-verifizierung': {
    slug: 'onlyfans-verifizierung', category: 'Einstieg', eyebrow: 'Verifizierung',
    title: 'OnlyFans Verifizierung: so bereitest du Identität, Unterlagen und Creator-Account sauber vor',
    metaTitle: 'OnlyFans Verifizierung: Creator Account richtig vorbereiten',
    metaDescription: 'OnlyFans Verifizierung vorbereiten: Identitätsdaten, Dokumente, Fotos, Kontodaten, typische Fehlerquellen und sicherer Umgang mit sensiblen Unterlagen.',
    lead: 'Verifizierungsfragen tauchen bei neuen Creatorn ständig auf. Viele Probleme entstehen nicht durch die Plattform selbst, sondern durch uneinheitliche Daten, schlechte Dokumentfotos oder hektische Wiederholungsversuche.',
    shortAnswer: 'Bereite gültige Identitätsunterlagen, konsistente persönliche Daten und gut lesbare Fotos vor. Verwende nur die offiziellen OnlyFans-Oberflächen beziehungsweise Support-Kanäle für sensible Dokumente. Wenn eine Prüfung abgelehnt wird, ändere nicht wahllos mehrere Dinge gleichzeitig, sondern lies den konkreten Hinweis, prüfe Lesbarkeit und Datenkonsistenz und reiche sauber erneut ein.',
    readingTime: '8 Min.', published: '2026-09-06', updated: '2026-09-06',
    sections: [
      { title: 'Daten müssen miteinander übereinstimmen', paragraphs: ['Name, Geburtsdatum und andere Stammdaten sollten in Account, Identitätsdokumenten und späteren Zahlungsdaten konsistent sein. Abweichungen durch Spitznamen, unterschiedliche Schreibweisen oder alte Dokumente können zusätzliche Prüfungen auslösen.', 'Trenne öffentliche Creator-Identität und behördliche Identität gedanklich sauber: Dein Künstlername kann Teil deiner Marke sein, die Plattform muss für Verifizierung und Auszahlung trotzdem deine reale Identität kennen.'] },
      { title: 'Dokumente lesbar und vollständig fotografieren', paragraphs: ['Unscharfe Bilder, Spiegelungen, abgeschnittene Ränder oder schlecht erkennbare Gesichter sind vermeidbare Fehlerquellen. Nutze gleichmäßiges Licht und prüfe das Foto vor dem Upload auf einem größeren Display.', 'Bearbeite Identitätsfotos nicht mit Filtern oder Retusche. Die Prüfung soll ein authentisches, lesbares Dokument und die dazugehörige Person erkennen können.'] },
      { title: 'Nutze nur offizielle Upload- und Support-Wege', paragraphs: ['Identitätsdokumente gehören zu den sensibelsten Daten deines Creator-Business. Lade sie nicht über Links hoch, die dir unbekannte Dritte per DM schicken, und gib sie niemals einer Agentur, nur weil diese behauptet, die Verifizierung für dich zu übernehmen.', 'Öffne Support-Anfragen direkt aus deinem Account beziehungsweise über offizielle OnlyFans-Kanäle und prüfe Absender sorgfältig.'] },
      { title: 'Bei Ablehnung systematisch vorgehen', paragraphs: ['Notiere die Rückmeldung und ändere genau den Punkt, der beanstandet wurde. Mehrere unkoordinierte Wiederholungen kosten Zeit und machen es schwer zu erkennen, was das Problem war.', 'Wenn du keinen konkreten Grund erkennst, sammle Screenshots der Fehlermeldung und kontaktiere den offiziellen Support mit einer kurzen, sachlichen Beschreibung.'] },
      { title: 'Nach der Verifizierung beginnt Account-Sicherheit', paragraphs: ['Aktiviere verfügbare Sicherheitsfunktionen, verwende ein einzigartiges Passwort und dokumentiere Wiederherstellungswege. Wer später Mitarbeitende oder eine Agentur einbindet, sollte Zugänge nicht unkontrolliert teilen.', 'Verifizierung ist nur der erste Sicherheitsbaustein. Rollen, Backups und ein Exit-Prozess werden wichtig, sobald weitere Personen am Account arbeiten.'], callout: 'Deine Identitätsunterlagen sind kein Arbeitsmaterial für Dritte. Behandle sie wie Bank- oder Steuerunterlagen.' },
    ],
    checklistTitle: 'Verifizierung vorbereiten', checklist: ['Gültiges Identitätsdokument vorhanden', 'Stammdaten auf Konsistenz geprüft', 'Dokumentfoto scharf und vollständig', 'Keine Filter oder Retusche verwendet', 'Nur offizielle Upload-Wege genutzt', 'Fehlermeldungen dokumentiert', 'Account-Sicherheit nach Freigabe eingerichtet'],
    related: ['onlyfans-starten', 'onlyfans-gewerbe-anmelden', 'creator-account-sicherheit', 'onlyfans-anonym-starten'],
    serviceLinks: [{ href: '/de/creator-management', label: 'Sicheres Creator Setup', text: 'Wir strukturieren Zugänge und operative Prozesse so, dass sensible Kontodaten und Account-Hoheit beim Creator bleiben.' }],
  },

  'onlyfans-auszahlung-probleme': {
    slug: 'onlyfans-auszahlung-probleme', category: 'Analyse', eyebrow: 'Auszahlungen',
    title: 'OnlyFans Auszahlung hängt oder wird abgelehnt? So grenzt du das Problem strukturiert ein',
    metaTitle: 'OnlyFans Auszahlung Problem: Creator Checkliste',
    metaDescription: 'OnlyFans Auszahlung hängt oder wurde abgelehnt? Kontodaten, Verifizierung, Status, Bankunterlagen, Support und Dokumentation strukturiert prüfen.',
    lead: 'Wenn eine Auszahlung nicht ankommt, entsteht schnell Stress. Ein strukturierter Check verhindert, dass du gleichzeitig Bankdaten, Account-Einstellungen und Support-Anfragen durcheinander veränderst.',
    shortAnswer: 'Prüfe zuerst den Status der Auszahlung im Account, anschließend Kontoinhaber, Bankdaten und Verifizierungsstatus. Dokumentiere Transaktions-ID, Datum und Betrag. Wenn zusätzliche Bankunterlagen verlangt werden, übermittle sie nur über verifizierte offizielle Support-Wege. Bei ungeklärten Fällen eröffnest du eine sachliche Support-Anfrage und änderst nicht parallel mehrere Zahlungsdaten.',
    readingTime: '8 Min.', published: '2026-09-06', updated: '2026-09-06',
    sections: [
      { title: 'Unterscheide pending, rejected und bereits gesendet', paragraphs: ['Nicht jede verspätete Auszahlung ist derselbe Fehler. Schau zuerst, welchen Status die Plattform anzeigt und ob eine konkrete Meldung vorhanden ist.', 'Notiere Status, Zeitstempel und Betrag. Diese Informationen brauchst du später auch für Support oder Bank.'] },
      { title: 'Kontodaten und Kontoinhaber prüfen', paragraphs: ['Bankverbindungen sollten korrekt und zum verifizierten Creator passen. Tippfehler oder nicht übereinstimmende Kontodaten können Prüfungen verursachen.', 'Ändere Daten nicht aus Nervosität mehrfach hintereinander. Prüfe sie einmal systematisch und dokumentiere, was aktuell hinterlegt ist.'] },
      { title: 'Compliance-Anfragen ernst nehmen, aber Absender prüfen', paragraphs: ['Bank- oder Plattformprüfungen können zusätzliche Unterlagen verlangen. Weil solche Situationen auch für Phishing attraktiv sind, solltest du niemals sensible Daten an ungeprüfte E-Mail-Adressen oder fremde Links senden.', 'Öffne deinen Account separat und prüfe, ob die Anfrage dort beziehungsweise über den offiziellen Support nachvollziehbar ist.'] },
      { title: 'Support mit einer vollständigen Mini-Akte anschreiben', paragraphs: ['Eine gute Anfrage enthält Account, Auszahlungsdatum, Betrag, Status, gegebenenfalls Transaktions-ID und eine kurze Beschreibung dessen, was du bereits geprüft hast.', 'So vermeidest du mehrere Runden mit Rückfragen und hast selbst einen nachvollziehbaren Verlauf.'] },
      { title: 'Auszahlungen gehören in dein Finanz-Reporting', paragraphs: ['Speichere monatlich Plattformreports und tatsächliche Bankeingänge. So erkennst du Differenzen früh und kannst sie deiner Buchhaltung beziehungsweise Steuerberatung erklären.', 'Gerade bei mehreren Plattformen hilft ein einfacher Abgleich aus erwarteter Auszahlung, Plattformstatus und Bankeingang.'], callout: 'Bei Zahlungsproblemen gilt: erst Status sichern, dann Daten prüfen, erst danach ändern oder eskalieren.' },
    ],
    checklistTitle: 'Auszahlungsproblem prüfen', checklist: ['Auszahlungsstatus dokumentiert', 'Betrag und Datum notiert', 'Kontodaten geprüft', 'Verifizierungsstatus geprüft', 'Anfragen nur über offizielle Kanäle beantwortet', 'Support-Ticket vollständig erstellt', 'Bankeingang später abgeglichen'],
    related: ['onlyfans-steuern-deutschland', 'creator-kennzahlen', 'creator-account-sicherheit', 'onlyfans-verifizierung'],
    serviceLinks: [{ href: '/de/creator-management', label: 'Operatives Reporting', text: 'Ein sauberer Monatsabschluss verbindet Plattformdaten, Auszahlungen und Performance in einem nachvollziehbaren Prozess.' }],
  },

  'onlyfans-erste-100-abonnenten': {
    slug: 'onlyfans-erste-100-abonnenten', category: 'Wachstum', eyebrow: 'Erste 100 Subs',
    title: 'Die ersten 100 OnlyFans Subscriber: ein sinnvoller Wachstumsplan ohne Follower-Fixierung',
    metaTitle: 'Erste 100 OnlyFans Subscriber: Wachstumsplan',
    metaDescription: 'Die ersten 100 OnlyFans Subscriber gewinnen: Positionierung, Content-Puffer, Discovery-Kanal, Profil-Conversion, Tracking und Wochenroutine.',
    lead: '„Wie bekomme ich meine ersten Subscriber?“ ist eine der häufigsten Anfängerfragen. Die Zahl 100 ist dabei weniger wichtig als das System, mit dem du herausfindest, wo qualifizierter Traffic entsteht und warum er konvertiert.',
    shortAnswer: 'Optimiere nicht auf 100 beliebige Subscriber, sondern auf einen wiederholbaren Funnel. Starte mit klarer Positionierung und einem gefüllten Profil, wähle einen Hauptkanal für Discovery, veröffentliche dort konsistent und tracke Profilbesuche und Conversions. Nach jeder Woche verbesserst du nur den schwächsten Schritt.',
    readingTime: '10 Min.', published: '2026-09-06', updated: '2026-09-06',
    sections: [
      { title: 'Vor Promotion muss das Zielprofil bereit sein', paragraphs: ['Wenn du Menschen auf ein fast leeres oder unklar positioniertes Profil schickst, verschwendest du die schwierig gewonnene Aufmerksamkeit. Sorge deshalb vor der ersten größeren Promotion für eine glaubwürdige Basis aus Bio, Profilbild, Content und einer klaren Erwartung.', 'Du brauchst keine riesige Bibliothek, aber genug Material, damit ein neuer Besucher erkennt, dass der Account aktiv und durchdacht ist.'] },
      { title: 'Ein Discovery-Kanal reicht zum Lernen', paragraphs: ['Viele Anfänger versuchen gleichzeitig Reddit, Instagram, TikTok und X. Dadurch entstehen vier halbfertige Strategien und kaum verwertbare Daten.', 'Wähle zunächst den Kanal, der zu deiner Zielgruppe und deinem Content-Stil passt. Arbeite dort mehrere Wochen konsistent, bevor du einen zweiten Kanal hinzunimmst.'] },
      { title: 'Baue drei Arten von Content', paragraphs: ['Discovery-Content soll neue Menschen erreichen, Trust-Content soll Persönlichkeit und Wiedererkennung aufbauen, Conversion-näherer Content macht den nächsten Schritt verständlich.', 'Wenn du nur Discovery produzierst, bekommst du vielleicht Views ohne Bindung. Wenn du nur verkaufst, fehlt neuen Menschen der Grund, dir überhaupt zu folgen.'], bullets: ['Discovery: Aufmerksamkeit verdienen', 'Trust: Persönlichkeit und Wiedererkennung', 'Conversion: klarer nächster Schritt'] },
      { title: 'Tracke jede Woche den schwächsten Schritt', paragraphs: ['Viele Views ohne Profilbesuche bedeuten etwas anderes als viele Profilbesuche ohne Subscription. Miss deshalb den Weg statt nur die Endzahl.', 'Ändere anschließend genau einen Bereich: Hook, Profil, CTA oder Angebot. So lernst du schneller, was wirklich wirkt.'] },
      { title: '100 Subscriber sind ein Lern-Meilenstein, kein Geschäftsmodell', paragraphs: ['Die ersten 100 geben dir erste echte Daten über Zielgruppe, Content und Conversion. Danach wird Retention wichtiger: Wer bleibt, wer kauft erneut und welche Quelle bringt die besten Fans?', 'Das Ziel sollte deshalb nicht lauten, möglichst schnell eine Zahl zu erreichen, sondern ein System zu finden, das auch nach 100 weiter funktioniert.'], callout: 'Die wertvollste Erkenntnis nach den ersten 100 Subs ist nicht die Zahl – sondern zu wissen, warum sie gekommen sind.' },
    ],
    checklistTitle: 'Plan für die ersten 100', checklist: ['Positionierung klar', 'Profil vor Promotion gefüllt', 'Ein Haupt-Discovery-Kanal gewählt', 'Drei Content-Funktionen geplant', 'Tracking Link eingerichtet', 'Wöchentliche Funnel-Kennzahlen erfasst', 'Nur einen Engpass gleichzeitig optimiert', 'Retention ab den ersten Subs mitgemessen'],
    related: ['onlyfans-starten', 'onlyfans-follower-gewinnen', 'onlyfans-marketing', 'onlyfans-tracking-links', 'onlyfans-subscriber-halten'],
    serviceLinks: [{ href: '/de/onlyfans-management', label: 'Wachstum als System', text: 'Wir bauen Discovery, Profil-Conversion, Content und Retention als einen messbaren Prozess auf.' }],
  },

  'onlyfans-wie-viel-content-vor-start': {
    slug: 'onlyfans-wie-viel-content-vor-start', category: 'Content', eyebrow: 'Content vor Launch',
    title: 'Wie viel Content vor dem OnlyFans Start? So baust du einen sinnvollen Launch-Puffer',
    metaTitle: 'Wie viel Content vor OnlyFans Start? Launch-Puffer planen',
    metaDescription: 'Wie viel Content vor dem OnlyFans Start vorbereiten? Profilfülle, Content-Puffer, Wochenrhythmus, Batching und Launch-Check für neue Creator.',
    lead: 'Neue Creator fragen häufig, wie viele Bilder oder Videos vor der ersten Promotion bereits online sein sollten. Eine magische Zahl gibt es nicht – aber ein Profil sollte aktiv wirken und du solltest genug Puffer haben, um nicht sofort unter Produktionsdruck zu geraten.',
    shortAnswer: 'Plane nicht auf eine starre Medienzahl, sondern auf zwei Ziele: Das Profil muss für neue Besucher glaubwürdig gefüllt sein und du solltest mehrere Wochen deines realistischen Posting-Rhythmus vorproduziert haben. Wenn du zum Beispiel drei feste Veröffentlichungen pro Woche planst, ist ein Puffer von zwei bis vier Wochen oft sinnvoller als hundert zufällige Uploads ohne Struktur.',
    readingTime: '8 Min.', published: '2026-09-06', updated: '2026-09-06',
    sections: [
      { title: 'Das Profil braucht genug Tiefe für eine Kaufentscheidung', paragraphs: ['Ein Besucher will erkennen können, welche Ästhetik, Themen und Formate ihn erwarten. Ein fast leeres Profil erzeugt Unsicherheit, selbst wenn einzelne Bilder sehr gut sind.', 'Stelle deshalb vor dem Launch mehrere unterschiedliche, aber zusammenpassende Posts bereit: verschiedene Formate, Perspektiven und mindestens ein klar erkennbares wiederkehrendes Thema.'] },
      { title: 'Der wichtigere Vorrat liegt im Produktionspuffer', paragraphs: ['Wenn du am Launch-Tag deinen gesamten Content veröffentlicht hast, beginnt sofort der tägliche Produktionsdruck. Ein separater Puffer gibt dir Zeit für Marketing, Community und Auswertung.', 'Plane lieber zwei bis vier Wochen nach deinem realen Rhythmus vor. Der Puffer sollte zu deinem Alltag passen und regelmäßig wieder aufgefüllt werden.'] },
      { title: 'Batching macht den Puffer günstiger', paragraphs: ['Produziere mehrere zusammenhängende Formate in einer Session: unterschiedliche Outfits, Sets, Hooks oder Varianten. Dadurch sinkt die Rüstzeit für Licht, Styling und Location.', 'Sortiere danach direkt in Ordner oder dein Content-Board, damit du später weißt, was veröffentlicht, reserviert oder für Promotion vorgesehen ist.'] },
      { title: 'Trenne Feed, Promo und spätere Angebote', paragraphs: ['Nicht jedes produzierte Medium sollte dieselbe Aufgabe haben. Lege bereits beim Sortieren fest, welche Inhalte öffentliches Marketing unterstützen, welche den Paid Feed füllen und welche als besondere Angebote reserviert bleiben.', 'Diese Trennung verhindert, dass du nach wenigen Wochen versehentlich dieselben Inhalte überall wiederholst.'] },
      { title: 'Launch erst, wenn der Rhythmus realistisch ist', paragraphs: ['Ein ambitionierter Plan von zwei Posts täglich ist wertlos, wenn du ihn nach zehn Tagen nicht mehr halten kannst. Simuliere deinen Wochenrhythmus vor dem Launch einmal komplett.', 'Wenn Produktion, Bearbeitung, Posting und Promotion zeitlich funktionieren, hast du ein deutlich stabileres Startsystem.'], callout: 'Ein guter Launch-Puffer kauft dir Zeit – und Zeit ist am Anfang wichtiger als eine beeindruckende Medienzahl.' },
    ],
    checklistTitle: 'Content vor dem Launch', checklist: ['Profil mit mehreren Formaten gefüllt', 'Content-Säulen sichtbar', 'Posting-Rhythmus realistisch festgelegt', 'Zwei bis vier Wochen Puffer geplant', 'Batching-Session organisiert', 'Promo- und Paid-Content getrennt', 'Content-Board oder Ordnerstruktur eingerichtet'],
    related: ['onlyfans-starten', 'content-batching', 'content-plan-erstellen', 'content-ideen-fuer-creator', 'onlyfans-erste-100-abonnenten'],
    serviceLinks: [{ href: '/de/onlyfans-management', label: 'Content-System aufbauen', text: 'Wir verbinden Produktion, Puffer, Redaktionsplan und Distribution zu einem belastbaren Wochenprozess.' }],
  },
};

export const searchDemandGuideList2 = Object.values(searchDemandGuides2);
