import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import { App } from './App'
import configureStore from './store/configureStore'

const store = configureStore()

describe('<App />', () => {
  it('renders', () => {
    mount(<Provider store={store}>
      <App />
    </Provider>)
  })
})
