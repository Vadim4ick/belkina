import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { JwtService } from '@/shared/services/jwt-service'
import { gql } from '@/shared/graphql/client'

export async function GET() {
  const cookie = await cookies()

  const token = cookie.get('accessToken')?.value

  if (!token) {
    return NextResponse.json({ user: null })
  }

  try {
    const payload = await JwtService.verifyToken(token)

    const res = await gql.GetUserByEmail({ email: payload.email })
    const user = res.Users?.docs?.[0] || null

    if (!user) {
      cookie.delete('accessToken')
      cookie.delete('refreshToken')

      return NextResponse.json({ user: null })
    }

    return NextResponse.json({ user })
  } catch {
    return NextResponse.json({ user: null })
  }
}
