import RestoList from '../views/pages/resto';
import Detail from '../views/pages/detail';
import Favourite from '../views/pages/favourite';

const routes = {
  '/': RestoList, // default page
  '/favourite': Favourite, // default page
  '/detail/:id': Detail,
};

export default routes;
