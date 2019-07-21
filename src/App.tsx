import React from 'react'
import ReduxConsumerExample from './components/ReduxConsumerExample'
import { Link, Switch, Route } from 'react-router-dom'

export type AppProps = {
  message?: string
}

const Home = (): React.ReactElement => (<div> <h1>Home</h1> </div>)
const About = (): React.ReactElement => (<div> <h1>About</h1> </div>)

export const App = (): React.ReactElement => {
  return (
    <div className="app">
      <header>
        <h1>React + Redux + Router</h1>
        <ReduxConsumerExample/>
        <Link to={'/about'}>ABOUT</Link>
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </main>
    </div>
  )
}
