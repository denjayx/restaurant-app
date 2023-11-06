import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // static async upcomingMovies() {
  //   const response = await fetch(API_ENDPOINT.UPCOMING);
  //   const responseJson = await response.json();
  //   return responseJson.results;
  // }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
