import React from 'react'
import './Home.css'
import Center from '../../components/Center'

export function Home() {
  return (
    <section className="home">
      <Center>
        <h1 className="home__title">
          {'< ReactBoilerplate />'}
        </h1>
      </Center>
    </section>
  )
}
export default Home
