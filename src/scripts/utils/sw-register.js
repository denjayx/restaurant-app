<<<<<<< HEAD
=======
import { Workbox } from 'workbox-window';

>>>>>>> 020075d3cf3fe31c087f6998374e1c7839bbe312
const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

<<<<<<< HEAD
  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
=======
  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
>>>>>>> 020075d3cf3fe31c087f6998374e1c7839bbe312
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
