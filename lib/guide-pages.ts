export const guideSlugs = [
  'onlyfans-starten',
  'onlyfans-profil-optimieren',
  'content-plan-erstellen',
  'content-batching',
  'creator-positionierung',
  'social-media-funnel',
  'creator-management-agentur',
  'creator-account-sicherheit',
  'creator-kennzahlen',
  'onlyfans-anonym-starten',
  'creator-35-plus',
] as const;

export type GuideSlug = (typeof guideSlugs)[number];

export type GuideSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type GuidePage = {
  slug: GuideSlug;
  category: 'Einstieg' | 'Content' | 'Wachstum' | 'Management' | 'Sicherheit' | 'Analyse';
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  shortAnswer: string;
  readingTime: string;
  published: string;
  updated: string;
  sections: GuideSection[];
  checklistTitle: string;
  checklist: string[];
  related: GuideSlug[];
  serviceLinks: Array<{ href: string; label: string; text: string }>;
};

export const guides: Record<GuideSlug, GuidePage> = {
  'onlyfans-starten': {
    slug: 'onlyfans-starten',
    category: 'Einstieg',
    eyebrow: 'OnlyFans starten',
    title: 'OnlyFans starten: ein realistischer Plan für die ersten 30 Tage',
    metaTitle: 'OnlyFans starten: Schritt-für-Schritt-Plan für Creator',
    metaDescription: 'OnlyFans starten ohne Chaos: Positionierung, Profil, Content-System, Reichweite, Sicherheit und ein realistischer 30-Tage-Plan.',
    lead: 'Ein guter Start besteht nicht aus möglichst vielen Posts. Er besteht aus klaren Grenzen, einem verständlichen Profil, einem tragfähigen Content-Rhythmus und einem Plan dafür, wie Menschen dich überhaupt finden.',
    shortAnswer: 'Starte erst mit Positionierung, Grenzen und einem Content-Vorrat. Richte danach Profil und Sicherheit ein, plane zwei bis drei wiederholbare Formate und baue anschließend die Reichweite außerhalb der Subscription-Plattform auf. Der wichtigste Unterschied zwischen einem hektischen und einem stabilen Start ist ein System, das du auch nach vier Wochen noch durchhalten kannst.',
    readingTime: '9 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: '1. Entscheide zuerst, wie du auftreten willst',
        paragraphs: [
          'Bevor du Namen, Bio oder Preise festlegst, solltest du drei Dinge schriftlich beantworten: Für wen machst du Content, wofür soll dein Profil stehen und welche persönlichen Grenzen sind nicht verhandelbar? Diese Entscheidungen beeinflussen fast alles Weitere – von der Bildsprache bis zur Wahl der Social-Kanäle.',
          'Versuche nicht, am ersten Tag jede mögliche Zielgruppe anzusprechen. Ein Profil wird leichter verstanden, wenn eine neue Person innerhalb weniger Sekunden erkennt, welche Stimmung, Themen und Art von Nähe sie erwarten kann. Positionierung bedeutet dabei nicht, eine Kunstfigur zu spielen. Sie bedeutet, die stärksten Teile deiner echten Persönlichkeit bewusst sichtbar zu machen.',
        ],
        bullets: [
          'Zielgruppe in einem Satz beschreiben',
          'Drei wiederkehrende Themen oder Motive festlegen',
          'Klare persönliche und inhaltliche Grenzen notieren',
          'Entscheiden, ob Gesicht, echter Name oder persönliche Umgebung sichtbar sein sollen',
        ],
      },
      {
        title: '2. Baue vor dem Launch einen kleinen Content-Vorrat auf',
        paragraphs: [
          'Ein häufiger Fehler ist, das Profil sofort zu veröffentlichen und erst danach über den nächsten Post nachzudenken. Sinnvoller ist ein kleiner Puffer. Er nimmt Druck aus den ersten Wochen und gibt dir Zeit, zu beobachten, welche Formate sich gut anfühlen und welche Reaktionen sie auslösen.',
          'Der Vorrat muss nicht riesig sein. Wichtiger ist, dass er mehrere Formate enthält: zum Beispiel ein wiederkehrendes Hauptformat, kurze spontane Inhalte und Material, das sich für Social Media anders zuschneiden lässt. So entsteht aus einer Produktion mehr als nur ein einzelner Upload.',
        ],
        callout: 'Praxisregel: Plane lieber zwei Formate, die du drei Monate zuverlässig umsetzen kannst, als sieben Formate, die nach zehn Tagen zusammenbrechen.',
      },
      {
        title: '3. Richte Profil und Sicherheit wie ein Arbeitskonto ein',
        paragraphs: [
          'Profiltext, Profilbild und Startseite sollten dieselbe Erwartung setzen. Vermeide austauschbare Aussagen und beschreibe konkret, welche Art von Content und Kommunikation zu dir gehört. Gleichzeitig solltest du das Konto technisch so behandeln, als wäre es ein geschäftlicher Zugang.',
          'Nutze ein einzigartiges Passwort, aktiviere Zwei-Faktor-Authentifizierung und trenne nach Möglichkeit geschäftliche Kontaktwege von privaten Accounts. Speichere Wiederherstellungscodes sicher und dokumentiere, welche Geräte und Personen Zugriff haben. Diese Grundlagen sind später wesentlich schwerer sauber nachzuholen.',
        ],
      },
      {
        title: '4. Plane Reichweite außerhalb der Plattform',
        paragraphs: [
          'Subscription-Plattformen ersetzen keine Reichweitenstrategie. Menschen müssen dich zuerst entdecken, wiedererkennen und Vertrauen aufbauen. Deshalb braucht der Start mindestens einen öffentlichen Kanal, auf dem du regelmäßig sichtbar sein kannst.',
          'Der öffentliche Content sollte nicht bloß Werbung für einen Link sein. Er braucht einen eigenen Nutzen oder Unterhaltungswert. Gute Distribution arbeitet mit drei Ebenen: Inhalte, die neue Menschen erreichen; Inhalte, die Persönlichkeit und Wiedererkennung schaffen; und klare, aber nicht permanente Hinweise darauf, wo Interessierte mehr von dir finden.',
        ],
        bullets: [
          'Ein Hauptkanal statt fünf halb gepflegte Accounts',
          'Wiederkehrende Hook- und Formatideen dokumentieren',
          'Profil-Link und Bio regelmäßig auf Verständlichkeit prüfen',
          'Nicht jeden öffentlichen Post in eine Verkaufsbotschaft verwandeln',
        ],
      },
      {
        title: '5. Werte nach 30 Tagen Muster aus, nicht einzelne Ausreißer',
        paragraphs: [
          'In den ersten Wochen sind einzelne starke oder schwache Posts noch kein belastbarer Trend. Suche stattdessen nach Mustern: Welche Themen werden häufiger gespeichert oder beantwortet? Welche Einstiege bringen Profilbesuche? Welche Inhalte führen zu Gesprächen oder wiederkehrenden Fans?',
          'Lege einen festen Review-Termin fest. Eine kurze wöchentliche Auswertung reicht für den Anfang: Was wurde veröffentlicht, welche Kennzahlen haben sich verändert, was hat auffällig gut funktioniert und was wird in der kommenden Woche bewusst anders gemacht? Dadurch wird aus Aktivität ein Lernprozess.',
        ],
      },
    ],
    checklistTitle: '30-Tage-Startcheck',
    checklist: [
      'Positionierung und Zielgruppe in einem Satz formuliert',
      'Persönliche Grenzen schriftlich festgelegt',
      'Mindestens zwei wiederholbare Content-Formate definiert',
      'Content-Puffer für die ersten Veröffentlichungen vorbereitet',
      'Zwei-Faktor-Authentifizierung und Recovery-Codes eingerichtet',
      'Mindestens einen öffentlichen Reichweitenkanal ausgewählt',
      'Wöchentlichen Review-Termin im Kalender festgelegt',
    ],
    related: ['creator-positionierung', 'content-plan-erstellen', 'creator-account-sicherheit'],
    serviceLinks: [
      { href: '/de/onlyfans-management', label: 'OnlyFans Management', text: 'Wenn du Strategie, Distribution und Auswertung nicht allein aufbauen möchtest, findest du hier unseren Ansatz für OnlyFans Management.' },
      { href: '/kontakt', label: 'Erstgespräch anfragen', text: 'Du willst deinen Start einmal strukturiert durchgehen? Im Erstgespräch prüfen wir deinen Status quo und die nächsten sinnvollen Schritte.' },
    ],
  },

  'onlyfans-profil-optimieren': {
    slug: 'onlyfans-profil-optimieren',
    category: 'Einstieg',
    eyebrow: 'Profil optimieren',
    title: 'OnlyFans Profil optimieren: damit neue Besucher sofort verstehen, warum sie bleiben sollen',
    metaTitle: 'OnlyFans Profil optimieren: Bio, Positionierung & Conversion',
    metaDescription: 'OnlyFans Profil optimieren: klare Bio, Positionierung, Profilbild, Content-Erwartung und ein sinnvoller Weg vom Profilbesuch zur Subscription.',
    lead: 'Ein Profil muss nicht möglichst laut sein. Es muss in wenigen Sekunden die richtige Erwartung setzen: Wer bist du, was macht deinen Content besonders und was bekommt eine Person, wenn sie dir folgt?',
    shortAnswer: 'Optimiere dein Profil in der Reihenfolge Positionierung, visuelle Wiedererkennung, Bio, Content-Vorschau und klare nächste Handlung. Entferne alles, was zwar Platz verbraucht, aber keine Entscheidung erleichtert. Gute Profile wirken konsistent zwischen Social Media und Subscription-Plattform.',
    readingTime: '8 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Ein Profil ist eine Entscheidungshilfe, keine Visitenkarte',
        paragraphs: [
          'Menschen kommen selten ohne Kontext auf dein Profil. Meist haben sie bereits einen Post, ein Reel oder eine Empfehlung gesehen. Deine Profilseite muss diesen ersten Eindruck bestätigen und konkretisieren. Wenn Social Content verspielt und persönlich wirkt, das Profil aber generisch und distanziert formuliert ist, entsteht Reibung.',
          'Die zentrale Frage lautet deshalb nicht „Was kann ich alles über mich erzählen?“, sondern „Welche Information braucht ein neuer Besucher jetzt, um zu verstehen, ob das hier zu ihm passt?“ Alles andere ist zweitrangig.',
        ],
      },
      {
        title: 'Bio: konkret statt austauschbar',
        paragraphs: [
          'Eine gute Bio nennt nicht nur Eigenschaften wie „authentisch“, „exklusiv“ oder „persönlich“. Solche Wörter können fast alle Profile benutzen. Beschreibe stattdessen Stil, Themen und Rhythmus. Das kann ein bestimmter Humor, ein wiederkehrendes Format, eine besondere Perspektive oder eine klar erkennbare Zielgruppe sein.',
          'Schreibe die Bio so, dass sie laut vorgelesen noch natürlich klingt. Wenn ein Satz nur deshalb existiert, weil er wie Werbung klingt, sollte er meistens weg. Vertrauen entsteht eher aus Klarheit als aus Übertreibung.',
        ],
        bullets: [
          'Was ist der Kern deines Contents?',
          'Welche Stimmung oder Perspektive unterscheidet dich?',
          'Wie regelmäßig können neue Inhalte realistisch erscheinen?',
          'Welche Erwartungen solltest du bewusst nicht wecken?',
        ],
      },
      {
        title: 'Visuelle Linie: Wiedererkennung vor Perfektion',
        paragraphs: [
          'Profilbild, Banner, Vorschaubilder und Social-Auftritt sollten nicht wie vier verschiedene Marken wirken. Du brauchst dafür kein aufwendiges Corporate Design. Wiedererkennbare Farben, ähnliche Lichtstimmung und ein konsistenter Bildausschnitt reichen oft aus.',
          'Wichtig ist, dass die visuelle Linie zu dir passt und reproduzierbar ist. Ein perfektes Shooting, das sich nie wiederholen lässt, hilft weniger als ein einfaches Setup, das du zuverlässig erneut aufbauen kannst.',
        ],
      },
      {
        title: 'Der Weg vom Social-Profil muss logisch sein',
        paragraphs: [
          'Vergleiche die letzten zehn öffentlichen Posts mit deiner Subscription-Seite. Versprechen beide denselben Kern? Wenn eine Person wegen eines bestimmten Themas oder Stils auf dich aufmerksam wird, sollte sie diesen roten Faden auf dem nächsten Schritt wiederfinden.',
          'Statt überall denselben Teaser zu posten, kannst du öffentliche Inhalte als Einstieg nutzen: ein Thema anreißen, Persönlichkeit zeigen und dann an passender Stelle den nächsten Schritt anbieten. Das wirkt weniger wie Dauerwerbung und macht den Übergang nachvollziehbarer.',
        ],
      },
      {
        title: 'Optimieren heißt messen und vereinfachen',
        paragraphs: [
          'Ändere nicht gleichzeitig Bio, Bildsprache, Posting-Frequenz und Social-Kanal. Sonst weißt du später nicht, welcher Eingriff etwas verändert hat. Arbeite in kleinen Iterationen und dokumentiere Datum, Änderung und die Kennzahlen, die du beobachten möchtest.',
          'Wenn viele Menschen dein Profil besuchen, aber wenige den nächsten Schritt gehen, liegt die Ursache häufig nicht bei „zu wenig Reichweite“. Prüfe zuerst Erwartung, Verständlichkeit, Preislogik und Konsistenz. Mehr Traffic auf ein unklar verständliches Profil verstärkt nur das Problem.',
        ],
      },
    ],
    checklistTitle: 'Profil-Audit in zehn Minuten',
    checklist: [
      'Profil erklärt in einem Satz, wofür der Account steht',
      'Bio enthält konkrete statt austauschbarer Aussagen',
      'Profilbild und Social-Auftritt sind eindeutig wiedererkennbar',
      'Content-Vorschau passt zur Erwartung aus Social Media',
      'Nächster Schritt ist verständlich und nicht von mehreren konkurrierenden CTAs überlagert',
      'Änderungen werden einzeln dokumentiert und ausgewertet',
    ],
    related: ['creator-positionierung', 'social-media-funnel', 'creator-kennzahlen'],
    serviceLinks: [
      { href: '/de/onlyfans-management', label: 'OnlyFans Management ansehen', text: 'Profiloptimierung ist nur ein Teil des Systems. Hier siehst du, wie wir Positionierung, Content, Distribution und Reporting verbinden.' },
    ],
  },

  'content-plan-erstellen': {
    slug: 'content-plan-erstellen',
    category: 'Content',
    eyebrow: 'Content-Plan',
    title: 'Content-Plan für Creator erstellen: ein System, das nicht nach zwei Wochen scheitert',
    metaTitle: 'Content-Plan für Creator erstellen: System statt Content-Stress',
    metaDescription: 'Einen realistischen Content-Plan für Creator erstellen: Themen-Säulen, Formate, Wochenrhythmus, Wiederverwertung und Review-System.',
    lead: 'Ein Content-Plan ist dann gut, wenn er Entscheidungen reduziert. Du solltest an einem normalen Dienstag nicht überlegen müssen, was du überhaupt posten könntest.',
    shortAnswer: 'Baue deinen Plan aus drei Ebenen: wenigen Themen-Säulen, wiederholbaren Formaten und einem festen Produktionsrhythmus. Plane zuerst Kapazität, dann Frequenz. Trenne Produktion und Veröffentlichung und reserviere jede Woche einen kurzen Review-Termin.',
    readingTime: '9 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Beginne mit Kapazität, nicht mit Wunschfrequenz',
        paragraphs: [
          'Viele Redaktionspläne werden rückwärts gebaut: Erst wird eine hohe Posting-Frequenz festgelegt, danach versucht man irgendwie, den Alltag dazu passend zu machen. Stabiler ist die umgekehrte Reihenfolge. Wie viele Stunden pro Woche kannst du zuverlässig für Ideen, Produktion, Bearbeitung und Veröffentlichung reservieren?',
          'Plane mit einer normalen Woche, nicht mit deiner motiviertesten Woche des Jahres. Ein System, das in stressigen Phasen noch funktioniert, ist langfristig wertvoller als ein aggressiver Plan, der regelmäßig unterbrochen wird.',
        ],
      },
      {
        title: 'Definiere drei bis fünf Themen-Säulen',
        paragraphs: [
          'Themen-Säulen sind wiederkehrende Bereiche, in denen du dich bewegst. Sie verhindern, dass jeder Post bei null startet, ohne deinen Content monoton zu machen. Eine Säule kann Persönlichkeit zeigen, eine andere Expertise oder Alltag, eine dritte Community-Nähe.',
          'Eine gute Säule ist breit genug für viele Ideen und eng genug, um zu deiner Positionierung zu passen. Wenn du nach zehn Ideen schon nichts mehr findest, ist sie zu eng. Wenn praktisch jeder beliebige Post hineinpasst, ist sie zu breit.',
        ],
      },
      {
        title: 'Formate machen aus Themen einen wiederholbaren Prozess',
        paragraphs: [
          'Ein Thema sagt dir, worüber du sprichst. Ein Format sagt dir, wie. Beispiele sind Vorher-Nachher, kurze Antworten auf Community-Fragen, ein wiederkehrender Wochenrückblick, Behind-the-Scenes oder eine feste Serie mit demselben visuellen Aufbau.',
          'Wiederholbare Formate sind kein Zeichen von Ideenarmut. Sie schaffen Wiedererkennung und reduzieren Produktionsaufwand. Das Publikum lernt, was es erwarten kann, und du musst nicht jede Woche eine komplett neue Content-Mechanik erfinden.',
        ],
        callout: 'Ein Format ist stark, wenn du in fünf Minuten drei neue Folgen dafür notieren kannst.',
      },
      {
        title: 'Plane in Produktionsblöcken',
        paragraphs: [
          'Ideenfindung, Produktion, Auswahl, Bearbeitung und Posting erfordern unterschiedliche Arten von Aufmerksamkeit. Wenn du jeden einzelnen Inhalt von Anfang bis Ende fertigstellst, wechselst du ständig zwischen diesen Modi. Batching bündelt ähnliche Aufgaben und reduziert diese Wechsel.',
          'Ein einfacher Wochenrhythmus kann beispielsweise aus einem Ideenblock, einem Produktionsblock und einem kurzen Veröffentlichungs- und Review-Block bestehen. Die genaue Verteilung ist weniger wichtig als die Wiederholbarkeit.',
        ],
      },
      {
        title: 'Lass im Plan bewusst Platz für spontane Inhalte',
        paragraphs: [
          'Ein vollständig durchgetakteter Kalender kann genauso unpraktisch sein wie gar kein Plan. Plane einen Grundstock fest und halte bewusst Kapazität für spontane Momente, Trends oder Community-Reaktionen frei. So bleibt der Auftritt lebendig, ohne dass spontane Inhalte die gesamte Struktur ersetzen.',
          'Nach vier Wochen solltest du nicht nur Reichweite betrachten. Prüfe auch Produktionszeit und Energieaufwand. Ein Format, das mittelmäßig performt, aber in zehn Minuten produziert ist, kann wirtschaftlich sinnvoller sein als ein minimal stärkeres Format, das jedes Mal zwei Stunden benötigt.',
        ],
      },
    ],
    checklistTitle: 'Minimaler Wochenplan',
    checklist: [
      'Drei bis fünf Themen-Säulen festgelegt',
      'Zwei bis vier wiederholbare Formate definiert',
      'Realistische Wochenkapazität in Stunden festgelegt',
      'Produktion und Veröffentlichung zeitlich getrennt',
      'Mindestens ein Content-Puffer vorhanden',
      'Platz für spontane Inhalte eingeplant',
      'Wöchentlicher Review von Wirkung und Aufwand',
    ],
    related: ['content-batching', 'creator-positionierung', 'creator-kennzahlen'],
    serviceLinks: [
      { href: '/de/creator-management', label: 'Creator Management', text: 'Wenn aus einzelnen Content-Ideen ein vollständiges System werden soll, findest du hier unseren Management-Ansatz.' },
    ],
  },

  'content-batching': {
    slug: 'content-batching',
    category: 'Content',
    eyebrow: 'Content Batching',
    title: 'Content Batching für Creator: mehr Output mit weniger täglichem Entscheidungsstress',
    metaTitle: 'Content Batching für Creator: effizienter Content produzieren',
    metaDescription: 'Content Batching erklärt: Ideen, Produktion, Bearbeitung und Distribution in Blöcken organisieren und einen stabilen Content-Puffer aufbauen.',
    lead: 'Batching bedeutet nicht, einen Monat Content an einem Tag zu erzwingen. Es bedeutet, ähnliche Aufgaben zusammenzulegen, damit du seltener zwischen Kamera, Bearbeitung, Text und Planung wechseln musst.',
    shortAnswer: 'Trenne deinen Workflow in Ideen, Vorbereitung, Produktion, Auswahl, Bearbeitung und Distribution. Bündele je nach Energie zwei oder drei dieser Schritte in feste Blöcke. Ziel ist nicht maximaler Output, sondern ein kleiner, verlässlicher Puffer.',
    readingTime: '7 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Warum tägliche Einzelproduktion unnötig Energie kostet',
        paragraphs: [
          'Wenn jeder Post einzeln entsteht, wiederholst du viele kleine Startkosten: Setup aufbauen, Licht prüfen, Outfit auswählen, Dateiablage öffnen, Caption schreiben und Material wieder verstauen. Diese Schritte sind für einen einzelnen Inhalt kaum sichtbar, summieren sich aber über die Woche.',
          'Batching nutzt denselben Aufbau für mehrere Inhalte. Das spart nicht nur Zeit, sondern erleichtert auch visuelle Konsistenz. Wichtig ist, nicht alles gleich aussehen zu lassen: Wechsel innerhalb eines Setups Perspektiven, Motive und Formate.',
        ],
      },
      {
        title: 'Ein sechsphasiger Workflow',
        paragraphs: [
          'Ein robuster Ablauf besteht aus sechs klaren Phasen. Erst Ideen sammeln, dann auswählen und vorbereiten. Danach produzieren, Material sichten, bearbeiten und schließlich für die jeweiligen Kanäle zuschneiden. Jede Phase kann einen eigenen Termin bekommen.',
        ],
        bullets: [
          'Ideen: ungefiltert sammeln',
          'Planung: wenige umsetzbare Ideen auswählen',
          'Vorbereitung: Set, Outfit, Requisiten, Shotlist',
          'Produktion: mehrere Inhalte in einem Setup',
          'Postproduktion: Auswahl, Schnitt, Textvarianten',
          'Distribution: Veröffentlichung, Wiederverwertung, Archivierung',
        ],
      },
      {
        title: 'Baue einen kleinen Puffer statt eines riesigen Archivs',
        paragraphs: [
          'Ein Puffer von einigen geplanten Inhalten kann bereits reichen, um Krankheit, Termine oder stressige Tage abzufangen. Ein gigantisches Archiv dagegen kann dazu führen, dass Material veraltet oder nicht mehr zu deiner aktuellen Positionierung passt.',
          'Kennzeichne fertiges Material nach Status: produziert, bearbeitet, freigegeben, veröffentlicht und wiederverwertbar. Schon eine einfache Tabelle verhindert, dass guter Content im Kameraordner verschwindet oder doppelt verwendet wird, ohne dass es beabsichtigt war.',
        ],
      },
      {
        title: 'Batching darf Persönlichkeit nicht wegoptimieren',
        paragraphs: [
          'Geplante Inhalte und spontane Inhalte erfüllen unterschiedliche Aufgaben. Der Batch gibt dir Stabilität; spontane Posts geben Aktualität und Nähe. Plane deshalb nicht hundert Prozent deiner Kapazität vor. Ein sinnvoller Anteil bleibt frei für Reaktionen, Alltag und Community-Momente.',
          'Wenn sich dein Content nach einigen Wochen mechanisch anfühlt, liegt das meist nicht am Batching selbst, sondern an zu starren Formaten. Passe dann die Themen und Perspektiven an, nicht unbedingt den Produktionsprozess.',
        ],
      },
    ],
    checklistTitle: 'Batching-Setup',
    checklist: [
      'Ideenliste getrennt vom Redaktionskalender führen',
      'Shotlist vor dem Produktionstag vorbereiten',
      'Ähnliche Setups und Aufgaben bündeln',
      'Dateien direkt eindeutig benennen und sortieren',
      'Status von produziert bis veröffentlicht dokumentieren',
      'Bewusst freie Slots für spontane Inhalte lassen',
    ],
    related: ['content-plan-erstellen', 'social-media-funnel', 'creator-kennzahlen'],
    serviceLinks: [
      { href: '/de/creator-management', label: 'Content-System im Creator Management', text: 'Prom4Fans verbindet Planung, Produktion und Auswertung zu einem wiederholbaren Arbeitsrhythmus.' },
    ],
  },

  'creator-positionierung': {
    slug: 'creator-positionierung',
    category: 'Wachstum',
    eyebrow: 'Positionierung',
    title: 'Creator Positionierung: wie du erkennbar wirst, ohne eine Kunstfigur zu spielen',
    metaTitle: 'Creator Positionierung: Zielgruppe, Profil & Wiedererkennung',
    metaDescription: 'Creator Positionierung praktisch erklärt: Zielgruppe, Themen, Tonalität, visuelle Linie und ein klares Profil ohne künstliche Persona.',
    lead: 'Positionierung ist die Antwort auf eine einfache Frage: Warum sollte jemand nach drei Wochen noch wissen, dass ein bestimmter Post von dir war?',
    shortAnswer: 'Eine klare Positionierung verbindet Zielgruppe, wiederkehrende Themen, Tonalität und visuelle Signale. Sie schränkt dich nicht auf ein einziges Thema ein, sondern schafft einen Rahmen, in dem unterschiedliche Inhalte trotzdem nach derselben Person aussehen und klingen.',
    readingTime: '9 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Positionierung ist kein Slogan',
        paragraphs: [
          'Ein Slogan kann eine Positionierung zusammenfassen, aber er ersetzt sie nicht. Relevant ist, welche Entscheidung du bei Themen, Sprache, Bildstil und Kooperationen triffst. Wenn diese Entscheidungen alle in dieselbe Richtung zeigen, entsteht ein klares Profil – auch ohne perfekten Claim.',
          'Beginne mit deinen echten Stärken. Welche Themen kommen dir leicht? Welche Eigenschaften nennen andere Menschen an dir? Welche Art von Content könntest du auch dann noch produzieren, wenn ein Trend vorbei ist? Diese Schnittmenge ist oft stabiler als eine Positionierung, die ausschließlich aus Marktbeobachtung entsteht.',
        ],
      },
      {
        title: 'Definiere die Zielgruppe über Situationen statt Demografie',
        paragraphs: [
          'Alter und Geschlecht allein erklären selten, warum jemand Content interessant findet. Beschreibe besser, in welcher Situation sich deine Zielgruppe befindet, was sie sucht und welche Art von Beziehung sie zu deinem Content aufbauen möchte.',
          'Das macht Themenentscheidungen konkreter. Statt „Frauen und Männer 25 bis 45“ kann eine Zielgruppe beispielsweise aus Menschen bestehen, die nach humorvollem, erwachsenem Lifestyle-Content mit persönlicher Ansprache suchen und keine überinszenierte Hochglanz-Persona wollen.',
        ],
      },
      {
        title: 'Baue einen Wiedererkennungsrahmen',
        paragraphs: [
          'Wiedererkennung kann visuell, sprachlich oder inhaltlich entstehen. Du brauchst nicht in jeder Kategorie ein starkes Markenelement. Zwei oder drei konsistente Signale reichen: eine bestimmte Art von Einstiegen, wiederkehrende Bildwelten, ein fester Humor oder eine Serie, die regelmäßig zurückkommt.',
          'Teste deine letzten neun Posts ohne Profilnamen. Würde jemand, der dich kennt, mehrere davon dir zuordnen können? Wenn nicht, fehlt oft weniger Kreativität als vielmehr ein wiederkehrender Rahmen.',
        ],
        bullets: [
          'Drei Themen, die regelmäßig wiederkommen',
          'Eine klare Tonalität: ruhig, direkt, verspielt, humorvoll oder bewusst sachlich',
          'Ein bis zwei visuelle Konstanten',
          'Mindestens ein Format mit Seriencharakter',
        ],
      },
      {
        title: 'Grenzen gehören zur Marke',
        paragraphs: [
          'Gerade im Creator-Bereich ist Positionierung auch eine Entscheidung darüber, was nicht Teil des Angebots ist. Klare Grenzen schützen nicht nur privat, sondern schaffen auch verlässliche Erwartungen. Wer versucht, jede Nachfrage zu bedienen, verwässert häufig die eigene Linie.',
          'Grenzen können sich verändern. Wichtig ist, dass diese Änderungen bewusst stattfinden und nicht aus kurzfristigem Druck entstehen. Dokumentiere deshalb, welche Inhalte, persönlichen Informationen und Kommunikationsformen du grundsätzlich ausschließt.',
        ],
      },
      {
        title: 'Positionierung wird an echten Reaktionen geschärft',
        paragraphs: [
          'Du musst nicht monatelang im stillen Kämmerlein an einem perfekten Profil arbeiten. Formuliere eine klare erste Version, veröffentliche konsistent und beobachte, welche Themen besonders viele qualifizierte Reaktionen auslösen. Danach wird der Rahmen schrittweise präziser.',
          'Die beste Positionierung ist nicht die theoretisch cleverste, sondern die, die gleichzeitig verstanden wird, zu dir passt und dauerhaft produziert werden kann.',
        ],
      },
    ],
    checklistTitle: 'Positionierungs-Canvas',
    checklist: [
      'Zielgruppe über Bedürfnisse und Situationen beschrieben',
      'Drei Kernthemen definiert',
      'Tonalität in drei Adjektiven festgehalten',
      'Ein bis zwei visuelle Konstanten gewählt',
      'Mindestens ein wiederkehrendes Format entwickelt',
      'Persönliche und inhaltliche Grenzen dokumentiert',
      'Nach vier Wochen anhand echter Reaktionen überprüft',
    ],
    related: ['onlyfans-profil-optimieren', 'content-plan-erstellen', 'creator-35-plus'],
    serviceLinks: [
      { href: '/de/creator-management', label: 'Creator Management für Frauen 35+', text: 'Positionierung ist der erste Baustein unseres Creator-Management-Ansatzes.' },
    ],
  },

  'social-media-funnel': {
    slug: 'social-media-funnel',
    category: 'Wachstum',
    eyebrow: 'Social Media Funnel',
    title: 'Social Media Funnel für Creator: von Reichweite zu echter Community',
    metaTitle: 'Social Media Funnel für Creator: Reichweite sinnvoll weiterführen',
    metaDescription: 'Social Media Funnel für Creator: Aufmerksamkeit, Wiedererkennung, Vertrauen und Conversion als zusammenhängendes System planen.',
    lead: 'Mehr Reichweite ist nicht automatisch mehr Geschäft. Ein funktionierender Funnel führt Menschen von einem ersten Kontakt zu Wiedererkennung, Vertrauen und einer klaren nächsten Handlung.',
    shortAnswer: 'Plane Social Content in vier Stufen: Aufmerksamkeit, Wiedererkennung, Vertrauen und Conversion. Nicht jeder Post muss verkaufen. Die meisten Inhalte sollten zuerst einen Grund geben, dir erneut zu begegnen. Erst danach wird der nächste Schritt klar angeboten.',
    readingTime: '8 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Stufe 1: Aufmerksamkeit',
        paragraphs: [
          'Aufmerksamkeits-Content muss ohne Vorwissen funktionieren. Eine Person kennt weder deine Geschichte noch deine bisherigen Posts. Der Einstieg muss deshalb allein verständlich sein und schnell einen Grund liefern, weiterzuschauen.',
          'Das bedeutet nicht, jedem Trend hinterherzulaufen. Gute Reichweitenformate können dauerhaft sein: starke Beobachtungen, klare Meinungen, hilfreiche Mini-Tipps, humorvolle Situationen oder visuell auffällige Einstiege, die zu deiner Positionierung passen.',
        ],
      },
      {
        title: 'Stufe 2: Wiedererkennung',
        paragraphs: [
          'Ein viraler Einzelpost bringt wenig, wenn niemand beim nächsten Kontakt erkennt, dass er wieder von dir stammt. Wiedererkennbare Serien, Sprache und Bildwelten sorgen dafür, dass aus einzelnen Impressionen eine bekannte Person wird.',
          'Deshalb sollte ein Teil deines Contents bewusst wiederholen. Nicht denselben Post, sondern dieselbe Idee in neuen Varianten. Marken entstehen durch konsistente Wiederholung, nicht durch permanente Neuerfindung.',
        ],
      },
      {
        title: 'Stufe 3: Vertrauen',
        paragraphs: [
          'Vertrauen entsteht, wenn Menschen ein Gefühl dafür bekommen, wie du denkst, kommunizierst und mit deiner Community umgehst. Hier funktionieren Behind-the-Scenes, Antworten auf echte Fragen, längere Captions, persönliche Perspektiven und Inhalte, die nicht auf maximale Reichweite optimiert sind.',
          'Diese Inhalte können weniger Views haben und trotzdem wertvoller sein. Der relevante Maßstab ist, ob sie Profilbesuche, Antworten, Saves oder wiederkehrende Interaktion erzeugen.',
        ],
      },
      {
        title: 'Stufe 4: klare nächste Handlung',
        paragraphs: [
          'Wenn jede Veröffentlichung dieselbe Handlungsaufforderung enthält, wird sie schnell Hintergrundrauschen. Setze CTAs dort ein, wo sie logisch zum Inhalt passen. Eine Person, die gerade erst einen Unterhaltungsclip gesehen hat, braucht einen anderen nächsten Schritt als jemand, der schon mehrere Posts kommentiert hat.',
          'Der Profil-Link sollte möglichst wenig Verwirrung erzeugen. Zu viele gleichwertige Ziele verteilen Aufmerksamkeit. Entscheide, welche Handlung für den jeweiligen Kanal tatsächlich Priorität hat.',
        ],
      },
      {
        title: 'Messe Übergänge statt nur Reichweite',
        paragraphs: [
          'Ein Funnel wird verständlicher, wenn du zwischen den Stufen misst: Reichweite zu Profilbesuchen, Profilbesuche zu Link-Klicks und Link-Klicks zu qualifizierten Aktionen. Schon diese einfachen Relationen zeigen, an welcher Stelle das System verliert.',
          'Wenn Reichweite steigt, Profilbesuche aber nicht, ist der Content möglicherweise interessant, aber nicht stark mit deiner Person verbunden. Wenn viele Profilbesuche entstehen, aber kaum jemand weitergeht, sollte zuerst das Profil überprüft werden, nicht die Reichweitenstrategie.',
        ],
      },
    ],
    checklistTitle: 'Funnel-Check',
    checklist: [
      'Content für Aufmerksamkeit funktioniert ohne Vorwissen',
      'Wiedererkennbare Serien oder Stilmerkmale vorhanden',
      'Regelmäßig Inhalte für Vertrauen und Persönlichkeit eingeplant',
      'CTAs werden gezielt statt in jedem Post eingesetzt',
      'Profil hat eine klar priorisierte nächste Handlung',
      'Übergänge zwischen Reichweite, Profilbesuch und Klick werden gemessen',
    ],
    related: ['onlyfans-profil-optimieren', 'creator-positionierung', 'creator-kennzahlen'],
    serviceLinks: [
      { href: '/de/onlyfans-management', label: 'OnlyFans Management mit Distribution', text: 'Wir betrachten Social-Reichweite und Subscription-Profil als zusammenhängendes System.' },
    ],
  },

  'creator-management-agentur': {
    slug: 'creator-management-agentur',
    category: 'Management',
    eyebrow: 'Agentur auswählen',
    title: 'Creator Management Agentur finden: 12 Fragen, die du vor einer Zusammenarbeit stellen solltest',
    metaTitle: 'Creator Management Agentur finden: 12 wichtige Fragen',
    metaDescription: 'Creator Management Agentur auswählen: Leistungen, Zugänge, Reporting, Vergütung, Laufzeit, Grenzen und Verantwortlichkeiten vorab prüfen.',
    lead: 'Eine Agentur sollte dir Arbeit abnehmen und Entscheidungen besser machen – nicht neue Abhängigkeiten schaffen. Die wichtigsten Fragen lassen sich vor Vertragsbeginn klären.',
    shortAnswer: 'Prüfe nicht nur Umsatzversprechen. Frage nach konkretem Leistungsumfang, Datenzugriff, Account-Eigentum, Reporting, Kündigung, Freigaben, Sicherheit und dem tatsächlichen Ansprechpartner. Alles, was für die Zusammenarbeit wichtig ist, sollte verständlich dokumentiert sein.',
    readingTime: '10 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: '1. Was übernimmt die Agentur tatsächlich?',
        paragraphs: [
          'Begriffe wie „Full Service“ oder „Management“ sagen allein wenig aus. Lass dir konkret erklären, welche Aufgaben regelmäßig erledigt werden und welche bei dir bleiben. Dazu gehören Positionierung, Content-Planung, Produktion, Bearbeitung, Posting, Community-Kommunikation, Distribution, Reporting und technische Administration.',
          'Frage auch nach der Frequenz. „Wir machen Reporting“ kann bedeuten, dass du einmal im Quartal eine PDF bekommst – oder dass jede Woche Entscheidungen anhand aktueller Daten besprochen werden. Der konkrete Rhythmus ist entscheidend.',
        ],
      },
      {
        title: '2. Wem gehören Accounts, Daten und Zugänge?',
        paragraphs: [
          'Deine Accounts sollten nicht davon abhängen, ob eine Agentur morgen noch erreichbar ist. Kläre, auf welche E-Mail-Adresse Konten laufen, wer Zwei-Faktor-Authentifizierung kontrolliert, wer Recovery-Codes besitzt und wie Zugänge beim Ende der Zusammenarbeit zurückgegeben werden.',
          'Ein sauberes Rollenmodell ist besser als das Teilen eines einzigen Passworts mit mehreren Personen. Wo Plattformen Rollen oder getrennte Zugänge anbieten, sollten diese genutzt werden.',
        ],
      },
      {
        title: '3. Wie wird Erfolg gemessen?',
        paragraphs: [
          'Frage nach dem Reporting, bevor du einen Vertrag unterschreibst. Gute Berichte zeigen nicht nur Umsatz oder Followerzahl, sondern erklären, welche Maßnahmen durchgeführt wurden, was sich verändert hat und welche nächste Entscheidung daraus folgt.',
          'Vorsicht bei Garantien. Kein seriöser Dienstleister kann organische Reichweite oder zukünftigen Umsatz sicher versprechen. Erwartbar sind dagegen nachvollziehbare Prozesse, definierte Tests und transparente Daten.',
        ],
      },
      {
        title: '4. Wie funktionieren Freigaben und Grenzen?',
        paragraphs: [
          'Eine Zusammenarbeit muss festlegen, wer Inhalte, Texte, Preise oder Kampagnen freigibt. Besonders wichtig sind persönliche Grenzen und sensible Inhalte. Diese sollten nicht nur einmal mündlich erwähnt, sondern im Arbeitsprozess sichtbar dokumentiert werden.',
          'Frage, was passiert, wenn du eine Idee ablehnst. Ein gutes Management kann Empfehlungen begründen, akzeptiert aber, dass dein öffentlicher Auftritt und deine persönlichen Grenzen nicht gegen deinen Willen optimiert werden.',
        ],
      },
      {
        title: '5. Prüfe wirtschaftliche und organisatorische Details',
        paragraphs: [
          'Vergütung sollte so beschrieben sein, dass du die Rechnung selbst nachvollziehen kannst: fixe Gebühr, prozentuale Beteiligung, Berechnungsbasis und zusätzliche Kosten. Ebenso wichtig sind Mindestlaufzeit, Kündigungsfrist und der Umgang mit bereits produziertem Material.',
          'Frage nach deinem tatsächlichen Ansprechpartner und danach, wie viele Accounts diese Person parallel betreut. Ein beeindruckendes Verkaufsgespräch hilft wenig, wenn die laufende Betreuung später bei einem anonymen Ticket-System landet.',
        ],
        bullets: [
          'Konkreter Scope und Aufgabenverteilung',
          'Eigentum an Accounts und Assets',
          'Zugriffs- und Sicherheitskonzept',
          'Reporting-Rhythmus und Kennzahlen',
          'Freigabeprozess und persönliche Grenzen',
          'Vergütung und Berechnungsbasis',
          'Laufzeit, Kündigung und Übergabe',
          'Fester operativer Ansprechpartner',
        ],
      },
    ],
    checklistTitle: '12 Fragen für das Erstgespräch',
    checklist: [
      'Welche Aufgaben übernehmt ihr jede Woche konkret?',
      'Welche Aufgaben bleiben bei mir?',
      'Wer besitzt und kontrolliert meine Accounts?',
      'Wie werden Zugänge und 2FA organisiert?',
      'Welche Kennzahlen bekomme ich wie oft?',
      'Wie entscheidet ihr, was getestet oder geändert wird?',
      'Wer gibt Inhalte und Texte frei?',
      'Wie werden meine Grenzen dokumentiert?',
      'Wie genau berechnet sich eure Vergütung?',
      'Gibt es zusätzliche Gebühren oder Mindestlaufzeiten?',
      'Wer ist mein fester Ansprechpartner?',
      'Wie läuft die vollständige Übergabe bei einer Kündigung?',
    ],
    related: ['creator-kennzahlen', 'creator-account-sicherheit', 'creator-positionierung'],
    serviceLinks: [
      { href: '/de/creator-management', label: 'So arbeitet Prom4Fans im Creator Management', text: 'Hier kannst du unseren Leistungsumfang, Ablauf und die grundsätzliche Arbeitsweise direkt mit der Checkliste vergleichen.' },
      { href: '/kontakt', label: 'Fragen im Erstgespräch stellen', text: 'Wenn du wissen willst, wie wir einen konkreten Fall angehen würden, kannst du uns unverbindlich deinen Status quo schildern.' },
    ],
  },

  'creator-account-sicherheit': {
    slug: 'creator-account-sicherheit',
    category: 'Sicherheit',
    eyebrow: 'Account-Sicherheit',
    title: 'Account-Sicherheit für Creator: die praktische Basis gegen Accountverlust und Chaos',
    metaTitle: 'Account-Sicherheit für Creator: 2FA, Passwörter & Backups',
    metaDescription: 'Account-Sicherheit für Creator: Passwortmanager, Zwei-Faktor-Authentifizierung, Recovery-Codes, Rollen, Backups und Notfallplan.',
    lead: 'Reichweite ist wertlos, wenn der Zugang zum Account verloren geht. Ein solides Sicherheitssetup ist unspektakulär – bis zu dem Tag, an dem du es brauchst.',
    shortAnswer: 'Nutze für jeden wichtigen Account ein einzigartiges Passwort, aktiviere 2FA, sichere Recovery-Codes offline, trenne private und geschäftliche Kontaktwege und dokumentiere jeden Fremdzugriff. Zusätzlich brauchst du Backups deiner wichtigsten Inhalte und einen kurzen Notfallplan.',
    readingTime: '8 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Einzigartige Passwörter statt Variationen desselben Musters',
        paragraphs: [
          'Wenn dasselbe oder ein ähnliches Passwort für mehrere Dienste verwendet wird, kann ein Datenleck bei einem unwichtigen Dienst plötzlich den wichtigsten Account gefährden. Ein Passwortmanager löst dieses Problem besser als ein eigenes Merksystem.',
          'Das Master-Passwort des Passwortmanagers sollte stark und einzigartig sein. Wo möglich, sollte auch der Passwortmanager selbst mit einer zusätzlichen Sicherheitsstufe geschützt werden.',
        ],
      },
      {
        title: 'Zwei-Faktor-Authentifizierung und Recovery-Codes',
        paragraphs: [
          'Aktiviere 2FA auf E-Mail, Social Accounts, Subscription-Plattformen und allen Diensten, über die Passwörter zurückgesetzt werden können. Der E-Mail-Account ist besonders kritisch, weil er häufig der Schlüssel zu allen anderen Konten ist.',
          'Recovery-Codes gehören nicht nur als Screenshot auf dasselbe Smartphone. Bewahre sie getrennt auf, zum Beispiel in einem verschlüsselten Tresor oder zusätzlich offline. Prüfe einmal im Quartal, ob du tatsächlich noch Zugriff auf deine Wiederherstellungswege hast.',
        ],
      },
      {
        title: 'Trenne private und geschäftliche Identität dort, wo es sinnvoll ist',
        paragraphs: [
          'Eine separate geschäftliche E-Mail-Adresse vereinfacht Zugriffsverwaltung und reduziert die Gefahr, private Informationen versehentlich zu teilen. Je nach persönlichem Sicherheitsbedarf können auch getrennte Telefonnummern oder Geräte sinnvoll sein.',
          'Überlege außerdem, welche Informationen Fotos und Dateien unbeabsichtigt verraten können: Standortdaten, sichtbare Adressen, Kennzeichen, Fensterblicke oder wiedererkennbare Routinen. Sicherheit ist nicht nur ein Login-Thema.',
        ],
      },
      {
        title: 'Agentur- und Teamzugriffe müssen nachvollziehbar sein',
        paragraphs: [
          'Je mehr Menschen Zugriff auf einen Account haben, desto wichtiger wird Dokumentation. Notiere, wer worauf zugreifen darf und warum. Entferne Zugänge sofort, wenn eine Zusammenarbeit endet oder eine Aufgabe nicht mehr benötigt wird.',
          'Teile Passwörter nicht unnötig in Chats. Nutze stattdessen Rollenfunktionen, geteilte Tresore oder andere kontrollierbare Zugriffswege, sofern die jeweilige Plattform das erlaubt.',
        ],
      },
      {
        title: 'Ein Notfallplan spart im Ernstfall Zeit',
        paragraphs: [
          'Schreibe eine kurze Liste für den Fall eines verdächtigen Logins oder Accountverlusts: Passwort ändern, aktive Sessions beenden, E-Mail-Zugang prüfen, Plattform-Support kontaktieren, verbundene Apps kontrollieren und wichtige Kontakte informieren. Unter Stress ist eine vorbereitete Reihenfolge wertvoll.',
          'Sichere außerdem regelmäßig wichtige Rohdaten, veröffentlichte Assets und zentrale Dokumente. Ein Plattformkonto ist kein Archivsystem.',
        ],
      },
    ],
    checklistTitle: 'Security-Baseline',
    checklist: [
      'Einzigartiges Passwort für jeden kritischen Account',
      '2FA auf E-Mail, Social Accounts und Subscription-Plattformen',
      'Recovery-Codes getrennt vom Hauptgerät gesichert',
      'Geschäftliche und private Kontaktwege sinnvoll getrennt',
      'Fremdzugriffe und Rollen dokumentiert',
      'Nicht mehr benötigte Sessions und Zugänge entfernt',
      'Regelmäßiges Backup wichtiger Inhalte vorhanden',
      'Kurzer Notfallplan schriftlich abgelegt',
    ],
    related: ['onlyfans-anonym-starten', 'creator-management-agentur', 'onlyfans-starten'],
    serviceLinks: [
      { href: '/de/creator-management', label: 'Privacy & Resilience im Management', text: 'Bei Prom4Fans gehört Account-Sicherheit zum Fundament und nicht erst zur Reaktion auf einen Vorfall.' },
    ],
  },

  'creator-kennzahlen': {
    slug: 'creator-kennzahlen',
    category: 'Analyse',
    eyebrow: 'Reporting & Kennzahlen',
    title: 'Creator-Kennzahlen verstehen: welche Zahlen wirklich Entscheidungen verbessern',
    metaTitle: 'Creator-Kennzahlen: Reichweite, Conversion & Retention verstehen',
    metaDescription: 'Creator-Kennzahlen sinnvoll nutzen: Reichweite, Profilbesuche, Klickrate, Conversion, Retention und Content-Aufwand im Zusammenhang auswerten.',
    lead: 'Kennzahlen sind nur dann nützlich, wenn sie eine Entscheidung verändern. Eine große Zahl ohne Kontext kann beeindrucken – aber sie erklärt nicht, was du nächste Woche anders machen solltest.',
    shortAnswer: 'Betrachte Kennzahlen als Kette: Reichweite → Profilbesuche → Klicks → Conversion → Bindung. Ergänze diese Zahlen um Produktionsaufwand. So erkennst du nicht nur, was groß aussieht, sondern wo tatsächlich ein Engpass oder ein effizientes Format steckt.',
    readingTime: '9 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Reichweite ist der Anfang, nicht das Ergebnis',
        paragraphs: [
          'Views und Impressionen zeigen, wie oft Content ausgespielt wurde. Sie sagen noch nicht, ob die richtigen Menschen erreicht wurden oder ob der Post etwas für dein Geschäft verändert hat. Deshalb sollte Reichweite immer mit der nächsten Handlung zusammen betrachtet werden.',
          'Ein kleinerer Post kann wertvoller sein, wenn er deutlich mehr Profilbesuche, Antworten oder qualifizierte Klicks erzeugt. Vergleiche Formate deshalb nicht ausschließlich nach ihrer größten sichtbaren Zahl.',
        ],
      },
      {
        title: 'Profilbesuchsrate zeigt, ob Interesse an dir entsteht',
        paragraphs: [
          'Wenn ein Post viele Menschen erreicht, aber kaum Profilbesuche erzeugt, war der Inhalt vielleicht interessant, ohne starke Verbindung zu deiner Person herzustellen. Das ist nicht automatisch schlecht – aber wichtig für die Rolle des Formats im Funnel.',
          'Formate, die regelmäßig Profilinteresse erzeugen, eignen sich besonders gut als Brücke zwischen Reichweite und Positionierung.',
        ],
      },
      {
        title: 'Klick- und Conversion-Raten lokalisieren Engpässe',
        paragraphs: [
          'Viele Profilbesuche bei wenigen Link-Klicks deuten auf eine andere Baustelle als viele Klicks bei schwacher Conversion. Im ersten Fall solltest du Bio, Profilstruktur und CTA prüfen. Im zweiten Fall geht es eher um Erwartungsabgleich, Angebot oder die Zielseite.',
          'Arbeite mit Relationen statt nur absoluten Zahlen. Das macht Wochen mit unterschiedlicher Reichweite besser vergleichbar.',
        ],
      },
      {
        title: 'Retention zeigt, ob Wachstum Substanz hat',
        paragraphs: [
          'Neue Subscriptions sind sichtbar und motivierend. Langfristig entscheidend ist jedoch, ob Menschen bleiben, zurückkehren und interagieren. Beobachte deshalb Verlängerungen, Kündigungen und wiederkehrende Aktivität soweit deine Plattform diese Daten sinnvoll bereitstellt.',
          'Ein starker Akquise-Monat kann wirtschaftlich schwach sein, wenn die meisten neuen Abonnenten sofort wieder verschwinden. Umgekehrt kann ein kleineres, stabiles Publikum ein gesünderes Fundament bilden.',
        ],
      },
      {
        title: 'Füge Zeitaufwand als interne Kennzahl hinzu',
        paragraphs: [
          'Plattform-Dashboards kennen deine Produktionszeit nicht. Für deine Planung ist sie aber zentral. Notiere grob, wie lange wichtige Formate benötigen. Dadurch erkennst du, welche Inhalte im Verhältnis zu Aufwand und Ergebnis besonders effizient sind.',
          'Ein wöchentliches Reporting muss nicht kompliziert sein. Fünf bis acht Kennzahlen, eine Liste der wichtigsten Maßnahmen und drei konkrete Entscheidungen für die nächste Woche reichen häufig aus.',
        ],
        bullets: [
          'Reichweite oder Impressionen',
          'Profilbesuche',
          'Link-Klicks',
          'Conversion zum gewünschten nächsten Schritt',
          'Retention oder Verlängerung, sofern verfügbar',
          'Content-Produktion in Stunden',
          'Top- und Flop-Formate mit kurzer Hypothese',
        ],
      },
    ],
    checklistTitle: 'Wöchentlicher Reporting-Rhythmus',
    checklist: [
      'Dieselben Kernkennzahlen jede Woche erfassen',
      'Absolute Zahlen und relevante Raten gemeinsam betrachten',
      'Top-Content nicht nur nach Views bewerten',
      'Engpass im Funnel benennen',
      'Produktionsaufwand grob mitschreiben',
      'Maximal drei konkrete Tests für die nächste Woche festlegen',
      'Änderungen dokumentieren, damit Ursache und Wirkung nachvollziehbar bleiben',
    ],
    related: ['social-media-funnel', 'onlyfans-profil-optimieren', 'content-plan-erstellen'],
    serviceLinks: [
      { href: '/de/creator-management', label: 'Reporting im Creator Management', text: 'Unser Ansatz verbindet Kennzahlen mit konkreten nächsten Entscheidungen statt mit reinen Dashboard-Screenshots.' },
    ],
  },

  'onlyfans-anonym-starten': {
    slug: 'onlyfans-anonym-starten',
    category: 'Sicherheit',
    eyebrow: 'Privatsphäre',
    title: 'OnlyFans anonym starten: was du vor dem ersten öffentlichen Post entscheiden solltest',
    metaTitle: 'OnlyFans anonym starten: Privatsphäre & Grenzen planen',
    metaDescription: 'OnlyFans anonym starten: Gesicht, Name, Umfeld, Metadaten, Social Accounts und Sicherheitsgrenzen vor dem Launch bewusst planen.',
    lead: 'Anonymität ist kein einzelner Schalter. Sie besteht aus vielen kleinen Entscheidungen darüber, welche Merkmale, Orte, Routinen und Verbindungen zwischen deinen Accounts sichtbar werden.',
    shortAnswer: 'Entscheide vor dem Start, welche Identitätsmerkmale öffentlich sein dürfen. Trenne geschäftliche Accounts von privaten, prüfe Fotos auf identifizierende Details, vermeide wiederkehrende Standortmuster und plane, wie du mit Gesicht, Stimme, Namen und persönlichem Umfeld umgehen willst. Vollständige Anonymität lässt sich nie garantieren.',
    readingTime: '8 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Definiere dein gewünschtes Schutzniveau',
        paragraphs: [
          '„Anonym“ kann sehr Unterschiedliches bedeuten. Manche Creator zeigen ihr Gesicht, aber nicht den echten Namen. Andere wollen weder Gesicht noch Stimme oder Wohnregion offenlegen. Schreibe auf, welche Informationen öffentlich sein dürfen und welche auf keinen Fall.',
          'Diese Entscheidung beeinflusst Content-Formate. Wenn du dein Gesicht nicht zeigen möchtest, brauchst du bewusst andere Wiedererkennungsmerkmale: Bildsprache, Styling, Stimme ohne identifizierende Details, Perspektiven oder wiederkehrende Formate.',
        ],
      },
      {
        title: 'Trenne Account-Verbindungen',
        paragraphs: [
          'Neue geschäftliche E-Mail-Adressen und getrennte Social-Accounts reduzieren unbeabsichtigte Verknüpfungen. Prüfe Kontakt-Synchronisierung, vorgeschlagene Accounts und verbundene Telefonnummern. Plattformen können Beziehungen zwischen Konten auf Basis unterschiedlicher Signale herstellen.',
          'Verwende für öffentliche Accounts keine Profilbilder, Benutzernamen oder Bios, die bereits auf privaten Konten verwendet wurden. Kleine Wiederholungen können genügen, damit Bekannte Zusammenhänge erkennen.',
        ],
      },
      {
        title: 'Fotos verraten mehr als das Motiv',
        paragraphs: [
          'Achte auf Spiegelungen, Fensterblicke, Post, Namensschilder, Tattoos, Kennzeichen, Arbeitskleidung und charakteristische Orte. Auch wiederkehrende Tageszeiten oder Routinen können Hinweise geben. Entwickle vor der Produktion eine kurze Sichtprüfung des Sets.',
          'Metadaten sollten ebenfalls bedacht werden. Viele Plattformen entfernen bestimmte Bildinformationen beim Upload, darauf solltest du dich für deinen gesamten Workflow aber nicht verlassen. Bewahre veröffentlichte und private Dateien getrennt auf und teile Originaldateien nur bewusst.',
        ],
      },
      {
        title: 'Anonymität und Wachstum müssen zusammen geplant werden',
        paragraphs: [
          'Ein anonymes Profil kann sehr gut funktionieren, benötigt aber häufig stärkere alternative Wiedererkennung. Wenn Gesicht und Name ausfallen, werden Stil, Storytelling, Stimme, Themen und visuelle Konstanten wichtiger.',
          'Plane daher nicht erst Sicherheit und danach Marketing. Beides gehört in dieselbe Positionierung. Die Frage lautet: Welche Merkmale darf die Community zuverlässig wiedererkennen, ohne dass du Informationen preisgibst, die privat bleiben sollen?',
        ],
      },
      {
        title: 'Plane auch den Fall, dass jemand dich erkennt',
        paragraphs: [
          'Kein technisches Setup kann garantieren, dass eine Person aus deinem Umfeld dich niemals erkennt. Überlege deshalb vorab, wie du reagieren würdest, wenn ein Account geteilt oder deine Identität vermutet wird. Eine vorbereitete Entscheidung reduziert Panik und spontane Fehler.',
          'Wenn konkrete Bedrohungen, Stalking oder Doxxing auftreten, reichen allgemeine Online-Tipps nicht aus. Dann sollte professionelle rechtliche oder sicherheitsbezogene Unterstützung hinzugezogen werden.',
        ],
      },
    ],
    checklistTitle: 'Privacy-Check vor dem Launch',
    checklist: [
      'Öffentliche und private Identitätsmerkmale festgelegt',
      'Separate geschäftliche E-Mail und Accounts eingerichtet',
      'Kontakt-Synchronisierung und Account-Verknüpfungen geprüft',
      'Wiedererkennbare private Bilder und Nutzernamen vermieden',
      'Set auf identifizierende Details geprüft',
      'Datei- und Backup-Struktur getrennt',
      'Alternative Wiedererkennungsmerkmale für die Marke definiert',
      'Reaktionsplan für unerwünschte Identifizierung festgelegt',
    ],
    related: ['creator-account-sicherheit', 'creator-positionierung', 'onlyfans-starten'],
    serviceLinks: [
      { href: '/de/onlyfans-management', label: 'OnlyFans Management mit Privacy-Fokus', text: 'Sicherheit, Grenzen und Positionierung sollten zusammen geplant werden. So ordnen wir das im Management ein.' },
    ],
  },

  'creator-35-plus': {
    slug: 'creator-35-plus',
    category: 'Wachstum',
    eyebrow: 'Creator 35+',
    title: 'Als Creator mit 35+ starten: warum eine klare Positionierung wichtiger ist als jedem Trend zu folgen',
    metaTitle: 'Creator ab 35: Positionierung, Content & Wachstum',
    metaDescription: 'Creator ab 35: authentische Positionierung, nachhaltiger Content-Rhythmus, Community-Vertrauen und Subscription-Strategie ohne Trendstress.',
    lead: 'Mit 35+ musst du nicht versuchen, wie eine 20-jährige Trend-Creatorin aufzutreten. Erfahrung, Stil, Haltung und ein klarer Umgang mit Grenzen können selbst starke Differenzierungsmerkmale sein.',
    shortAnswer: 'Baue die Strategie auf deinen realen Stärken auf: Persönlichkeit, Lebenserfahrung, klare Grenzen und eine Zielgruppe, die genau diese Perspektive sucht. Wähle wenige Formate, die in deinen Alltag passen, und nutze Trends nur dann, wenn sie zu deiner Positionierung beitragen.',
    readingTime: '8 Min.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        title: 'Du brauchst keine jüngere Version von dir selbst',
        paragraphs: [
          'Der größte strategische Fehler wäre, eine Zielgruppe oder Ästhetik zu kopieren, die nicht zu dir passt. Menschen folgen Creatorn nicht nur wegen eines Alters oder Formats, sondern wegen einer Kombination aus Persönlichkeit, Perspektive und Wiedererkennung.',
          'Lebenserfahrung kann Content konkreter machen: Geschichten, Humor, Selbstsicherheit, Stil, Beziehungen, Berufserfahrung oder ein bewussterer Umgang mit Grenzen. Nutze nur die Teile davon, die sich für dich wirklich richtig anfühlen.',
        ],
      },
      {
        title: 'Wähle Zielgruppen nach Passung statt maximaler Größe',
        paragraphs: [
          'Eine kleinere Zielgruppe mit klarer Passung kann wertvoller sein als eine große, unspezifische Reichweite. Überlege, welche Menschen deine Art zu kommunizieren, deinen Stil und deine Themen besonders schätzen würden.',
          'Diese Entscheidung beeinflusst auch deine Plattformwahl. Du musst nicht auf jedem neuen Kanal aktiv sein. Ein Hauptkanal, den du verstehst und zuverlässig pflegst, kann mehr bewirken als fünf Profile mit unregelmäßiger Aktivität.',
        ],
      },
      {
        title: 'Baue Content um deinen Alltag herum',
        paragraphs: [
          'Ein nachhaltiges System berücksichtigt Beruf, Familie, Energie und andere Verpflichtungen. Plane feste Produktionsblöcke und wiederholbare Formate, statt jeden Tag spontan verfügbar sein zu müssen.',
          'Gerade wenn Content nicht dein einziges Projekt ist, wird ein Puffer wichtig. Vorproduzierte Inhalte geben dir Luft, ohne dass der Account bei jeder stressigen Woche stillsteht.',
        ],
      },
      {
        title: 'Community-Nähe kann ein Wettbewerbsvorteil sein',
        paragraphs: [
          'Viele Creator konzentrieren sich auf reine Reichweite. Eine erwachsene Zielgruppe kann jedoch besonders gut auf Verlässlichkeit, klare Kommunikation und echte Wiedererkennung reagieren. Antworten, wiederkehrende Serien und ein nachvollziehbarer Rhythmus schaffen Beziehung.',
          'Das bedeutet nicht, jederzeit erreichbar zu sein. Klare Kommunikationszeiten und Grenzen können sogar professioneller wirken als permanente Verfügbarkeit.',
        ],
      },
      {
        title: 'Trends sind Werkzeuge, keine Strategie',
        paragraphs: [
          'Nutze Trends selektiv. Wenn ein Format zu deiner Tonalität passt, kann es Reichweite bringen. Wenn du dafür deine gesamte Positionierung verbiegen musst, ist der kurzfristige Effekt selten den Aufwand wert.',
          'Stabilität entsteht aus Formaten und Themen, die auch dann funktionieren, wenn der aktuelle Sound oder Meme-Zyklus vorbei ist. Trends können diesen Kern ergänzen, aber sollten ihn nicht ersetzen.',
        ],
      },
    ],
    checklistTitle: 'Start-Check für Creator 35+',
    checklist: [
      'Eigene Stärken und Perspektiven statt Trend-Kopie definiert',
      'Zielgruppe nach Passung beschrieben',
      'Ein Hauptkanal priorisiert',
      'Content-Rhythmus an reale Wochenkapazität angepasst',
      'Mindestens ein wiederkehrendes Format entwickelt',
      'Kommunikationszeiten und persönliche Grenzen festgelegt',
      'Trends nur als Ergänzung des Kernsystems genutzt',
    ],
    related: ['creator-positionierung', 'content-plan-erstellen', 'onlyfans-starten'],
    serviceLinks: [
      { href: '/de/creator-management', label: 'Creator Management für Frauen 35+', text: 'Prom4Fans richtet das Management ausdrücklich auf eine erwachsene Zielgruppe und einen realistischen Alltag aus.' },
    ],
  },
};

export const guideList = guideSlugs.map((slug) => guides[slug]);
