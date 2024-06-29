import type { Config } from './types';

export default {
  version: '1.0',
  name: 'كل حصري',
  shortName: 'كل حصري',
  description: 'تطبيق موقع كل حصري لتصفح المحتوي بكل سهولة وسرعة وبدون اعلانات.',
  direction: 'auto',
  language: 'ar_AR',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/?view=app',
  id: '/?view=app',
  startUrl: '/?view=app',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hello-example.blogspot.com',
} satisfies Config;
