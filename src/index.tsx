import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './sass/main.scss'
import './images/icons/favicon.ico'

import { App } from './App'

import configureStore from './configureStore'

if (module && module.hot) {
  module.hot.accept()
}

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
