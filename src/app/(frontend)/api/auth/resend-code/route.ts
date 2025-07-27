import { NextResponse } from 'next/server'
import { NodemailerService } from '@/shared/services/nodemailer.service'

export async function POST(req: Request) {
  const body = await req.json()
  const { token, email: rawEmail } = body

  try {
    let email = rawEmail

    if (token) {
      const { payload } = await NodemailerService.decode(token)
      email = payload.email
    }

    if (!email) {
      return NextResponse.json({ message: 'Email не указан' }, { status: 400 })
    }

    const code = NodemailerService.generateCode()
    const newToken = await NodemailerService.signCode(email, code)

    await NodemailerService.sendCode(email, code, newToken)

    return NextResponse.json({ message: 'Код отправлен повторно', token: newToken })
  } catch {
    return NextResponse.json({ message: 'Не удалось отправить код повторно' }, { status: 400 })
  }
}
