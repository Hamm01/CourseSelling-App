import { connect } from '@/dbconfig/dbconfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import { getTokenData } from '@/helpers/getDataFromToken'

connect()

export async function GET(request: NextRequest) {
  try {
    const responseData: any = await getTokenData(request)
    const existingUser: any = await User.findOne({ _id: responseData.id })
    if (existingUser) {
      return NextResponse.json({
        msg: 'username found',
        username: existingUser.username
      })
    }
  } catch (error: any) {
    return NextResponse.json({ msg: error.message }, { status: 500 })
  }
}
