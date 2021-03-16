import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/index";
import { Spin } from "antd";
const Home = lazy(() => import("./views/home/Home"));
const Shop = lazy(() => import("./views/shop/Shop"));
const Cart = lazy(() => import("./views/cart/Cart"));
const SignIn = lazy(() => import("./views/signin/Signin"));
const SignUp = lazy(() => import("./views/signup/Signup"));
const PrivateRoute = lazy(() => import("./components/auth/privateRoute"));
const AdminRoute = lazy(() => import("./components/auth/adminRoute"));
const UserDashborad = lazy(() => import("./views/dashborad/UserDashborad"));
const AdminDashborad = lazy(() => import("./views/dashborad/AdminDashborad"));
const Product = lazy(() => import("./views/product"));

const Routes = () => {
  // exact 全匹配
  return (
    <ConnectedRouter history={history}>
      <Suspense
        fallback={
          <div className="fullsceen-center">
            <Spin />
          </div>
        }
      >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={Shop} />
          <Route path="/product/:id" component={Product} />;
          <Route path="/cart" component={Cart} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/user/dashboard" component={UserDashborad} />
          <AdminRoute path="/admin/dashboard" component={AdminDashborad} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
};

export default Routes;
