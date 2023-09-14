import toast from 'react-hot-toast'
import axios from 'axios'
import { SigninParams } from '@/types/zodTypes'

export async function onSigninRequest(user: SigninParams) {
  try {
    const response = await axios.post('/api/users/signin', user)
    console.log('Login successful', response.data)
    toast.success('Login Succesful')
    window.location.href = '/'
  } catch (error: any) {
    console.log('signin failed', error.message)
    toast.error(error.message)
  }
}
