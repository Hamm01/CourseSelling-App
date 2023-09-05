import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Appbar() {
  const router = useRouter()
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
