import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <h2>Detail Pagee</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    console.log(resto);

    // TODO: tampilkan movie di dalam DOM
  },
};
export default Detail;
