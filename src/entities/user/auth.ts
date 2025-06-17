import NextAuth from "next-auth";
import Yandex from "next-auth/providers/yandex";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        // Credentials({
        //   name: "Credentials",
        //   credentials: {
        //     email: { label: "Email", type: "email" },
        //     password: { label: "Password", type: "password" },
        //   },
        //   async authorize(credentials) {
        //     /* здесь твоя реальная проверка пользователя */
        //     if (
        //       credentials?.email === "test@example.com" &&
        //       credentials?.password === "password123"
        //     ) {
        //       return { id: "1", name: "Test User", email: "test@example.com" };
        //     }
        //     return null;
        //   },
        // }),
        Yandex({
            clientId: process.env.YANDEX_CLIENT_ID!,
            clientSecret: process.env.YANDEX_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: "login:email login:info",
                },
            },
        }),
    ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);