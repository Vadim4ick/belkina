/* eslint-disable @typescript-eslint/ban-ts-comment */
import NextAuth, { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Yandex from 'next-auth/providers/yandex'
import { gql } from '@/shared/graphql/client'
import bcrypt from 'bcryptjs'
import { JwtService } from '@/shared/services/jwt-service'

export const authOptions: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  providers: [
    /** --- 1. e-mail/пароль --- */
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'E-mail', type: 'text', placeholder: 'you@example.com' },
        password: { label: 'Пароль', type: 'password' },
      },
      // @ts-ignore
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        const user = await gql.GetUserByEmail({ email: credentials.email })

        if (user.Users.totalDocs <= 0) return null

        const foundUser = user.Users.docs[0]

        // Сравниваем введенный пароль с хешированным паролем из базы
        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          foundUser.password,
        )

        if (!isPasswordValid) {
          return null // Неверный пароль
        }

        // Возвращаем объект пользователя для NextAuth
        return {
          id: foundUser.id,
          email: foundUser.email,
          role: foundUser.role,
          signupMethod: foundUser.signupMethod,
        }
      },
    }),

    /** --- 2. OAuth Яндекс --- */
    Yandex({
      clientId: process.env.YANDEX_CLIENT_ID!,
      clientSecret: process.env.YANDEX_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'yandex') {
        const exists = await gql.GetUserByEmail({ email: user.email })
        if (exists.Users.totalDocs <= 0) {
          await gql.CreateUser({
            email: user.email!,
            password: Math.random().toString(36).slice(-10),
            role: 'user',
            signupMethod: 'yandex',
          })
        }
      }
      return true
    },

    async jwt({ token, user }) {
      // При первом входе
      if (user) {
        if (!user?.id || !user?.email) {
          throw new Error('User ID or email or role is missing')
        }

        const payload = { id: user.id, email: user.email }
        token.id = user.id
        token.email = user.email
        token.accessToken = await JwtService.signAccessToken(payload)
        token.refreshToken = await JwtService.signRefreshToken(payload)
        token.accessTokenExpires = Date.now() + 15 * 60 * 1000 // 15 минут
      }

      // При обновлении (если accessToken истёк)
      if (Date.now() > (token.accessTokenExpires as number)) {
        try {
          const decoded = await JwtService.verifyToken(token.refreshToken as string)

          const newAccessToken = await JwtService.signAccessToken({
            id: decoded.id,
            email: decoded.email,
          })
          token.accessToken = newAccessToken
          token.accessTokenExpires = Date.now() + 15 * 60 * 1000
        } catch (err) {
          console.error('❌ Refresh token invalid:', err)
          return {}
        }
      }

      return token
    },

    async session({ session, token }) {
      const t = token as {
        id: string
        email: string
        role: 'admin' | 'user'
        accessToken: string
        refreshToken: string
        accessTokenExpires: number
      }

      session.user.id = t.id
      session.user.email = t.email
      session.user.role = t.role

      session.tokens = {
        accessToken: t.accessToken,
        refreshToken: t.refreshToken,
        accessTokenExpires: t.accessTokenExpires,
      }

      return session
    },
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
