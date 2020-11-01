import React, { useEffect, useState } from 'react'

export type Props = {
  title?: string
}

const App = ({ title }: Props): React.ReactElement => {
  const [message, setMessage] = useState<string>('')

  const fetchMessage = async (): Promise<void> => {
    const response = await fetch('http://localhost:3050/')
    const { data } = await response.json()
    setMessage(data.message)
  }

  useEffect((): void => {
    fetchMessage()
  }, [])

  return (
    <div className='app'>
      <div style={{
        color: 'gold',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        textAlign: 'center'
      }}>
        <h1>{title}</h1>
        <p>{!message ? 'requesting message from server' : `message from server: "${message}"`}</p>
      </div>
    </div>
  )
}
export default App
