import RestaurantSource from "../../data/restaturant-source";

const RestoList = {
  async render() {
    return `
      <h2>Resto Page</h2>
    `;
  },
 
  async afterRender() {
    const restos = await RestaurantSource.restoList();
    console.log(restos);
 
    // TODO: tampilkan movies di dalam DOM
  },

};
 
export default RestoList;
