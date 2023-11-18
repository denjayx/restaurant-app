import FavouriteRestoIdb from '../../data/favourite-resto-idb';
import '../components/CardRestaurant';
import '../components/NothingLikedResto';

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
    const restaurantItem = document.createElement('card-restaurant');
    const nothingLiked = document.createElement('nothing-liked');
    if (restos.length) {
      restos.forEach((restaurant) => {
        restaurantItem.restaurant = restaurant;
        restoContainer.appendChild(restaurantItem);
      });
    } else {
      restoContainer.appendChild(nothingLiked);
    }
  },
};

export default Favourite;
