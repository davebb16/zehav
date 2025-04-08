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

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const { data } = await supabase.from('users').select('*')
    setUsers(data)
    console.log(data)
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
    </Wrapper>
  )
}
