# AnimQR

Animated art QR codes — themes, borders, GIF export. Built for the RevenueCat Next Gen track.

**License: Proprietary — All Rights Reserved.** See [LICENSE](./LICENSE).  
No permission is granted to use, copy, modify, or distribute this software without explicit written authorization from the copyright holders. Public listing for hackathon review does **not** grant a usage license.

## Stack

- Static web app (`www/`) wrapped with **Capacitor**
- **RevenueCat** (`@revenuecat/purchases-capacitor`) + **Test Store** for IAP (no App Store listing required for Next Gen)

## Setup

```bash
npm install
npx cap add ios      # optional
npx cap add android  # optional
npx cap sync
npx cap open ios     # or android
```

Run a **Debug** build. Purchases use RevenueCat Test Store (simulate success / fail / cancel).

## RevenueCat

- Entitlement: `pro`
- Packages: `$rc_monthly`, `$rc_annual`, `$rc_lifetime`, `3day`
- Configure Test Store API keys in `www/index.html` → `RC_API_KEYS`

## Disclaimer

Test Store API keys are for development/hackathon only. Do not ship Test Store keys in production App Store / Play releases.
