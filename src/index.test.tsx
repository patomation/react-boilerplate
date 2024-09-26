import React from 'react'
import { render } from '@testing-library/react'
import {
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom'
import { routes } from './router'

const router = createMemoryRouter(routes)

describe('App index', () => {
  it('renders', () => {
    render(<RouterProvider router={router} />)
  })
})
