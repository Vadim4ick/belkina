import { SignJWT, jwtVerify } from 'jose'

type JwtPayload = {
  id: string
  email: string
}

export class JwtService {
  private static secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET!)

  static async signAccessToken(payload: JwtPayload) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('15m')
      .sign(this.secret)
  }

  static async signRefreshToken(payload: JwtPayload) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(this.secret)
  }

  static async verifyToken(token: string): Promise<{ id: string; email: string }> {
    const { payload } = await jwtVerify(token, this.secret)

    return {
      id: payload.id as string,
      email: payload.email as string,
    }
  }
}
