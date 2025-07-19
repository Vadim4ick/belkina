/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import axios from 'axios'
import { gql } from '@/shared/graphql/client'
import { JwtService } from '@/shared/services/jwt-service'
import { CookiesService } from '@/shared/services/cookies-service'

// тут глобально, чтобы `Set` жил между запросами
const usedCodes = new Set<string>()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 })
  }

  // 👮‍♂️ Проверка на повторное использование
  if (usedCodes.has(code)) {
    return NextResponse.json({ error: 'Code already used' }, { status: 400 })
  }

  try {
    console.log('🚀 Exchange params', {
      code,
      client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
      client_secret: process.env.YANDEX_CLIENT_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_YANDEX_REDIRECT_URI,
    })

    // 🔷 получить access_token
    const tokenRes = await axios.post(
      'https://oauth.yandex.ru/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID!,
        client_secret: process.env.YANDEX_CLIENT_SECRET!,
        redirect_uri: process.env.NEXT_PUBLIC_YANDEX_REDIRECT_URI!,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    )

    usedCodes.add(code)

    const { access_token } = tokenRes.data
    if (!access_token) throw new Error('No access_token')

    // 🔷 получить профиль
    const profileRes = await axios.get('https://login.yandex.ru/info', {
      params: { format: 'json' },
      headers: { Authorization: `OAuth ${access_token}` },
    })

    const yandexProfile = profileRes.data

    const email = yandexProfile.default_email
    if (!email) throw new Error('Yandex profile has no email')

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
        name: yandexProfile.display_name,
        signupMethod: 'yandex',
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
    console.error('Yandex token error', err.response?.data || err.message)

    const errorDescription =
      err.response?.data?.error_description || err.message || 'Authentication failed'

    let userMessage = 'Произошла ошибка при авторизации. Пожалуйста, попробуйте снова.'

    if (errorDescription.includes('expired') || errorDescription.includes('invalid_grant')) {
      userMessage = 'Код авторизации устарел. Пожалуйста, попробуйте войди снова.'
    }

    return NextResponse.json(
      {
        error: errorDescription,
        message: userMessage,
      },
      { status: 400 },
    )
  }
}
