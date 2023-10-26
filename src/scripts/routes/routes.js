import Detail from '../views/pages/detail';
import RestoList from '../views/pages/resto';

const routes = {
  '/': RestoList,
  '/detail/:id': Detail,
};

export default routes;
