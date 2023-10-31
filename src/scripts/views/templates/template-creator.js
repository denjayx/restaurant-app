import CONFIG from '../../globals/config';
 
const createRestoItemTemplate = (resto) => `
  <div id="restoItem" class="resto-item">
    <div class="thumbnail-item">
      <span class="label">${resto.city}</span>  
      <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
    </div>
    <div class="desc">
      <span class="rating">${resto.rating}</span>
      <h3 tabindex="0" aria-label="${`${resto.name}, ${resto.city}`}" class="title">
        ${resto.name}
      </h3>
      <p id="restoDesc">${resto.description}</p>
    </div>
  </div>
`;
 
export default createRestoItemTemplate;
