import { withAuth, type NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const authPaths = ["/sign-in", "/sign-up"];
// const privatePaths = [];

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const { pathname } = req.nextUrl;

    const isAuth = !!req.nextauth.token;

    // 🔒 Блокировать доступ к /sign-in и /sign-up для авторизованных
    if (isAuth && authPaths.includes(pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // 🔐 Блокировать доступ к privatePaths для НЕавторизованных
    // if (!isAuth && privatePaths.includes(pathname)) {
    //   return NextResponse.redirect(new URL("/sign-in", req.url));
    // }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // Пропускаем всех, фильтруем вручную
    },
  },
);

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"], // обрабатываем все страницы
};
