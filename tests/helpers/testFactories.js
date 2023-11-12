import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
const createLikeButtonPresenterWithResto = async (resto) => {
  document.body.innerHTML = '<div id="like-button-container"></div>';
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    resto,
  });
};
export { createLikeButtonPresenterWithResto };
