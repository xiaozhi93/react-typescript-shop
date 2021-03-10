import { Col, Input, Row } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import CartItem from '../../components/cartItem';
import Layout from '../../layouts';
import { Cart } from '../../store/models/cart.model';
import { getCartList } from '../../utils/cart';

const CartFC = () => {
  let [cart, setCart] = useState<Cart[]>([])
  const [address, setAddress] = useState('')
  // 挂载赋值
  useEffect(() => {
    setCart(getCartList())
  }, [])
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
          {/* <Divider /> */}
          <Row>
            {/* <TotalPrice cart={cart} setTotalPrice={setTotalPrice} /> */}
          </Row>
          <Row>
            {/* <Pay totalPrice={totalPrice} cart={cart} address={address} /> */}
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default CartFC;
