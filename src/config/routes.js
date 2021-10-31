import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Rank from '../pages/Rank';
import MarketPlace from '../pages/MarketPlace';
import TestPhoto from '../pages/TestPhoto';
import Product from '../pages/Product';
import EditProductForm from '../components/layout/product/EditProductForm';
import Community from '../pages/Community';

// const allPages = [
//   { path: '/product/:id', component: Product },
//   { path: '/marketplace', component: MarketPlace },
//   { path: '/rank', component: Rank },
//   { path: '/profile/:id', component: Profile },
//   { path: '/editproduct/:id', component: EditProductForm },
//   { path: '/community', component: Community },

//   { path: '/login', component: Login },
//   { path: '/signup', component: Signup },
//   { path: '/', component: Home },
//   { path: '/test', component: TestPhoto }
// ];

const routes = {
  guest: {
    route: [
      { path: '/login', component: Login },
      { path: '/signup', component: Signup }
    ],
    redirect: '/login'
  },
  CLIENT: {
    route: [
      { path: '/product/:id', component: Product },
      { path: '/marketplace', component: MarketPlace },
      { path: '/rank', component: Rank },
      { path: '/profile/:id', component: Profile },
      { path: '/editproduct/:id', component: EditProductForm },
      { path: '/community', component: Community },
      { path: '/', component: Home }
    ],
    redirect: '/'
  }
};

// export { allPages };
export default routes;
