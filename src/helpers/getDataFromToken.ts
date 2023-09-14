import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export async function getTokenData(req: NextRequest) {
  try {
    const tokenCookie = cookies()
    const token = tokenCookie.get('token')?.value || ''
    console.log(token)
    const decodedToken = await jwt.verify(token, process.env.TOKEN_SECRET!)
    return decodedToken
  } catch (error: any) {
    throw new Error(error.message)
  }
}
