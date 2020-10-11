import { applyMiddleware, createStore, compose, Store, StoreEnhancer } from 'redux'
import thunkMiddleware from 'redux-thunk'

// import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureStore (preloadedState = {}): Store {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const enhancers = [middlewareEnhancer]
  const composedEnhancers: StoreEnhancer<unknown, Record<string, unknown>> = compose(...enhancers)

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // console.warn('hot load');
    // store.replaceReducer(rootReducer)
  }

  return store
}
