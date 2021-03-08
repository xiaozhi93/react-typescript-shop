import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import RootReducer from './reducers/root.reducer'

export default createStore(RootReducer, composeWithDevTools(applyMiddleware()))