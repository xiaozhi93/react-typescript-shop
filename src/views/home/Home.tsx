import Layout from '../../layouts/index';
import React, { useEffect } from 'react';
import { Col, Row, Typography } from 'antd'
import ProductItem from '../../components/productItem';
import { useDispatch, useSelector } from 'react-redux';
import { queryProduct } from '../../store/actions/product.action';
import { AppState } from '../../store/reducers/root.reducer';
import { ProductState } from '../../store/reducers/product.reducer';
const Title = Typography.Title

const Home = () => {
  const dispatch = useDispatch()
  const { createdAt }  = useSelector<AppState, ProductState>(state => state.product)
  // 获取最新产品
  useEffect(() => {
    dispatch(queryProduct('createdAt'))
  }, [])
  return (
    <Layout title="拉勾电商" subTitle="欢迎来到拉勾电商, 尽情享受吧">
      <Title level={5}>最新上架</Title>
      <Row gutter={[16, 16]}>
        {
          createdAt.map(product => (
            <Col key={product._id} span={6}>
              <ProductItem/>
            </Col>
          ))
        }
      </Row>
    </Layout>
  );
}

export default Home;
