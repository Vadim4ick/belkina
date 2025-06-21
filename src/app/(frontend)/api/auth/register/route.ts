import { NextRequest, NextResponse } from 'next/server'
import { createUser, emailExists } from '@/shared/graphql/user'

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as {
    email?: string
    password?: string
  }

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const isUsed = await emailExists(email)

  if (isUsed) {
    return NextResponse.json({ error: 'E-mail already used' }, { status: 409 })
  }

  await createUser(email, password, 'user', 'email')

  return NextResponse.json({ ok: true })
}
