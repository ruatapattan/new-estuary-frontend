import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProfileEdit from '../pages/ProfileEdit';
import Profile from '../pages/Profile';
import Rank from '../pages/Rank';
import MarketPlace from '../pages/MarketPlace';
<<<<<<< HEAD
import TestPhoto from '../pages/TestPhoto';
const allPages = [
=======
import CreactProduct from '../pages/CreactProduct';
import Product from '../pages/Product';
const allPages = [
  { path: '/product', component: Product },
>>>>>>> ba610492221e6bed0aab0679491bcd8a6e1a4afb
  { path: '/marketplace', component: MarketPlace },
  { path: '/rank', component: Rank },
  { path: '/profile/:id', component: ProfileEdit },
  { path: '/profile', component: Profile },
<<<<<<< HEAD
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/', component: Home },
  { path: '/test', component: TestPhoto },
=======
  { path: '/creactproduct', component: CreactProduct },

  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/', component: Home }
>>>>>>> ba610492221e6bed0aab0679491bcd8a6e1a4afb
];

export { allPages };
