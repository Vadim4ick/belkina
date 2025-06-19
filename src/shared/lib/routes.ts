/**
 * Массив публичных роутов не требующих аутентификации
 */
export const publicRoutes: string[] = ["/"];
export const privateRoutes: string[] = ["/profile"];

/**
 * Массив роутов с доступом для роли Admin
 */
// export const adminRoutes: string[] = ["/admin/"];

/**
 * Массив роутов для процесса аутентификации
 */
export const authRoutes: string[] = ["/auth/sign-in", "/auth/sign-up"];

/**
 * Префикс для API роутов аутентификации
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Роут для редиректа после аутентификации
 */
export const DEFAULT_LOGIN_REDIRECT = "/profile";
