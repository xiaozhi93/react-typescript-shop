/**
 * 登录
 */
export let SIGNIN = "SIGNIN"
export let SIGNIN_SUCCESS = "SIGNIN_SUCCESS"

export interface SigninPayload {
  email: string
  password: string
}

export interface SigninAction {
  type: typeof SIGNIN
  payload: SigninPayload
}

export const signin = (payload: SigninPayload): SigninAction => ({
  type: SIGNIN,
  payload,
})

export type AuthUnionActionType = SigninAction