import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

import './index.css'
import './images/icons/favicon.ico'

if (module && module.hot) {
  module.hot.accept()
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)
