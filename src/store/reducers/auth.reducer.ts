import { AuthUnionActionType, SIGNIN } from "../actions/auth.action";


export interface AuthState {
  signin: {
    loaded: boolean
    success: boolean
    message: string
  }
}
const intialState: AuthState = {
  signin: {
    loaded: false,
    success: false,
    message: ''
  }
}
// 接受初始状态和action对象
export default function authReducer(state = intialState, action: AuthUnionActionType) {
  switch (action.type) {
    case SIGNIN:
        console.log('进入reducer')
        return {
          ...state,
          signin: {
            loaded: false,
            success: false,
            message: "",
          },
        }
    default:
      return state
  }
}