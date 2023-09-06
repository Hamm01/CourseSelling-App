import { connect } from '@/dbconfig/dbconfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { signupInput } from '@/types/zodTypes'

connect()

export async function POST(req: NextRequest) {
  try {
    const reqbody = await req.json()
    // validation the inputs from request using Zod validation
    const parsedInput = signupInput.safeParse(reqbody)

    if (!parsedInput.success) {
      return NextResponse.json({ error: parsedInput.error }, { status: 411 })
    }
    const { username, password } = parsedInput.data
    console.log(reqbody)

    //Checking that Username exists or not
    const user = await User.findOne({ username })
    if (user) {
      return NextResponse.json(
        { error: 'User already Exists' },
        { status: 400 }
      )
    }

    // Creating password encrypted to save into database
    const salt = await bcryptjs.genSalt(10)
    const hashPassowrd = await bcryptjs.hash(password, salt)

    // Saving the username and encrypted password into database

    const newUser = new User({
      username,
      password: hashPassowrd
    })

    const savedUser = await newUser.save()
    console.log(savedUser)

    return NextResponse.json({
      message: 'User created successfully',
      success: true,
      savedUser
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
