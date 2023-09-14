import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

interface User {
  username: string
  password: string
}

export async function onSignupRequest(user: User) {
  //   const router = useRouter()
  console.log(user)
  try {
    const response = await axios.post('/api/users/signup', user)
    console.log('Signup success', response.data)
    toast.success('User Registered!')
    window.location.href = '/'
  } catch (error: any) {
    console.log('Signup failed', error.message)
    toast.error(error.message)
  }
}
