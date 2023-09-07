import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

type EmailState = {
  email: string
}
export default function Appbar() {
  const router = useRouter()
  const [user, setUser] = React.useState<EmailState>({
    email: ''
  })
  async function logoutRequest() {
    try {
      const response = await axios.get('/api/users/logout')
      console.log('Logout Succesful', response.data)
      toast.success('Logout succesful')
      setUser({ email: '' })
      router.push('/signin')
    } catch (error: any) {
      console.log('Error occuerd: ' + error.message)
    }
  }

  useEffect(() => {
    async function init() {
      try {
        const response = await axios.get('/api/users/me')
        const username = response.data.username
        if (username) {
          setUser({ email: username })
        }
      } catch (error: any) {
        console.error(error.message)
      }
    }
    init()
  }, [])
  if (user.email) {
    return (
      <div className="appbar-container w-100 flex items-center justify-between px-[50px] py-8 h-10 bg-slate-800 ">
        <Link href={'/'} className="text-xl font-medium text-slate-100">
          CourseSellingApp
        </Link>
        <div className="flex items-center justify-between">
          <h2 className="text-white text-lg mx-[20px]">
            Welcome{' '}
            <span className="text-rose-600	 text-lg p-2 rounded-sm">
              {user.email.split('@')[0].toUpperCase()}{' '}
            </span>{' '}
          </h2>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-[20px]"
            onClick={() => {
              router.push('/courses')
            }}
          >
            Courses
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={logoutRequest}
          >
            Logout
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="appbar-container w-100 flex items-center justify-between px-[50px] py-8 h-10 bg-slate-800 ">
      <Link href={'/'} className="text-xl font-medium text-slate-100">
        CourseSellingApp
      </Link>
      <div>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-[20px]"
          onClick={() => {
            router.push('/signup')
          }}
        >
          Signup
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            router.push('/signin')
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}
