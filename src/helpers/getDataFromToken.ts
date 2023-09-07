import { NextRequest } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'

export async function getTokenData(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value || ''
    const decodedToken = await jwt.verify(token, process.env.TOKEN_SECRET!)
    console.log(decodedToken)
    return decodedToken
  } catch (error: any) {
    throw new Error(error.message)
  }
}
