import { SignJWT, jwtVerify } from 'jose'
import nodemailer from 'nodemailer'

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET!)

export class NodemailerService {
  static transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.NODE_ENV === 'production',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  static generateCode(): string {
    return Math.floor(1000 + Math.random() * 9000).toString()
  }

  // Отправка письма с кодом
  static async sendCode(email: string, code: string, token: string, noLink = false): Promise<void> {
    const verifyLink = `${process.env.NEXT_PUBLIC_SERVER_URL}?token=${token}`

    await this.transporter.sendMail({
      from: `"Поддержка BELKINA.ONLINE" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Код подтверждения',
      html: `
      <p>Ваш код подтверждения: <b>${code}</b></p>
      <p>Код действителен 10 минут.</p>
      ${noLink ? '' : `<p>Или просто нажмите: <a href="${verifyLink}">Подтвердить Email</a></p>`}
    `,
    })
  }

  // Письмо после успешной оплаты
  static async sendWebinarAccess(
    email: string,
    webinarTitle: string,
    webinarLink: string,
    webinarStartsAt: string,
  ): Promise<void> {
    await this.transporter.sendMail({
      from: `"Поддержка BELKINA.ONLINE" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Доступ к вебинару "${webinarTitle}"`,
      html: `
        <h2>Оплата прошла успешно!</h2>
        <p>Поздравляем 🎉 Ваша оплата успешно прошла.</p>
        <p>Теперь у вас открыт доступ к вебинару <b>"${webinarTitle}"</b>.</p>
        <p><b>Начало вебинара:</b> ${webinarStartsAt} (по МСК)</p>
        <p>Ссылка на трансляцию: <a href="${webinarLink}" target="_blank">${webinarLink}</a> (Так-же ссылка доступна на странице вебинара) </p>
        <br/>
        <p>Если у вас возникнут вопросы — смело пишите в нашу поддержку в Telegram - <a href="https://t.me/Belkina_online2025">@Belkina_online2025</a>.</p>
        <p>Хорошего просмотра!<br/>Команда <b>BELKINA.ONLINE</b></p>
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
