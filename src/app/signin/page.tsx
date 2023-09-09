'use client'
import Link from 'next/link'
import axios from 'axios'
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter, redirect } from 'next/navigation'
import { SigninParams } from '@/types/zodTypes'
import { userState } from '@/store/atoms/userState'
import { useSetRecoilState } from 'recoil'

export default function SignIn() {
  const router = useRouter()
  const userEmailState = useSetRecoilState(userState)
  const [user, setUser] = React.useState<SigninParams>({
    username: '',
    password: ''
  })

  const [buttonDisabled, setbuttonDisabled] = React.useState(false)

  async function onSignin() {
    try {
      const response = await axios.post('/api/users/signin', user)
      console.log('Login successful', response.data)
      toast.success('Login Succesful')
      userEmailState({
        isLoading: false,
        userEmail: response.data.username
      })
      window.location.href = '/'
    } catch (error: any) {
      console.log('signin failed', error.message)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setbuttonDisabled(true)
    } else {
      setbuttonDisabled(false)
    }
  }, [user])

  return (
    <div className="signin-container flex justify-center min-h-screen ">
      <Toaster />
      <div className="mt-[100px] flex items-center flex-col">
        <h2 className="text-2xl mb-5">Welcome Back | Sign-in Below</h2>
        <div className="shadow-lg rounded-md border-2  p-10 flex flex-col lg:w-[400px]">
          <input
            type="text"
            placeholder="Email"
            className="p-3 border-slate-500 border-2 rounded-md mb-3"
            onChange={e => {
              setUser({ ...user, username: e.target.value })
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border-slate-500 border-2 rounded-md mb-3"
            onChange={e => {
              setUser({ ...user, password: e.target.value })
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onSignin}
          >
            {buttonDisabled ? 'SIGNIN' : 'NO SIGNIN'}
          </button>
          <Link href={'/signup'} className="mt-5">
            To Register/Signup
          </Link>
        </div>
      </div>
    </div>
  )
}
