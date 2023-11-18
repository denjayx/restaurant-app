import RestaurantSource from '../../data/restaturant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestoDetailTemplate, customLoader } from '../templates/template-creator';
import FavouriteRestoIdb from '../../data/favourite-resto-idb';

const Detail = {
  async render() {
    return `
      ${customLoader.loading()}
      <section id="restoDetail" class="hero-detail"></section>
      <div id="like-button-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const detail = document.querySelector('#restoDetail');
    detail.innerHTML = createRestoDetailTemplate(resto);
    customLoader.loaded();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      favouriteRestos: FavouriteRestoIdb,
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

    const reviewerName = document.querySelector('.reviewer-name');
    const reviewerText = document.querySelector('.reviewer-text');
    const addReviewButton = document.querySelector('.submit-review');

    addReviewButton.addEventListener('click', (event) => {
      event.stopPropagation();
      RestaurantSource.postReview({
        id: resto.id,
        name: reviewerName.value,
        review: reviewerText.value,
      });
      reviewerName.value = '';
      reviewerText.value = '';
    });
  },
};

export default Detail;
