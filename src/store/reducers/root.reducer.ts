import { combineReducers } from 'redux'
import { History } from 'history'
import AuthReducer from './auth.reducer'
import { connectRouter } from "connected-react-router"

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
  })

export default createRootReducer