import { Button, Card, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../store/models/product.model';
import { addGoodsToCart } from '../../utils/cart';
const { Text, Title } = Typography;

interface ProductItemProps  {
  product: Product
}
const ProductItem: FC<ProductItemProps> = ({ product }) => {
  // 加入购物车
  const addToCart = () => {
    addGoodsToCart(product)
  }
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      actions={[
        <Button type="link">
          <Link to={`/product/${product._id}`}>查看详情</Link>
        </Button>,
        <Button onClick={addToCart} type="link">加入购物车</Button>,
      ]}
    >
      <Title level={5}>标题</Title>
      <Text>内容</Text>
    </Card>
  )
}

export default ProductItem;
