import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState } from '@/store/atoms/userState'
import { isUserLoading } from '@/store/selectors/isuserLoading'
import { userEmailState } from '@/store/selectors/userEmail'

type USERemail = string | null

export default function Appbar() {
  const router = useRouter()
  const setUser = useSetRecoilState(userState)
  const userLoading: boolean = useRecoilValue(isUserLoading)
  const userEmail: any = useRecoilValue(userEmailState)
  async function logoutRequest() {
    try {
      const response = await axios.get('/api/users/logout')
      console.log('Logout Succesful', response.data)
      toast.success('Logout succesful')
      setUser({
        isLoading: false,
        userEmail: null
      })
      router.push('/signin')
    } catch (error: any) {
      console.log('Error occuerd: ' + error.message)
    }
  }
  async function init() {
    try {
      const response = await axios.get('/api/users/me')
      const username = response.data.username
      if (username) {
        setUser({ isLoading: false, userEmail: username })
      } else {
        setUser({ isLoading: false, userEmail: null })
      }
    } catch (error: any) {
      setUser({ isLoading: false, userEmail: null })
      console.error(error.message)
    }
  }

  useEffect(() => {
    init()
  }, [userEmail])

  if (userLoading) {
    return (
      <div className="appbar-container w-100 flex items-center justify-between px-[50px] py-8 h-10 bg-slate-800 ">
        <></>
      </div>
    )
  }

  if (userEmail) {
    return (
      <div className="appbar-container w-100 flex items-center justify-between px-[50px] py-8 h-10 bg-slate-800 ">
        <Link href={'/'} className="text-xl font-medium text-slate-100">
          CourseSellingApp
        </Link>
        <div className="flex items-center justify-between">
          <h2 className="text-white text-lg mx-[20px]">
            Welcome{' '}
            <span className="text-rose-600	 text-lg p-2 rounded-sm">
              {userEmail.split('@')[0].toUpperCase()}{' '}
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
