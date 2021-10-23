import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProfileEdit from '../pages/ProfileEdit';
import Profile from '../pages/Profile';
import Rank from '../pages/Rank';
import MarketPlace from '../pages/MarketPlace';
import CreactProduct from '../pages/CreactProduct';
import Product from '../pages/Product';
const allPages = [
  { path: '/product/:id', component: Product },
  { path: '/marketplace', component: MarketPlace },
  { path: '/rank', component: Rank },
  { path: '/profile/:id', component: ProfileEdit },
  { path: '/profile', component: Profile },
  { path: '/creactproduct', component: CreactProduct },

  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/', component: Home }
];

export { allPages };
