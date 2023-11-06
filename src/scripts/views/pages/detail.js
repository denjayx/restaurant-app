import RestaurantSource from '../../data/restaturant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate, customLoader } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="container">
        ${customLoader.loading()}
        <section id="restoDetail" class="hero-detail"></section>
      </div>
      <div id="like-button-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const detail = document.querySelector('#restoDetail');
    detail.innerHTML = createRestoDetailTemplate(resto);
    customLoader.loaded();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
        address: resto.address,
        city: resto.city,
        menus: resto.menus,
        categories: resto.categories,
        customerReviews: resto.customerReviews,
      },
    });
  },
};

export default Detail;
