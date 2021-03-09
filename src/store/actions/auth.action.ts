/**
 * 登录
 */
export let SIGNIN = "SIGNIN"
export let SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export let SIGNIN_FAIL = "SIGNIN_FAIL"

export interface SigninPayload {
  email: string
  password: string
}

export interface SigninAction {
  type: typeof SIGNIN
  payload: SigninPayload
}

export interface SigninSuccessAction {
  type: typeof SIGNIN_SUCCESS
}

export interface SigninFailAction {
  type: typeof SIGNIN_FAIL,
  message: string // 失败原因
}

export const signin = (payload: SigninPayload): SigninAction => ({
  type: SIGNIN,
  payload,
})

export const signinSuccess = (): SigninSuccessAction => ({
  type: SIGNIN_SUCCESS
})

export const signinFail = (message: string): SigninFailAction => ({
  type: SIGNIN_FAIL,
  message
})

/**
 * 注册
 */
export let SIGNUP = "SIGNUP"
export let SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export let SIGNUP_FAIL = "SIGNUP_FAIL"
export interface SignupPayload {
  name: string
  password: string
  email: string
}

export interface SignupAction {
  type: typeof SIGNUP
  payload: SigninPayload
}

export interface SignupSuccessAction {
  type: typeof SIGNIN_SUCCESS
}

export interface SignupFailAction {
  type: typeof SIGNIN_FAIL
}

export const signup = (payload: SigninPayload) : SignupAction => ({
  type: SIGNUP,
  payload
})
export type AuthUnionActionType = SigninAction | SigninSuccessAction | SigninFailAction