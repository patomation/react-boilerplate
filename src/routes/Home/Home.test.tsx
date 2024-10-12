import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'
import {
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom'

describe('<Home />', () => {
  it('renders', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <Home />,
      },
    ])
    render(<RouterProvider router={router} />)
  })
})
