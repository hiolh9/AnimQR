import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.animqr.app',
  appName: 'AnimQR',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    // RevenueCat is configured in JS via Purchases.configure()
  },
};

export default config;
