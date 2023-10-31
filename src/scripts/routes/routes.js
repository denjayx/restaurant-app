import RestoList from '../views/pages/resto';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': RestoList, // default page
  '/detail/:id': Detail,
};
 
export default routes;
