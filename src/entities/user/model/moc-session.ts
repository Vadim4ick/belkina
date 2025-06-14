import { Session } from "./user-session";

export const userSessionMoc: Session = {
    user: {
        id: "alkjs",
        name: "Михаил",
        secondName: "Фамилия",
        email: "emeil@email.com",
        picture: undefined,
        role: "user"

    },
    backendTokens: {
        accessToken: "string",
        refreshToken: "string"

    }
}