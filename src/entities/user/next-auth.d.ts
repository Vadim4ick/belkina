/* eslint-disable @typescript-eslint/no-unused-vars */
// types/next-auth.d.ts
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    role: 'user' | 'admin'
    tariffId: number
  }

  interface Session {
    user: {
      id: string
      email: string
      name: string
      image: string
      role: 'user' | 'admin'
      tariffId: number
    }
    tokens: {
      accessToken: string
      refreshToken: string
      accessTokenExpires: number
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    email: string
    role: 'user' | 'admin'
    accessToken: string
    refreshToken: string
    accessTokenExpires: number
    tariffId: number
  }
}
