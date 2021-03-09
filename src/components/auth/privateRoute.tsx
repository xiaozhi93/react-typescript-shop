import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from "react-router-dom"
import { isAuth } from '../../utils/auth';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}
// 登陆进入指定路由，没有登陆跳转登陆
// 继承路由
const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const auth = isAuth()
        if (auth) {
          return <Component {...props} />
        }
        return <Redirect to="/signin" />
      }}
    />
  )
}

export default PrivateRoute
