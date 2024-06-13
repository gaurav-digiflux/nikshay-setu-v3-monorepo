import rootSaga from '../saga'
import { rootReducer } from '../reducer'
import { applyMiddleware, legacy_createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

export function initStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = legacy_createStore(
    rootReducer,
    {},
    applyMiddleware(sagaMiddleware)
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}
