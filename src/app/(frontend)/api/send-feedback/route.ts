import { NextRequest, NextResponse } from 'next/server'
import { NodemailerService } from '@/shared/services/nodemailer.service'
import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const gql = await getServerAuthGqlClient({})

  try {
    const { email, token } = (await req.json()) as { email: string; token: string }

    if (!email) {
      return NextResponse.json({ message: 'Email не указан' }, { status: 400 })
    }

    if (!token) {
      return NextResponse.json({ message: 'Токен не указан' }, { status: 400 })
    }

    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await res.json()

    if (!data.success || data.score < 0.5) {
      return NextResponse.json({ success: false, message: 'Капча не пройдена' }, { status: 400 })
    }

    const { MailSend } = await gql.GetMailSend()

    if (!MailSend || !MailSend?.subject) {
      return NextResponse.json({ message: 'Рассылка не найдена' }, { status: 404 })
    }

    const htmlContent = await convertLexicalToHTML({
      data: MailSend.content,
    })

    await NodemailerService.transporter.sendMail({
      from: `"Команда BELKINA.ONLINE" <${process.env.SMTP_USER}>`,
      to: email,
      subject: MailSend.subject,
      html: htmlContent, // richText будет храниться в JSON, можно прогонять через render
    })

    return NextResponse.json({
      message: 'Проверьте вашу почту. Письмо отправлено',
      success: true,
    })
  } catch {
    return NextResponse.json({ message: 'Неизвестная ошибка при отправки письма' }, { status: 500 })
  }
}
