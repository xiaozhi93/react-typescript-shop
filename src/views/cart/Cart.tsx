import { Button, Col, Divider, Input, Row, Typography } from 'antd';
import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cartItem';
import Layout from '../../layouts';
import { Jwt } from '../../store/models/auth.model';
import { Cart } from '../../store/models/cart.model';
import { isAuth } from '../../utils/auth';
import { getCartList } from '../../utils/cart';
const { Title } = Typography;


const CartFC = () => {
  let [cart, setCart] = useState<Cart[]>([])
  const [address, setAddress] = useState('')
  const [totalPrice, setTotalPrice] = useState<number>(() => {
    return 0;
  });

  // 挂载赋值
  useEffect(() => {
    setCart(getCartList())
  }, [])
  // 计算cart, cart某个项的变化触发
  useEffect(() => {
    let total = cart
      .reduce((currentValue, nextValue) => {
        return (currentValue += nextValue.price * nextValue.count);
      }, 0)
      .toFixed(2);
    setTotalPrice(parseFloat(total))
  }, [cart]);
  // 支付按钮
  const getPayUrl = async () => {
    const response = await axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/alipay`, {
        totalAmount: totalPrice,
        subject: "测试订单标题",
        body: "测试订单描述",
        products: cart.map((product) => ({
          count: product.count,
          product: product._id,
        })),
        address: address,
        userId: (isAuth() as Jwt).user._id,
      })
      window.location.href = response.data.result;
  };

  const showButton = () => {
    return isAuth() ? (
      <Button onClick={getPayUrl}>提交订单</Button>
    ) : (
      <Button>
        <Link to="/signin">登录</Link>
      </Button>
    );
  };

  const showCart = () => {
    return (
      <table style={{ width: "100%" }}>
        <thead className="ant-table-thead">
          <tr>
            <th className="ant-table-cell">商品封面</th>
            <th className="ant-table-cell">商品名称</th>
            <th className="ant-table-cell">商品价格</th>
            <th className="ant-table-cell">商品分类</th>
            <th className="ant-table-cell">商品数量</th>
            <th className="ant-table-cell">操作</th>
          </tr>
        </thead>
        <tbody className="ant-table-tbody">
          {cart.map((item) => (
            <CartItem key={item._id} setCart={setCart} product={item} />
          ))}
        </tbody>
      </table>
    )
  }
  return (
    <Layout title="购物车" subTitle="付款吧, 我就是你的了">
      <Row gutter={16}>
        <Col span="16">{showCart()}</Col>
        <Col span="8">
          <Row>
            <Input
              value={address}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAddress(event.target.value)
              }
              placeholder="请输入收货地址"
            />
          </Row>
          <Divider />
          <Row>
            <Title level={5}>商品总价: {totalPrice}</Title>
          </Row>
          <Row>
            {showButton()}
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default CartFC;
