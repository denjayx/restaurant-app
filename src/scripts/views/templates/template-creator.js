import CONFIG from '../../globals/config';

const Menus = {
  foods(resto) {
    return resto.menus.foods.map((food, index) => `
      <li><span>${index + 1}.</span> ${food.name}</li>
    `).join('');
  },

  drinks(resto) {
    return resto.menus.drinks.map((drink, index) => `
      <li><span>${index + 1}.</span> ${drink.name}</li>
    `).join('');
  },
};

function restoCategory(resto) {
  return resto.categories.map((category) => `
      <li>${category.name}</li>
  `).join('');
}

function customerReview(resto) {
  return resto.customerReviews.map((reviews) => `
    <li class="review">
      <p class="name">${reviews.name}</p>
      <p class="date">${reviews.date}</p>
      <p class="text">${reviews.review}</p>
    </li>
  `).join('');
}

const createRestoDetailTemplate = (resto) => `
  <div class="hero-detail">
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  </div>

  <div class="flex col gap-2">
      <h2 class="detail-name">${resto.name}</h2>
      <div class="flex just-start items-center gap-1 category-list">
        ${restoCategory(resto)}
      </div>
    </div>

    <div class="flex just-start items-center gap-1 info">
      <span class="label rating rating-detail">${resto.rating}</span>
      <span class="label">${resto.city}</span>
      <span class="label">${resto.address}</span>
    </div>

    <div class="detail-desc-wrapper">
      <p class="detail-desc">${resto.description}</p>
    </div>

    <div class="menus flex col just-center gap-4">
      <div class="foods">
        <h3>Makanan</h3>
      ${Menus.foods(resto)}
      </div>
      <div class="drinks">
        <h3>Minuman</h3>
        ${Menus.drinks(resto)}
      </div>
    </div>

    <div class="customer-reviews">
      <h2>Reviews</h2>
      <div class="reviews-wrapper">
        ${customerReview(resto)}
      </div>
    </div>

    <div class="add-reviews">
      <h2>Add Reviews</h2>
      <div class="input-reviews">
        <input tabindex="-1" type="text" class="reviewer-name" placeholder="Your Name">
        <input tabindex="-1" type="text" class="reviewer-text" placeholder="Your Reviews">
        <button tabindex="-1" class="submit-review">Add Review</button>
      </div>
    </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="like-button" class="like">
    <i class="fa-regular fa-star"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="like-button" class="like">
    <i class="fa-solid fa-star"></i>
  </button>
`;

const loadFailed = () => `
  <span>Data Not Loaded</span>
`;
const customLoader = {
  loading() {
    return `
        <div class="loader-wrapper">
          <div class="custom-loader"></div>
        </div>
      `;
  },
  loaded() {
    document.querySelector('.loader-wrapper').remove();
  },
};

export {
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  restoCategory,
  Menus,
  customerReview,
  customLoader,
  loadFailed,
};
