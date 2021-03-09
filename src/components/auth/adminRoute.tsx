import React, { FC } from "react"
import { Route, RouteProps } from "react-router"
import { Redirect } from "react-router-dom"
import { Jwt } from "../../store/models/auth.model"
import { isAuth } from "../../utils/auth"

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}
// 登陆进入指定路由，没有登陆跳转登陆
// 继承路由
const AdminRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const auth = isAuth()
        if (auth) {
          const { user: { role } } = auth as Jwt
          if(role === 1) {
            return <Component {...props} />
          }   
        }
        return <Redirect to="/signin" />
      }}
    />
  )
}

export default AdminRoute
