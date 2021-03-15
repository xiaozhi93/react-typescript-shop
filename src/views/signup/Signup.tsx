import { Button, Form, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../layouts';
import { signup, SignupPayload } from '../../store/actions/auth.action';

const Register = () => {
  const dispatch = useDispatch()
  const onFinish = (values: SignupPayload) => {
    dispatch(signup(values)) 
  }
  // 注册成功
  // 注册失败
  return (
    <Layout title="登录" subTitle="嘿, 小伙伴, 立即登录到淘宝电商系统吧">
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Register;
