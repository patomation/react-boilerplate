import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { mount } from 'enzyme'

import { App } from './App'
import configureStore from './configureStore'

const store = configureStore()

describe('<App />', () => {
  it('renders', () => {
    mount(<Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>)
  })
})
