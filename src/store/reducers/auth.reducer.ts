import { AuthUnionActionType, SIGNIN, SIGNIN_FAIL, SIGNIN_SUCCESS } from "../actions/auth.action";


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
        return {
          ...state,
          signin: {
            loaded: false,
            success: false,
            message: "",
          },
        }
    case SIGNIN_SUCCESS:
        return {
          ...state,
          signin: {
            loaded: true,
            success: true,
            message: ""
          }
        }
    case SIGNIN_FAIL:
        return {
          ...state,
          signin: {
            loaded: true,
            success: false,
            message: ''
          },
        }
    default:
      return state
  }
}