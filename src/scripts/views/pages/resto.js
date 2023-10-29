import RestaurantSource from '../../data/restaurant-source';
import createRestoItemTemplate from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
    <section class="container restos">
      <h2 tabindex="0">Explore Restaurant</h2>
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
    // TODO: tampilkan movie di dalam DOM
  },
};

export default RestoList;
