# Game Dojo Austria, Webshop

Statischer Mock-Webshop für die TU-Wien-Übung **280.A69-2026S** (Praxisbeispiel, Programmierbeispiel).

Fiktives Studio: **Game Dojo Austria GmbH**, Wien.
Fiktives Produkt: **Fidget Mobile**, eine mobile App (Flutter-Quelle im übergeordneten Verzeichnis `../`).
Geschäftsmodell: Einmalkauf 0,99 € über Apple App Store und Google Play.

Aufbau: reines HTML mit [Pico.css](https://picocss.com/) v2, lokal eingebundene Inter-Schrift (OFL 1.1), eigene SVG- und PNG-Assets, keine Drittanbieter-CDNs außer Pico und Inter. Hosting über GitHub Pages.

## Lokale Vorschau

```bash
python3 -m http.server 8765
# http://localhost:8765 öffnen
```

## Flutter-Demo bauen (optional)

Aus dem übergeordneten Verzeichnis `phone_fidget/`:

```bash
flutter build web --release --base-href "/<repo-name>/demo/"
cp -r build/web webshop/demo
```

## Lizenz

Inhalte und Code © 2026 Game Dojo Austria GmbH, alle Rechte vorbehalten.
Verwendete Drittsoftware (Pico.css, Inter, Flutter) ist in `credits.html` mit Lizenz dokumentiert.
