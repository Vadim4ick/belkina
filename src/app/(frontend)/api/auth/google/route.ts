import { NextResponse } from 'next/server'
import axios from 'axios'
import { gql } from '@/shared/graphql/client'
import { JwtService } from '@/shared/services/jwt-service'
import { CookiesService } from '@/shared/services/cookies-service'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 })
  }

  try {
    // 🔷 получить access_token
    const tokenRes = await axios.post(
      'https://oauth2.googleapis.com/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    )

    const { access_token } = tokenRes.data
    if (!access_token) throw new Error('No access_token')

    // 🔷 получить профиль
    const profileRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    const googleProfile = profileRes.data

    const email = googleProfile.email
    if (!email) throw new Error('Google profile has no email')

    // 🔷 найти или создать пользователя
    const exists = await gql.GetUserByEmail({ email })

    let user
    if (exists.Users.totalDocs > 0) {
      user = exists.Users.docs[0]
    } else {
      const newUser = await gql.CreateUser({
        email,
        password: Math.random().toString(36).slice(-10), // случайный пароль
        role: 'user',
        signupMethod: 'google',
        name: googleProfile.name,
      })
      user = newUser.createUser
    }

    // 🔷 выдать JWT
    const accessToken = await JwtService.signAccessToken({
      id: String(user.id),
      email: user.email,
    })
    const refreshToken = await JwtService.signRefreshToken({
      id: String(user.id),
      email: user.email,
    })

    const response = NextResponse.redirect(new URL('/', req.url))

    await CookiesService.setAuthCookies({ accessToken, refreshToken })

    return response
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message || 'Authentication failed' }, { status: 500 })
  }
}
