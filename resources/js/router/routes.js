import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Eat from '../pages/Eat'

export const routes = [
  {path: '/login', component: Login},
  {path: '/register', component: SignUp},
  {path: '/', component: Home},
  {path: '/products', component: Product},
  {path: '/eat', component: Eat},
];