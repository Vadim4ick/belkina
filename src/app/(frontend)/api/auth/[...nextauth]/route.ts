import NextAuth from 'next-auth'
import { authOptions } from '@/entities/user/auth'

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
