import RestaurantSource from '../../data/restaturant-source';
import { createRestoItemTemplate, customLoader, loadFailed } from '../templates/template-creator';
import '../components/Hero';

const RestoList = {
  async render() {
    return `
      <hero-banner></hero-banner>
      <section id="mainContent" class="container restos">
        <h2>Explore Restaurant</h2>
        ${customLoader.loading()}
        <div id="restoCards" class="resto-cards"></div>
      </section>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.restoList();
    const restoContainer = document.querySelector('#restoCards');

    if (restos.error) {
      restoContainer.innerHTML = loadFailed();
    } else {
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
      customLoader.loaded();
    }
  },

};

export default RestoList;
