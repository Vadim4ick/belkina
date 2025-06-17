/**
 * Массив публичных роутов не требующих аутентификации
 */
export const publicRoutes: string[] = [
  "/",
]
export const privateRoutes: string[] = [
  "/profile/glavnaya",
  "/profile/catalog",
  "/profile/tests",
]

/**
 * Массив роутов с доступом для роли Admin
 */
export const adminRoutes: string[] = [
  "/admin/",
]

/**
 * Массив роутов для процесса аутентификации
 */
export const authRoutes: string[] = [
  "/auth/sign-in",
  "/auth/sign-up",
  "/auth/reset", // сброс пароля
  "/auth/new-password", // новый пароль
  "/auth/error", // ошибка
]

/**
 * Префикс для API роутов аутентификации
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Роут для редиректа после аутентификации
 */
export const DEFAULT_LOGIN_REDIRECT = "/profile/glavnaya";