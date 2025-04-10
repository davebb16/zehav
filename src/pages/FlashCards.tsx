import Wrapper from '../components/Wrapper'
import { supabase } from '../createClient'
import { useState, useEffect } from 'react'

export default function FlashCards() {
  // Todo: enable RLS in supa
  interface User {
    id: number
    first_name: string
    last_name: string
  }

  const [users, setUsers] = useState<User[] | null>(null)
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  })

  console.log('user', user)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const { data } = await supabase.from('users').select('*')
    setUsers(data)
    console.log(data)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <Wrapper>
      <div>
        {users &&
          users.map((user) => (
            <div key={user.id}>
              {user.id} {user.first_name} {user.last_name}
            </div>
          ))}
      </div>
      <form>
        <input
          type='text'
          placeholder='First name'
          name='firstName'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Last name'
          name='lastName'
          onChange={handleChange}
        />
      </form>
    </Wrapper>
  )
}
