import axios from 'axios'
import { takeEvery } from 'redux-saga/effects'
import { SIGNIN, SigninAction } from '../actions/auth.action'
function* handleSignin(action: SigninAction) {
  try {
    yield axios.post(
      `${process.env.REACT_APP_BASE_API_URL}/signup`,
      action.payload
    )
    // 登录成功
  } catch (error) {
    // 登录失败
  }
}

export default function* AuthSaga() {
  yield takeEvery(SIGNIN, handleSignin)
}