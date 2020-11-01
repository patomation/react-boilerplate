import React, { useEffect, useState } from 'react'

export type Props = {
  title?: string
}

const host = 'http://localhost:3050'

export const FetchData = async <Data extends Record<string, unknown>>(query: string): Promise<Data> => {
  const res = await fetch(`${host}/graphql`, {
    method: 'POST',
    headers: {
      Accept: 'api_version=2',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
  return res.json()
}

interface User {
  name: string,
  id: string
}

const App = ({ title }: Props): React.ReactElement => {
  const [message, setMessage] = useState<string>('')

  const [name, setName] = useState('')

  const [users, setUsers] = useState<User[]>([])

  const fetchMessage = async (): Promise<void> => {
    const response = await fetch(`${host}/`)
    const { data } = await response.json()
    setMessage(data.message)
  }

  const getAllUsers = async () => {
    const query = `
      query {
        getAllUser {
          name
          id
        }
      }
    `
    const { data } = await FetchData<{ data: { getAllUser: User[] }}>(query)
    console.log({ data })
    setUsers(data.getAllUser)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const query = `
      mutation {
        createUser (input: {
          name: "${name}"
        }) {
          name
          id
        }
      }
    `
    console.log('set user')

    await FetchData(query)
    console.log('done')

    setName('')
    getAllUsers()
  }

  useEffect((): void => {
    fetchMessage()
    getAllUsers()
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
        <form onSubmit={handleSubmit}>
          <input name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
          <button type='submit' disabled={!name}> Add User</button>
        </form>
        <ol>
          {users.map(({ name, id }) =>
            <li key={`user_${id}`}>{name}</li>
          )}
        </ol>
      </div>
    </div>
  )
}
export default App
