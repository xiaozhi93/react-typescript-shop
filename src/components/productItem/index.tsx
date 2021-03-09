import { Button, Card, Typography } from 'antd';
import React from 'react';
const { Text, Title } = Typography;

const ProductItem = () => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    actions={[
      <Button>详情</Button>,
      <Button>加入购物车</Button>
    ]}
  >
    <Title level={5}>标题</Title>
    <Text>内容</Text>
  </Card>
  );
}

export default ProductItem;
