import { NextRequest, NextResponse } from 'next/server'
import { authRoutes, getRouteAuth, getRouteProfile, privateRoutes } from './shared/lib/routes'
import { JwtService } from './shared/services/jwt-service'

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const res = NextResponse.next()

  let user = null

  const accessToken = req.cookies.get('accessToken')?.value
  const refreshToken = req.cookies.get('refreshToken')?.value

  if (accessToken) {
    try {
      user = await JwtService.verifyToken(accessToken)
    } catch {
      user = null
    }
  }

  if (!user && refreshToken) {
    try {
      const payload = await JwtService.verifyToken(refreshToken)

      // ✅ генерируем новый accessToken
      const newAccessToken = await JwtService.signAccessToken({
        id: payload.id,
        email: payload.email,
      })

      // устанавливаем новый accessToken
      res.cookies.set('accessToken', newAccessToken, {
        path: '/',
        // secure: process.env.NODE_ENV === 'production',
        secure: false,
      })

      user = payload
    } catch {
      user = null
    }
  }

  const isAuth = !!user
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))
  const isPrivateRoute = privateRoutes.some((route) => pathname.startsWith(route))

  if (isPrivateRoute && !isAuth) {
    const loginUrl = new URL(getRouteAuth(), req.url)
    return NextResponse.redirect(loginUrl)
  }

  if (isAuth && isAuthRoute) {
    return NextResponse.redirect(new URL(getRouteProfile(), req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api/.*|_next/.*|favicon.ico|robots.txt|img/.*|fonts/.*).*)'],
}
