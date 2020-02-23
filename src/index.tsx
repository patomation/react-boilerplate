import * as React from 'react'
import { render } from 'react-dom'

import './sass/main.scss'
import './images/icons/favicon.ico'

import App from './App'

if (module && module.hot) {
  module.hot.accept()
}

render(
  <App />,
  document.getElementById('root')
)
