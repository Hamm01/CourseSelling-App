'use client'
import Link from 'next/link'
import axios from 'axios'
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { SignupParams } from '@/types/zodTypes'

export default function SignUp() {
  const router = useRouter()
  const [user, setUser] = React.useState<SignupParams>({
    username: '',
    password: ''
  })

  const [buttonDisabled, setbuttonDisabled] = React.useState(false)

  async function onSignup() {
    try {
      const response = await axios.post('/api/users/signup', user)
      console.log('Signup success', response.data)
      toast.success('User Registered!')
      router.push('/signin')
    } catch (error: any) {
      console.log('Signup failed', error.message)
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
    <div className="signup-container flex justify-center min-h-screen ">
      <Toaster />
      <div className="mt-[100px] flex items-center flex-col">
        <h2 className="text-2xl mb-5">
          Welcome To Course Selling website | Signup below
        </h2>
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
            onClick={onSignup}
          >
            {buttonDisabled ? 'SIGNUP' : 'No SIGNUP'}
          </button>
          <Link href={'/signin'} className="mt-5">
            For Login Click here
          </Link>
        </div>
      </div>
    </div>
  )
}
