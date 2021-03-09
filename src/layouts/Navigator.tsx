import { Menu } from 'antd';
import { RouterState } from 'connected-react-router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Jwt } from '../store/models/auth.model';
import { AppState } from '../store/reducers/root.reducer';
import { isAuth } from '../utils/auth';

function useActive(currentPath: string, path: string): string {
  return currentPath === path ? "ant-menu-item-selected" : ""
}

const Navigator = () => {
  const router = useSelector<AppState, RouterState>((state) => state.router)
  const pathname = router.location.pathname
  const isHome = useActive(pathname, '/')
  const isShop = useActive(pathname, '/shop')
  const isCart = useActive(pathname, '/cart')
  const isSignin = useActive(pathname, '/signin')
  const isSignup = useActive(pathname, '/signup')
  // 根据角色展示dashboard
  const getDashboardUrl = () => {
    let url = '/user/dashboard'
    if(isAuth()) {
      const { user: { role }} = isAuth() as Jwt
      if(role === 1) {
        url = '/admin/dashboard'
      }
    }
    return url
  }
  const isDashboard = useActive(pathname, getDashboardUrl())
  return (
    <Menu mode="horizontal">
      <Menu.Item className={isHome}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item className={isCart}>
        <Link to="/cart">购物车</Link>
      </Menu.Item>
      {!isAuth() && (
        <>
          <Menu.Item className={isSignin}>
            <Link to="/signin">登录</Link>
          </Menu.Item>
          <Menu.Item className={isSignup}>
            <Link to="/signup">注册</Link>
          </Menu.Item>
        </>
      )}
      {isAuth() && (
        <>
          <Menu.Item className={isDashboard}>
            <Link to={getDashboardUrl()}>Dashborad</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  )
}

export default Navigator;
