import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favouriteRestos, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    this._favouriteRestos = favouriteRestos;


    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await this._favouriteRestos.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await this._favouriteRestos.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await this._favouriteRestos.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
