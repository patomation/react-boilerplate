import React from 'react'
import { Button } from './components/ReduxHooksExample'

export type AppProps = {
  message?: string
}

export const App = (): React.ReactElement => {
  return (
    <div className="app">
      <header>
        <h1>React + Redux + Router</h1>
        <Button/>
        <a href={'/about'}>ABOUT</a>
      </header>
    </div>
  )
}
