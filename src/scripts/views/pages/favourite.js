import FavouriteRestoIdb from '../../data/favourite-resto-idb';
import '../components/CardRestaurant';

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
    restos.forEach((restaurant) => {
      const restaurantItem = document.createElement('card-restaurant');
      restaurantItem.restaurant = restaurant;
      restoContainer.appendChild(restaurantItem);
    });
  },
};

export default Favourite;
