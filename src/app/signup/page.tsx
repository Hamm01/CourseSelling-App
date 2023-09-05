'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function SignUp() {
  return (
    <div className="signup-container flex justify-center min-h-screen ">
      <div className="mt-[100px] flex items-center flex-col">
        <h2 className="text-2xl mb-5">
          Welcome To Course Selling website | Signup below
        </h2>
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
            SIGNUP
          </button>
          <Link href={'/signin'} className="mt-5">
            For Login Click here
          </Link>
        </div>
      </div>
    </div>
  )
}
