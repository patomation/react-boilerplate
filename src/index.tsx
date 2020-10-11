import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './sass/main.scss'
import './images/icons/favicon.ico'

import { App } from './App'

import configureStore from './store/configureStore'

if (module && module.hot) {
  module.hot.accept()
}

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
