import { auth } from "@/entities/user/auth";
import { NextRequest, NextResponse } from "next/server";
import {
  authRoutes,
  getRouteAuth,
  getRouteHome,
  privateRoutes,
} from "./shared/lib/routes";

export default auth(async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const session = await auth();

  const isAuth = !!session;
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // 🔒 Защищённый маршрут без авторизации — редирект на login
  if (isPrivateRoute && !isAuth) {
    const loginUrl = new URL(getRouteAuth(), req.url);
    return NextResponse.redirect(loginUrl);
  }

  // 🔐 Авторизован и пытается зайти на login/register — редирект на домашнюю страницу
  if (isAuth && isAuthRoute) {
    return NextResponse.redirect(new URL(getRouteHome(), req.url));
  }

  // ✅ Всё в порядке — пропускаем
  return NextResponse.next();
});
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
