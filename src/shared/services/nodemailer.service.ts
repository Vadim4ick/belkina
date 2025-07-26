import { SignJWT, jwtVerify } from 'jose'
import nodemailer from 'nodemailer'

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET!)

export class NodemailerService {
  private static transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  static generateCode(): string {
    return Math.floor(1000 + Math.random() * 9000).toString()
  }

  // Отправка письма с кодом
  static async sendCode(email: string, code: string, token: string): Promise<void> {
    const verifyLink = `${process.env.NEXT_PUBLIC_SERVER_URL}?token=${token}`

    await this.transporter.sendMail({
      from: `"Поддержка" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Код подтверждения',
      html: `
      <p>Ваш код подтверждения: <b>${code}</b></p>
      <p>Код действителен 10 минут.</p>
      <p>Или просто нажмите: <a href="${verifyLink}">Подтвердить Email</a></p>
    `,
    })
  }

  // Создание JWT с кодом
  static async signCode(email: string, code: string): Promise<string> {
    return await new SignJWT({ email, code })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('10m') // токен живёт 10 минут
      .sign(secret)
  }

  // Верификация JWT и сравнение с введённым кодом
  static async verifyCodeToken(token: string, inputCode: string): Promise<boolean> {
    try {
      const { payload } = await jwtVerify<{ email: string; code: string }>(token, secret)
      return payload.code === inputCode
    } catch {
      return false
    }
  }

  static async decode(token: string): Promise<{ payload: { email: string } }> {
    return await jwtVerify(token, secret)
  }
}
