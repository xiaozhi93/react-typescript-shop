import { combineReducers } from 'redux'
import { History } from 'history'
import AuthReducer, { AuthState } from './auth.reducer'
import { connectRouter, RouterState } from "connected-react-router"

export interface AppState {
  router: RouterState,
  auth: AuthState
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
  })

export default createRootReducer