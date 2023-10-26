import RestaurantSource from '../../data/restaurant-source';

const RestoList = {
  async render() {
    return `
      <h2>Detail Pagee</h2>
    `;
  },

  async afterRender() {
    const resto = await RestaurantSource.restoList();
    console.log(resto);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default RestoList;
