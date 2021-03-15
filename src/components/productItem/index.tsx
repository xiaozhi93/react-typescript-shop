import { Button, Card, Col, Row, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../store/models/product.model';
import { addGoodsToCart } from '../../utils/cart';
import { push } from "connected-react-router"
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux';
const { Title, Paragraph } = Typography;

interface ProductItemProps  {
  product: Product,
  showViewProduct?: Boolean
  showCartBtn?:Boolean
}
const ProductItem: FC<ProductItemProps> = ({ product, showViewProduct = true, showCartBtn = true }) => {
  const dispatch = useDispatch()
  // 加入购物车
  const addToCart = () => {
    addGoodsToCart(product)
    dispatch(push('/cart'))
  }
  const showButtons = () => {
    let buttonArray = []
    if (showViewProduct)
      buttonArray.push(
        <Button type="link">
          <Link to={`/product/${product._id}`}>查看详情</Link>
        </Button>
      )
    if (showCartBtn) {
      buttonArray.push(
        <Button type="link" onClick={addToCart}>
          加入购物车
        </Button>
      )
    }
    return buttonArray
  }
  return (
    <Card
      hoverable
      cover={
        <img
          alt={product.name}
          src={`${process.env.REACT_APP_BASE_API_URL}/product/photo/${product._id}`}
        />
      }
      actions={showButtons()}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
      <Row>
        <Col span="12">销量: {product.sold}</Col>
        <Col span="12" style={{ textAlign: "right" }}>
          价格: {product.price}
        </Col>
      </Row>
      <Row>
        <Col span="12">
          上架时间: {dayjs(product.createdAt).format("YYYY-MM-DD")}
        </Col>
        <Col span="12" style={{ textAlign: "right" }}>
          所属分类: {product.category.name}
        </Col>
      </Row>
    </Card>
  )
}

export default ProductItem;
