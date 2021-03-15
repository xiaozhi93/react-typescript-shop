import axios, { AxiosResponse } from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { SIGNIN, SigninAction, signinFail, signinSuccess, SIGNUP, SignupAction, signupFail, signupSuccess } from '../actions/auth.action'
import { Jwt } from '../models/auth.model'

function* handleSignin(action: SigninAction) {
  try {
    const response: AxiosResponse<Jwt> = yield axios.post(
      `${process.env.REACT_APP_BASE_API_URL}/signin`,
      action.payload
    )
    // 登录成功
    localStorage.setItem("jwt", JSON.stringify(response.data))
    yield put(signinSuccess())
  } catch (error) { // catch 为any或者unknow类型
    // 登录失败
    yield put(signinFail(error.response.data.error))
  }
}

function* handleSignup(action: SignupAction) {
  try {
    yield axios.post(`${process.env.REACT_APP_BASE_API_URL}/signup`, action.payload)
    yield put(signupSuccess())
  } catch (error) {
    yield put(signupFail(error.response.data.error))
  }
}

export default function* AuthSaga() {
  yield takeEvery(SIGNIN, handleSignin)
  yield takeEvery(SIGNUP, handleSignup)
}