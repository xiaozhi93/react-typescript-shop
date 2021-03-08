import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <Menu
        mode="horizontal"
      >
        <Menu.Item>
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/shop">商城</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/cart">购物车</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/cart">购物车</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/signin">登录</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/signup">注册</Link>
        </Menu.Item>
      </Menu>
  );
}

export default Navigator;
