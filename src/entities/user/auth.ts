/* eslint-disable @typescript-eslint/ban-ts-comment */
import NextAuth, { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Yandex from 'next-auth/providers/yandex'
import { gql } from '@/shared/graphql/client'

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

        // 2) Просим Payload проверить пароль
        const loginUser = await gql.LoginUser({
          email: credentials.email as string,
          password: credentials.password as string,
        })

        if (!loginUser.loginUser.user) return null

        return { id: loginUser.loginUser.user.id, email: loginUser.loginUser.user.email }
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
    async session({ session, token }) {
      if (token.sub && session.user) session.user.id = token.sub
      return session
    },
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
