import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

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
});
