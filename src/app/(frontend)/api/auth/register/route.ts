import { NextRequest, NextResponse } from 'next/server'
import { gql } from '@/shared/graphql/client'

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as {
    email?: string
    password?: string
  }

  if (!email || !password) {
    return NextResponse.json({ error: 'Некорректные данные' }, { status: 400 })
  }

  const user = await gql.GetUserByEmail({ email })

  if (user.Users.totalDocs > 0) {
    return NextResponse.json({ error: 'Такой пользователь уже существует' }, { status: 409 })
  }

  try {
    await gql.CreateUser({
      email,
      password: password,
      role: 'user',
      signupMethod: 'email',
    })

    return NextResponse.json({ message: 'Пользователь успешно зарегистрирован' }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
