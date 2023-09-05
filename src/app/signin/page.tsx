'use client'
import Link from 'next/link'

export default function signIn() {
  return (
    <div className="signin-container flex justify-center min-h-screen ">
      <div className="mt-[100px] flex items-center flex-col">
        <h2 className="text-2xl mb-5">Welcome Back | Sign-in Below</h2>
        <div className="shadow-lg rounded-md border-2  p-10 flex flex-col lg:w-[400px]">
          <input
            type="text"
            placeholder="Email"
            className="p-3 border-slate-500 border-2 rounded-md mb-3"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-3 border-slate-500 border-2 rounded-md mb-3"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            SIGNIN
          </button>
          <Link href={'/signup'} className="mt-5">
            To Register/Signup
          </Link>
        </div>
      </div>
    </div>
  )
}
