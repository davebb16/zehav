import Button from '../components/Button'
import Input from '../components/Input'
import Wrapper from '../components/Wrapper'
import { supabase } from '../createClient'
import { useState, useEffect } from 'react'

function SignUp() {
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

  async function createUser() {
    await supabase
      .from('users')
      .insert([{ first_name: user.firstName, last_name: user.lastName }])
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
        <Input
          type='text'
          placeholder='First name'
          name='firstName'
          onChange={handleChange}
        />
        <Input
          type='text'
          placeholder='Last name'
          name='lastName'
          onChange={handleChange}
        />
      </form>
      <Button type='submit' onClick={createUser}>
        Save
      </Button>
    </Wrapper>
  )
}

export default SignUp
