import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let favoriteRestos = [];
 
const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }
 
    return favoriteRestos.find((resto) => resto.id == id);
  },
 
  getRestoList() {
    return favoriteRestos;
  },
 
  putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteRestos
    if (this.getResto(resto.id)) {
      return;
    }
 
    favoriteRestos.push(resto);
  },
 
  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((resto) => resto.id != id);
  },
};
 
describe('Favorite resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestos = [];
  });
 
  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
