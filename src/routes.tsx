import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/home/Home'
import Shop from './views/shop/Shop'
import Cart from './views/cart/Cart'
import SignIn from './views/signin/Signin'

function App() {
  // exact 全匹配
  return (
    <HashRouter>
        <Route path="/" component={Home} exact/>
        <Route path="/shop" component={Shop}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/signin" component={SignIn}/>
    </HashRouter>
  );
}

export default App;
