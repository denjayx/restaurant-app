import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// const skipLink = document.getElementsByClassName('skip-link');
// const mainContent = document.getElementById('mainContent');

const app = new App({
  button: document.querySelector('#hamburger'),
  content: document.querySelector('#mainContent'),
  drawer: document.querySelector('#navLinks'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// skipLink.addEventListener('click', () => {
//   mainContent.focus();
// });
