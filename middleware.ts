// import { withAuth, type NextRequestWithAuth } from "next-auth/middleware";
export { auth as middleware } from '@/entities/user/auth'
import { auth } from '@/entities/user/auth';
import { verifyToken } from '@/shared/lib/auth-ulils';
import { adminRoutes, apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, privateRoutes, publicRoutes } from '@/shared/lib/routes';
import { NextRequest, NextResponse } from "next/server";

export default auth(async (req: NextRequest) => {
  const { nextUrl } = req;
  const session = await auth();

  // Проверяем наличие действующей сессии
  const isValidSession = async (): Promise<boolean> => {
    if (!session) return false;

    // Проверяем токен доступа для credentials-провайдера
    if (session.provider === "credentials" && session.backendTokens?.accessToken) {
      const verificationResult = await verifyToken(session.backendTokens.accessToken);
      return verificationResult.valid; // Используем свойство valid
    }

    // Проверяем срок действия сессии
    if (session.expires) {
      const expirationDate = new Date(session.expires);
      return expirationDate.getTime() > Date.now();
    }

    return false;
  };

  const isLoggedIn = await isValidSession();
  const userRole = session?.user?.role ?? "USER"; // Добавляем защиту


  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname) || nextUrl.pathname.startsWith('/supplier');
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

  // Если это API аутентификации, продолжаем выполнение
  if (isApiAuthRoute) return NextResponse.next();

  // Если пользователь вошёл и пытается попасть на страницу авторизации
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return NextResponse.next()
  }

  // Если  маршрут не публичныйне и пользователь не вошёл
  if (isPrivateRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/auth/login", nextUrl));
    } else {
      return NextResponse.next();
    }
  }

  if (isAdminRoute && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
