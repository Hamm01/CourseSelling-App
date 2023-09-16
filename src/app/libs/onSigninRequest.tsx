import { userState } from '@/store/atoms/userState'
import { useSetRecoilState } from 'recoil'
import toast from 'react-hot-toast'
import axios from 'axios'
import { SigninParams } from '@/types/zodTypes'

export async function onSignin(user: SigninParams) {
  //   const userEmailState = useSetRecoilState(userState)
  try {
    const response = await axios.post('/api/users/signin', user)
    console.log('Login successful', response.data)
    toast.success('Login Succesful')
    // userEmailState({
    //   isLoading: false,
    //   userEmail: response.data.username
    // })

    window.location.href = '/'
  } catch (error: any) {
    console.log('signin failed', error.message)
    toast.error(error.message)
  }
}
