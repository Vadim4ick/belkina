import { NextResponse } from 'next/server'
import { NodemailerService } from '@/shared/services/nodemailer.service'

export async function POST(req: Request) {
  const { token } = await req.json()

  try {
    const { payload } = await NodemailerService.decode(token)
    const email = payload.email

    const code = NodemailerService.generateCode()
    const newToken = await NodemailerService.signCode(email, code)

    await NodemailerService.sendCode(email, code, newToken)

    return NextResponse.json({ message: 'Код отправлен повторно', token: newToken })
  } catch {
    return NextResponse.json({ message: 'Не удалось отправить код повторно' }, { status: 400 })
  }
}
