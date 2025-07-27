import { NextResponse } from 'next/server'
import { gql } from '@/shared/graphql/client'
import bcrypt from 'bcryptjs'
import { JwtService } from '@/shared/services/jwt-service'
import { CookiesService } from '@/shared/services/cookies-service'
import { z } from 'zod'

const UpdateSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(6, 'Пароль должен быть не менее 6 символов').optional(),
  name: z.string().min(2, 'Имя слишком короткое').optional(),
  type: z.enum(['email', 'password', 'name']),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const parsed = UpdateSchema.safeParse(body)

    if (!parsed.success) {
      const firstError = parsed.error.errors[0]
      const message = firstError?.message || 'Некорректные данные'

      return NextResponse.json({ message, issues: parsed.error.format() }, { status: 400 })
    }

    const { email, password, name, type } = parsed.data

    const { accessToken } = await CookiesService.getTokens()
    const { id } = await JwtService.verifyToken(accessToken)

    if (!id) {
      return NextResponse.json({ message: 'Неавторизован' }, { status: 401 })
    }

    let updatedUser

    if (type === 'email') {
      if (!email) {
        return NextResponse.json({ message: 'Поле email обязательно' }, { status: 400 })
      }

      updatedUser = await gql.UpdateUserEmail({
        id: Number(id),
        email,
      })
    } else if (type === 'password') {
      if (!password) {
        return NextResponse.json({ message: 'Поле password обязательно' }, { status: 400 })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      updatedUser = await gql.UpdateUserPassword({
        id: Number(id),
        password: hashedPassword,
      })
    } else {
      if (!name) {
        return NextResponse.json({ message: 'Поле name обязательно' }, { status: 400 })
      }

      updatedUser = await gql.UpdateUserName({
        id: Number(id),
        name,
      })
    }

    // Только при изменении email — перевыпуск токенов
    if (type === 'email') {
      // 🔁 Обновление токенов только при смене email
      const newAccessToken = await JwtService.signAccessToken({
        id: String(updatedUser.updateUser.id),
        email: updatedUser.updateUser.email,
      })

      const newRefreshToken = await JwtService.signRefreshToken({
        id: String(updatedUser.updateUser.id),
        email: updatedUser.updateUser.email,
      })

      await CookiesService.setAuthCookies({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      })
    }

    return NextResponse.json({
      message: 'Профиль обновлён',
      user: updatedUser.updateUser,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Произошла ошибка на сервере' }, { status: 500 })
  }
}
