import { Col, Row } from "antd";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../../components/productItem";
import Layout from "../../layouts";
import { Product } from "../../store/models/product.model";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>({
    _id: "",
    name: "",
    price: 0,
    description: "",
    category: {
      _id: "",
      name: "",
    },
    quantity: 0,
    sold: 0,
    shipping: false,
    createdAt: "",
  });
  useEffect(() => {
    // 获取产品详情
    (async function () {
      const { data }: AxiosResponse<Product> = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/product/${id}`
      );
      setProduct(data);
    })();
  }, []);
  return (
    <Layout title={product.name} subTitle="">
      <Row gutter={36}>
        <Col span="24">
          <ProductItem showViewProduct={false} product={product} />
        </Col>
      </Row>
    </Layout>
  );
};

export default ProductDetail;
