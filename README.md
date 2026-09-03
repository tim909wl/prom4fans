# Prom4Fans

Kleine, produktionsreife Next.js-Basis für eine überwiegend statische Website.

## Entwicklung

```bash
npm install
npm run dev
```

## Auslieferung

`npm run build` erzeugt den schlanken Node-Server in `.next/standalone`.

Für klassisches Apache-/Shared-Hosting erzeugt `npm run static` einen vollständigen statischen Export in `out/`. Kopiere dessen Inhalt zusammen mit der Root-Datei `.htaccess` in das Webroot und passe vorab `NEXT_PUBLIC_SITE_URL` an. Die Weiterleitung auf `www` ist in `.htaccess` vorbereitet; bei einer Domain ohne `www` diese zwei Rewrite-Zeilen entfernen.

Vor einem echten Launch müssen insbesondere Impressum, Datenschutz, Domain und Kontaktadresse durch die finalen Angaben ersetzt werden.
