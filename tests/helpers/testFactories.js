import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import FavouriteRestoIdb from "../../src/scripts/data/favourite-resto-idb";

const createLikeButtonPresenterWithResto = async (resto) => {
  document.body.innerHTML = '<div id="like-button-container"></div>';
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    favouriteRestos: FavouriteRestoIdb,
    resto,
  });
};
export { createLikeButtonPresenterWithResto };
