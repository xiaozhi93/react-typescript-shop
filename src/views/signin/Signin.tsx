import { Button, Form, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../layouts';
import { signin, SigninPayload } from '../../store/actions/auth.action';

const Signin = () => {
  const dispatch = useDispatch()
  const onFinish = (values: SigninPayload ) => {
    dispatch(signin(values)) // 会先进reducer，再进saga
  };
  return (
    <Layout title="登录" subTitle="嘿, 小伙伴, 立即登录到拉钩电商系统吧">
      <Form
      onFinish={onFinish}
    >
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
    </Layout>
    
  );
}

export default Signin;
