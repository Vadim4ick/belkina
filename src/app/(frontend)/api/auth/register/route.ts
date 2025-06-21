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

  await gql.CreateUser({
    email,
    password,
    role: 'user',
    signupMethod: 'email',
  })

  return NextResponse.json({ ok: true })
}
