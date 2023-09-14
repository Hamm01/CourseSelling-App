import { cookies } from 'next/headers'
import { dbconnect } from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import jwt, { JwtPayload } from 'jsonwebtoken'

dbconnect()

export async function meRequest() {
  try {
    const tokenCookie = cookies()
    const token = tokenCookie.get('token')?.value || ''
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)
    const existingUser = await User.findOne({ _id: decodedToken.id })

    if (existingUser) {
      return {
        msg: 'username found',
        username: existingUser.username
      }
    }
  } catch (error: any) {
    console.error(error.message)
  }
}
