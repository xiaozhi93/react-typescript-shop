import { Button, Form, Input, Result } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../layouts";
import { signup, SignupPayload } from "../../store/actions/auth.action";
import { AuthState } from "../../store/reducers/auth.reducer";
import { AppState } from "../../store/reducers/root.reducer";

const Register = () => {
  const dispatch = useDispatch();
  const { signup: signupResult } = useSelector<AppState, AuthState>((state) => state.auth);

  const onFinish = (values: SignupPayload) => {
    dispatch(signup(values));
  };
  // 注册成功
  const showSuccess = () => {
  if (signupResult.loaded && signupResult.success) {
    return (
      <Result
        status="success"
        title="注册成功"
        extra={[
          <Button type="primary">
            <Link to="/signin">登录</Link>
          </Button>,
        ]}
      />
    );
  }
};

  // 注册失败
  return (
    <Layout title="登录" subTitle="嘿, 小伙伴, 立即登录到淘宝电商系统吧">
      { showSuccess()}
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Register;
