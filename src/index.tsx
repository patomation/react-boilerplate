import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './images/icons/favicon.ico'

import App from './App'

if (module && module.hot) {
  module.hot.accept()
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
