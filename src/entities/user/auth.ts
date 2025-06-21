/* eslint-disable @typescript-eslint/ban-ts-comment */
import NextAuth, { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Yandex from 'next-auth/providers/yandex'
import { createUser, emailExists, loginUser } from '@/shared/graphql/user'

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

        const user = await emailExists(credentials.email as string)

        if (!user) return null

        // 2) Просим Payload проверить пароль
        const ok = await loginUser(credentials.email as string, credentials.password as string)

        if (!ok) return null

        return { id: ok.id, email: ok.email }
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
        const exists = await emailExists(user.email!)

        if (!exists) {
          await createUser(user.email!, Math.random().toString(36).slice(-10), 'user', 'yandex')
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
