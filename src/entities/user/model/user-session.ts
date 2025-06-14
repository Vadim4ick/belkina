export type Session = {
    user: User
    backendTokens: BackendTokens
    provider?: string
}

export type User = {
    id: string
    name: string
    secondName: string
    email: string
    picture: string | null | undefined
    role: string
    emailVerified?: Date | null
}

type BackendTokens = {
    accessToken: string
    refreshToken: string
}
