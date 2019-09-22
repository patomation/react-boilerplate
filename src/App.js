import React from 'react'

import ExampleContainer from './containers/example-container/example-container.js'
import ExampleComponent from './components/example-component/example-component.js'

const App = () => {
  return (
    <div className='app'>
      React App
      <ExampleContainer title="I like apples">
        <ExampleComponent />
      </ExampleContainer>
    </div>
  )
}
export default App
