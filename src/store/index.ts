import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/root.reducer'
import createSagaMiddlerware from 'redux-saga'
import rootSaga from './sagas/root.saga'

export const history = createHashHistory() // 创建hash路由
const sagaMiddleware = createSagaMiddlerware() // saga必须调用


const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history),sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store