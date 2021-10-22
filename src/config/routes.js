import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProfileEdit from '../pages/ProfileEdit';
import Profile from '../pages/Profile';
import Rank from '../pages/Rank';
const allPages = [
  { path: '/rank', component: Rank },
  { path: '/profile/:id', component: ProfileEdit },
  { path: '/profile', component: Profile },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/', component: Home }
];

export { allPages };
