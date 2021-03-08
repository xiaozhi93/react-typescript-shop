import { takeEvery } from 'redux-saga/effects'
import { AUTH_REGISTER } from '../actions/auth.action'
function handleRegister() {
  
}

export default function* AuthSaga() {
  yield takeEvery(AUTH_REGISTER, handleRegister)
}