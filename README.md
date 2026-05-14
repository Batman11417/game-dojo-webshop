# Game Dojo Austria GmbH — Mock Webshop

Static mock webshop for the TU Wien assignment **280.A69-2026S** (Praxisbeispiel — Programmierbeispiel).
Built with [Pico.css](https://picocss.com/) v2 + plain semantic HTML, hosted on GitHub Pages.

The fictional product is **Fidget Mobile** — the Flutter app in the parent directory (`../`).
A live web build of that app is intended to live under `/demo/`.

## Company profile (fictional, used throughout the site)

| Field | Value |
|---|---|
| Firma | **Game Dojo Austria GmbH** |
| Rechtsform | GmbH (Stammkapital € 10.000) |
| Sitz | Oppenheimgasse 37/23/24, 1100 Wien |
| Firmenbuchgericht | Handelsgericht Wien |
| Firmenbuchnummer | placeholder (`[FN einsetzen]`) |
| Geschäftsführung | placeholder (`[Vor- und Nachname einsetzen]`) |
| Unternehmensgegenstand | Entwicklung und Vertrieb digitaler Unterhaltungssoftware |
| Gewerbe | Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik (frei) |
| Aufsichtsbehörde | Magistratisches Bezirksamt für den 10. Wiener Gemeindebezirk |
| Kammer | WKO Wien, Fachgruppe UBIT |
| Umsatzsteuer | Kleinunternehmer:in gem. § 6 Abs 1 Z 27 UStG — keine UID |
| Geschäftsmodell | Einmalkauf €0,99 |

## Pages and status

| File | Aufgabe | Status |
|---|---|---|
| `index.html` | Landing | ✓ done |
| `about.html` | 3 (Marken) | ✓ company facts; **TODO**: trademark prose × 3 + optional story |
| `license.html` | 4 (Lizenz) | ✓ done — full FAGG/KSchG/VGG-aware text |
| `privacy.html` | 5 (Datenschutz) | ✓ done — DSGVO Art 6/13/14/15-22, § 165 TKG 2021, DSB |
| `impressum.html` | 6 (Gewerbe) | ✓ done — § 24/§ 25 MedienG + § 5 ECG + GewO 1994; **TODO**: FN + GF name |
| `accessibility.html` | 1 (Barrierefreiheit) | ✓ done — BaFG, WCAG 2.2 AA, EN 301 549, Sozialministeriumservice |
| `credits.html` | 2 (Urheberrecht) | ✓ done — fill audio row if you add sounds |
| `widerrufsbelehrung.html` | 4 + 5 (FAGG) | ✓ done — § 11 + § 18 FAGG + Muster-Rücktrittsformular |
| `contact.html` | 6 (Gewerbe) | ✓ done — mock form |
| `checkout.html` | — | ✓ done — mock €0.99 + FAGG-Verzicht-Checkbox |
| `404.html` | — | ✓ done |

Remaining TODO blocks are dashed purple panels on the rendered page.

## Local preview

```bash
# any static server works
python3 -m http.server 8765
# then open http://localhost:8765
```

## Build the embedded Flutter demo

From the parent `phone_fidget/` folder:

```bash
flutter build web --release --base-href "/<your-repo-name>/demo/"
cp -r build/web webshop/demo
```

Replace `<your-repo-name>` with the GitHub repository slug (e.g. `game-dojo-webshop`).

## Deploy to GitHub Pages

```bash
cd webshop
git init
git add .
git commit -m "feat: initial Game Dojo webshop"
# create empty repo on github.com, then:
git branch -M main
git remote add origin git@github.com:<your-user>/<your-repo>.git
git push -u origin main
```

On github.com → repo → **Settings → Pages → Source: `main` branch / root**.
After ~1 minute the URL `https://<your-user>.github.io/<your-repo>/` is live.

## Accessibility (WCAG 2.2 AA) — checklist before submit

- [ ] WAVE: 0 errors, 0 contrast errors on every page
- [ ] axe DevTools: 0 violations
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Tab-navigate every page; focus visible at every step
- [ ] Skip-link visible on first Tab press
- [ ] All `<img>` have meaningful `alt` (or `alt=""` if decorative)
- [ ] Mobile viewport 375 × 667 works
- [ ] Real screenshots replace `assets/img/screenshots/*.svg` placeholders

## Legal-page source map

| Page | Primary sources |
|---|---|
| `impressum.html` | § 24, § 25 MedienG · § 5 ECG · § 14 UGB · § 63 GewO · [WKO](https://www.wko.at/internetrecht/website-impressum) |
| `privacy.html` | Art 6, 13, 14, 15–22 DSGVO · § 165 TKG 2021 · [DSB](https://www.dsb.gv.at/) · [WKO Checkliste](https://www.wko.at/internetrecht/datenschutzerklaerung-checkliste-infopflichten-dsgvo-tkg-we) |
| `accessibility.html` | BaFG BGBl. I 76/2023 · WCAG 2.2 AA · EN 301 549 · [Sozialministeriumservice](https://www.sozialministeriumservice.gv.at/) |
| `license.html` | §§ 922 ff. ABGB · KSchG · VGG · § 40d, § 40e UrhG · [WKO IT-AGB](https://www.wko.at/oe/information-consulting/unternehmensberatung-buchhaltung-informationstechnologie/it-dienstleistung/allgemeine-geschaeftsbedingungen) |
| `widerrufsbelehrung.html` | § 11, § 18 FAGG · Anhang I lit. B FAGG · [WKO Widerrufsbutton](https://www.wko.at/internetrecht/e-commerce-widerrufsbutton-webshop) |

## License of this site

Code & content © 2026 Game Dojo Austria GmbH. All rights reserved.
Pico.css is included under the MIT license.
