/* eslint-disable @typescript-eslint/no-explicit-any */
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

        if (!isPasswordValid) return null

        // Возвращаем объект пользователя для NextAuth
        return {
          id: foundUser.id,
          email: foundUser.email,
          role: foundUser.role,
          tariffId: foundUser.tariff.id,
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
      if (user) {
        token.id = user.id
        token.email = user.email

        // Если авторизация через Credentials
        if ('role' in user && 'tariffId' in user) {
          token.role = user.role
          token.tariffId = user.tariffId
        } else {
          // Если через Yandex — достаём из БД
          const existing = await gql.GetUserByEmail({ email: (user as any).email })
          const found = existing.Users?.docs?.[0]
          token.role = found?.role ?? 'user'
          token.tariffId = found?.tariff?.id ?? null
        }

        token.accessToken = await JwtService.signAccessToken({
          id: token.id as string,
          email: token.email,
        })
        token.refreshToken = await JwtService.signRefreshToken({
          id: token.id as string,
          email: token.email,
        })
        token.accessTokenExpires = Date.now() + 15 * 60 * 1000
      }

      // Обновление accessToken
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
      session.user = {
        ...session.user,
        id: token.id as string,
        email: token.email as string,
        role: token.role as 'admin' | 'user',
        tariffId: token.tariffId as number,
      }

      session.tokens = {
        accessToken: token.accessToken as string,
        refreshToken: token.refreshToken as string,
        accessTokenExpires: token.accessTokenExpires as number,
      }

      return session
    },
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
