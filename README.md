# AnimQR

Animated art QR codes — themes, borders, GIF export.  
Built for the **RevenueCat Next Gen** track.

AnimQR turns any link into a scannable, animated piece of art. Choose a theme, add a decorative border, pick an animation source (or upload your own GIF), and export as GIF or PNG. It is a static web app wrapped with Capacitor and integrated with RevenueCat for in-app purchases.

## What is AnimQR?

AnimQR is a mobile-ready app that generates artistic QR codes with animated interiors.

You can preview every style for free. Exporting designs that use Pro features (certain borders, animations, logo, batch mode, etc.) triggers a soft paywall.

## Key Features

- **One-tap themes** — Paper Minimal, Ultramarine, Ink & Gold, Starlight, Garden, Circuit
- **Decorative borders** — None, Gold, Floral, Neon, Pixel, Starry, Circuit, Chinese
- **Animation sources** — Rocket (free), Car, Flame, or upload your own GIF
- **Center logo** — Upload a transparent PNG to place in the middle
- **Batch generation** — Generate multiple QR codes from a list of links
- **Export** — GIF and PNG, with share support
- **History** — Recent links (free: 3 items, Pro: unlimited)
- **Soft paywall** — Preview everything free, unlock watermark-free export and Pro styles

## Quick Start / Setup

### Prerequisites

- Node.js and npm
- Capacitor CLI
- Xcode (for iOS) or Android Studio (for Android)

### 1. Install dependencies

```bash
npm install
```

> **Important:** The current `www/index.html` loads `qrcode` and `gif.js` from a CDN.  
> On mobile devices or offline environments, these CDN requests may fail, causing QR codes not to display or GIF export to break.
>
> To avoid this, install the libraries locally:
>
> ```bash
> npm install qrcode gif.js
> ```
>
> Then update the script tags in `www/index.html` to point to local files:
>
> ```html
> <script src="node_modules/qrcode/build/qrcode.min.js"></script>
> <script src="node_modules/gif.js/dist/gif.js"></script>
> ```
>
> Or copy them into `www/lib/` and reference them from there.
>
> After any change, run `npx cap sync`.

### 2. Add native platforms

```bash
npx cap add ios      # optional
npx cap add android  # optional
```

### 3. Sync web assets

```bash
npx cap sync
```

### 4. Open in IDE

```bash
npx cap open ios     # or android
```

Run a **Debug** build. Purchases use the RevenueCat Test Store (simulate success / fail / cancel).

## How to Use the App

1. **Enter a link** — Paste any URL into the “Link” field.
2. **Pick a theme** — Tap a theme card to auto-apply border, animation, and settings.
3. **Adjust (optional)** — Change border, animation source, module shape, error correction, or advanced settings.
4. **Generate** — Tap **Generate QR Code**.
5. **Preview** — The animation plays in the stage area.
6. **Export** — Use GIF, PNG, or Share.
   - Free exports include a watermark.
   - Pro exports are watermark-free and support all styles.

## Free vs Pro

Free users can preview every style.

Exporting a design that uses **Pro features** (e.g., Floral / Neon / Pixel / Starry / Circuit / Chinese borders, Car / Flame / Upload animations, Center Logo, Batch mode) will open the paywall.

## RevenueCat Integration

AnimQR uses RevenueCat for in-app purchases.

Configuration is in `www/index.html` under `RC_API_KEYS`.

- **Entitlement:** `pro`
- **Packages:** `$rc_monthly`, `$rc_annual`, `$rc_lifetime`, `3day`
- Test Store API keys are provided for development and hackathon use.

### Test Store

The Test Store lets you simulate purchases without App Store / Play Store listings.

You can simulate:

- Successful purchase
- Failed purchase
- Cancelled purchase

Set your Test Store API keys in `www/index.html` → `RC_API_KEYS`.

### Soft Paywall

AnimQR uses a soft paywall approach:

- Users can freely explore and preview all Pro styles.
- When they try to export a design that uses Pro features, the app shows a paywall.
- The paywall lists exactly which Pro features are in use.
- Pricing options: 7-day free trial, Monthly ($2.99), Yearly ($19.99), Lifetime ($39.99).
- If the user dismisses the main paywall, a one-time 3-day Pro for $0.99 offer modal appears (once per session).
- On web/browser, purchases are mocked with `localStorage`.
- On native iOS/Android, RevenueCat handles the purchase flow.
- “Restore purchases” is available.

This lets users fall in love with the design before committing, while still gating the final high-value export.

## Troubleshooting

### QR code not showing / blank canvas

- Make sure you ran `npm install`.
- If you are using CDN scripts, check your network connection.
- For offline/mobile use, install `qrcode` and `gif.js` locally and update `www/index.html` as described above.
- Run `npx cap sync` after changing web assets.
- Open the browser console / device logs for errors.

### GIF export fails

- Try fewer frames or use PNG.
- Ensure `gif.js` is loaded correctly (local or CDN).
- On native, make sure the WebView has enough memory.

### Purchases not working

- Verify RevenueCat API keys in `www/index.html`.
- Ensure you are running a Debug build with Test Store configured.
- On web, purchases are mocked and will not charge real money.

## Disclaimer

Test Store API keys are for development/hackathon only.  
**Do not ship Test Store keys in production App Store / Play releases.**

## License

**Proprietary — All Rights Reserved.** See [LICENSE](./LICENSE).

No permission is granted to use, copy, modify, or distribute this software without explicit written authorization from the copyright holders.

Public listing for hackathon review does **not** grant a usage license.

## Copyright

© AnimQR. All rights reserved.
