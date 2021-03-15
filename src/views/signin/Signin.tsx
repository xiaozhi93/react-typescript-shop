import { Button, Form, Input, Result } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Layout from '../../layouts';
import { signin, SigninPayload } from '../../store/actions/auth.action';
import { Jwt } from '../../store/models/auth.model';
import { AuthState } from '../../store/reducers/auth.reducer';
import { AppState } from '../../store/reducers/root.reducer';
import { isAuth } from '../../utils/auth';

const Signin = () => {
  const dispatch = useDispatch()
  const onFinish = (values: SigninPayload ) => {
    dispatch(signin(values)) // 会先进reducer，再进saga
  };
  // 获取登陆信息
  const { signin: signinState } = useSelector<AppState, AuthState>((state) => state.auth)
  const showError = () => {
    if (signinState.loaded && !signinState.success) {
      return (
        <Result
          status="warning"
          title="登录失败"
          subTitle={signinState.message}
        />
      )
    }
  }
  // 登陆成功
  const signinSuccess = () => {
    const auth = isAuth()
    if(auth) {
      const {
        user: { role }
      } = auth as Jwt
      if(role === 0) {
        return <Redirect to="/user/dashboard"/>
      } else {
        return <Redirect to="/admin/dashboard" />
      }
    }
  }
    // 注册交互状态
    return (
      <Layout title="登录" subTitle="嘿, 小伙伴, 立即登录到淘宝电商系统吧">
        {showError()}
        {signinSuccess()}
        <Form onFinish={onFinish}>
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
    )
}

export default Signin;
