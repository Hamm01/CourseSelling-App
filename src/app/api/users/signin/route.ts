import { connect } from '@/dbconfig/dbconfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { loginInput } from '@/types/zodTypes'
import jwt from 'jsonwebtoken'
import type { PayloadData } from '@/types/payloadType'

connect()

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json()
    // validating the inputs from request using Zod validation
    const parsedInput = loginInput.safeParse(reqBody)
    if (!parsedInput.success) {
      return NextResponse.json({ error: parsedInput.error }, { status: 411 })
    }
    const { username, password } = parsedInput.data

    //checking username exits in db or not

    const user = await User.findOne({ username })
    if (!user) {
      return NextResponse.json(
        { message: 'Username not exist' },
        { status: 400 }
      )
    }

    //checking the password is correct or not

    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 403 })
    }

    // Creating payload and sending token using cookie in response
    const payload: PayloadData = {
      id: user._id,
      username: user.username,
      password: user.password
    }

    const token = jwt.sign(payload, process.env.TOKEN_SECRET!, {
      expiresIn: '1d'
    })

    const response = NextResponse.json({
      msg: 'Login Successfull',
      success: true,
      username: user.username
    })
    response.cookies.set('token', token, { httpOnly: true })

    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
