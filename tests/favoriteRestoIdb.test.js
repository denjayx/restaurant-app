import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavouriteRestoIdb from "../src/scripts/data/favourite-resto-idb";

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestoIdb.getRestoList()).forEach(async (resto) => {
      await FavouriteRestoIdb.deleteResto(resto.id);
    });
  });
 
  itActsAsFavoriteRestoModel(FavouriteRestoIdb);
});
