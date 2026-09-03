# Prom4Fans — Social Library

Fertige, editierbare Vorlagen für Social Media, abgeleitet aus dem Website-Design
(gleiche Farben, gleiche Logo-Marke, gleiche Bildsprache). Alle Dateien sind
**SVG (Vektor)** — verlustfrei skalierbar und in Canva, Figma, Illustrator oder
Affinity Designer direkt zu öffnen und zu bearbeiten (Texte austauschen, Farben
anpassen, Fotoplatzhalter ersetzen).

## Ordnerstruktur

```
01-logos/            Logo-Mark, Lockups, Mono-Varianten
02-instagram-posts/  Feed-Posts, Format 1080×1350 (4:5 Hochformat)
03-reels-stories/    Reel-Cover & Story-Vorlagen, Format 1080×1920 (9:16)
04-brand-board/      Farbpalette, Typografie, Profilbild, Cover-Banner
```

28 Assets insgesamt.

## Farben

| Rolle | Hex |
|---|---|
| Purple / Primary | `#6c35ed` |
| Navy / Ink | `#15162d` |
| Pink / Accent | `#ff5e83` |
| Lime / Accent | `#d6fa43` |
| Off-white / BG | `#fbfaf8` |
| Lavender / BG | `#f3f1fb` |

Siehe `04-brand-board/color-palette.svg` für die visuelle Referenz.

## Typografie

Die Live-Website nutzt die Schrift **Geist** (Google Fonts, kostenlos). Die
Vorlagen hier sind mit `Arial / Helvetica` als portablem Fallback gesetzt,
damit sie auf jedem Rechner sofort korrekt aussehen. Für 1:1-Match:

- In Canva/Figma: Textebenen markieren → Schrift auf **Geist** (oder ersatzweise
  **Inter**, sehr ähnlich) umstellen.
- Immer **Bold/Black (700–900)** für Headlines, **Regular/Medium (400–600)** für
  Fließtext — das ist der durchgängige Look der Marke.

## Logo-Nutzung (01-logos/)

- `logo-mark.svg` — Vollfarbige Marke (Lila-Verlauf), für helle Hintergründe.
- `logo-lockup-light.svg` / `logo-lockup-dark.svg` — Marke + Schriftzug, für
  helle bzw. dunkle Hintergründe.
- `logo-mark-mono-navy.svg` / `logo-mark-mono-white.svg` — reine Icon-Silhouette
  in einer Farbe, zum Stempeln auf Fotos oder farbige Flächen.
- `logo-lockup-stacked-dark.svg` — quadratische Variante (Marke über
  Schriftzug), gut für Profilbild-nahe Platzierungen oder Intro-Slides.

**Faustregel:** Mindestabstand rund um die Marke = eigene Markenhöhe. Marke
nicht verzerren, nicht einfärben außer über die bereitgestellten Mono-Varianten.

## Instagram-Posts (02-instagram-posts/)

10 Vorlagen, alle 1080×1350 px (Instagrams empfohlenes Hochformat, füllt mehr
Feed-Fläche als ein quadratisches Format):

- `post-hero-moment` — Markenauftritt / Intro-Post
- `post-statement-du-bleibst-du` — Statement-Zitat auf Navy
- `post-service-*` (4×) — je eine Leistung mit kurzer Erklärung
- `post-growth-path` — Wachstums-Kurve als Blickfang
- `post-process-4steps` — 4-Schritte-Ablauf als Karten-Grid
- `post-quote-photo` — Testimonial-Layout mit Fotoplatzhalter
- `post-cta-bewerben` — Call-to-Action "Für Management bewerben"

## Reels & Stories (03-reels-stories/)

8 Vorlagen, alle 1080×1920 px:

- `reel-cover-*` (5×) — Cover-Frames für Reels (Hook, Frage, 3-Tipps,
  Behind-the-Scenes, FAQ)
- `story-swipe-up-bewerben` — Bewerbungs-CTA für Stories
- `story-countdown` / `story-poll` — Layout mit markierter Fläche für die
  **nativen** Instagram-Sticker (Countdown/Umfrage lassen sich nicht als SVG
  exportieren — die Fläche zeigt nur, wo der Sticker in der App platziert
  werden soll).

**Fotoplatzhalter:** Grau hinterlegte Flächen mit Kamera-Symbol markieren, wo
eigenes Foto-/Videomaterial eingesetzt werden soll — beim Export einfach durch
echtes Material ersetzen oder in Canva als Bildrahmen nutzen.

## Brand Board (04-brand-board/)

- `color-palette.svg`, `type-specimen.svg` — schnelle Referenz für externe
  Designer:innen oder Freelancer.
- `avatar-profile-picture.svg` — 512×512, Marke mit Sicherheitsabstand für den
  runden Zuschnitt bei Instagram/TikTok/LinkedIn-Profilbildern.
- `cover-banner.svg` — 1500×500, für Facebook-Seite oder LinkedIn-Unternehmensseite.

## Export-Tipp

Für Instagram/TikTok direkt aus Figma oder Canva als **PNG, 2× Auflösung**
exportieren (ergibt automatisch 2160×2700 bzw. 2160×3840 px — mehr als
ausreichend scharf).
