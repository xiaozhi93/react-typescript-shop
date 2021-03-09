import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/index'
import Home from './views/home/Home'
import Shop from './views/shop/Shop'
import Cart from './views/cart/Cart'
import SignIn from './views/signin/Signin'
import SignUp from './views/signup/Signup'
import PrivateRoute from './components/auth/privateRoute'
import AdminRoute from './components/auth/adminRoute'
import UserDashborad from './views/dashborad/UserDashborad'
import AdminDashborad from './views/dashborad/AdminDashborad'

const  Routes = () => {
  // exact 全匹配
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/user/dashboard" component={UserDashborad} />
        <AdminRoute path="/admin/dashboard" component={AdminDashborad} />
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes;
