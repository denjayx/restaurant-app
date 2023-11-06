import RestaurantSource from '../../data/restaturant-source';
import { createRestoItemTemplate, customLoader } from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
      <section class="hero">
        <h1 class="tagline">Indonesian Flavors, Endless Choices</h1>
      </section>
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

    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    customLoader.loaded();
  },

};

export default RestoList;
