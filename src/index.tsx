import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import './sass/main.scss'
import './images/icons/favicon.ico'

import rootReducer from './reducers'

import { App } from './App'

import thunkMiddleware from 'redux-thunk'
const loggerMiddleware = createLogger()

if (module && module.hot) {
  module.hot.accept()
}

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // Enables dispatch() functions
    loggerMiddleware // logs actions
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
