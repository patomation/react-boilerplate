import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './routes/Home'
import { Error404 } from './routes/Error404'

export const routes = [
  {
    path: '/',
    errorElement: <Error404 />,
    children: [{ path: '', element: <Home /> }],
  },
]

export const router = createBrowserRouter(routes)
