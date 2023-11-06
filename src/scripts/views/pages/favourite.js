import FavouriteRestoIdb from '../../data/favourite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
      <section class="container restos">
          <h2 tabindex="0">Your Favourites Resto</h2>
          <div id="restoCards" class="resto-cards"></div>
      </section>
    `;
  },

  async afterRender() {
    const restos = await FavouriteRestoIdb.getRestoList();
    const restoContainer = document.querySelector('#restoCards');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favourite;
