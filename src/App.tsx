import React from 'react'
import ReduxConsumerExample from './components/ReduxConsumerExample'

export type AppProps = {
  message?: string
}

export const App = (): React.ReactElement => {
  return (
    <div className="app">
      <header>
        <h1>React + Redux + Router</h1>
        <ReduxConsumerExample/>
        <a href={'/about'}>ABOUT</a>
      </header>
    </div>
  )
}
