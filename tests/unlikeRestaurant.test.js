import FavouriteRestoIdb from "../src/scripts/data/favourite-resto-idb";
import * as TestFactories from "./helpers/testFactories";


describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-button-container"></div>';
  };
 
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavouriteRestoIdb.putResto({ id: 1 });
  });
 
  afterEach(async () => {
    await FavouriteRestoIdb.deleteResto(1);
  });
 
  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1});
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
  });
 
  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1});
    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1});
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await FavouriteRestoIdb.getRestoList()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1});
    // Hapus dulu film dari daftar film yang disukai
    await FavouriteRestoIdb.deleteResto(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await FavouriteRestoIdb.getRestoList()).toEqual([]);
  });
});