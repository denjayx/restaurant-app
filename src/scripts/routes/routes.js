import Detail from '../views/pages/detail';
import Favourite from '../views/pages/favourtie';
import RestoList from '../views/pages/resto';

const routes = {
  '/': RestoList,
  '/favourite': Favourite,
  '/detail/:id': Detail,
};

export default routes;
