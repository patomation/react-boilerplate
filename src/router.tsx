import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './routes/Home'
import { Error404 } from './routes/Error404'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error404 />,
    children: [{ path: '', element: <Home /> }],
  },
])
