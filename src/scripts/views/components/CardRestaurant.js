import CONFIG from '../../globals/config';

class CardRestaurant extends HTMLElement {
  set restaurant(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    const {
      id, pictureId, name, city, rating, description,
    } = this._resto;

    this.innerHTML = `
    <div id="restoItem" class="resto-item">
      <div class="thumbnail-item">
        <span class="label">${city}</span>  
        <img class="lazyload" data-src="${CONFIG.BASE_THUMBNAIL_URL + pictureId}" alt="${name}" />
      </div>
      <div class="desc">
      
        <span class="rating">${rating}</span>
        <h3 class="resto-title" aria-label="${`${name}, ${city}`}" ><a href="/#/detail/${id}">${name || '-'}</a></h3>
        <p id="restoDesc">${description.substring(0, 110)}...</p>
      </div>
    </div>
    `;
  }
}
customElements.define('card-restaurant', CardRestaurant);
