import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  // './index.html',
  // './favicon.png',
  // './app.bundle.js',
  // './app.webmanifest',
  // './sw.bundle.js',
  './',
  './index.html',
  './favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
  './icons/android-chrome-192x192.png',
  './icons/android-chrome-512x512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-16x16.png',
  './icons/favicon-32x32.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.waitUntil(CacheHelper.revalidateCache(event.request));
});
