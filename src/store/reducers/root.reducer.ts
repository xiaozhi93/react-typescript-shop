import { combineReducers } from 'redux'
import { History } from 'history'
import AuthReducer, { AuthState } from './auth.reducer'
import { connectRouter, RouterState } from "connected-react-router"
import ProductReducer, { ProductState } from './product.reducer'

export interface AppState {
  router: RouterState,
  auth: AuthState,
  product: ProductState
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    product: ProductReducer,
  })

export default createRootReducer