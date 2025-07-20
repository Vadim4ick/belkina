import { cookies } from 'next/headers'

type SetAuthCookiesOptions = {
  accessToken: string
  refreshToken: string
}

export const CookiesService = {
  async setAuthCookies({ accessToken, refreshToken }: SetAuthCookiesOptions) {
    const store = await cookies()

    store.set('accessToken', accessToken, {
      path: '/',
      sameSite: 'lax',
      // secure: process.env.NODE_ENV === 'production',
      secure: false,
    })

    store.set('refreshToken', refreshToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      // secure: process.env.NODE_ENV === 'production',
      secure: false,
    })
  },

  async setAccessToken(accessToken: string) {
    const store = await cookies()

    store.set('accessToken', accessToken, {
      path: '/',
      secure: false,
      sameSite: 'lax',
      // secure: process.env.NODE_ENV === 'production',
    })
  },

  async getTokens() {
    const store = await cookies()
    const accessToken = store.get('accessToken')?.value
    const refreshToken = store.get('refreshToken')?.value

    return { accessToken, refreshToken }
  },

  async clearAuthCookies() {
    const store = await cookies()
    store.delete('accessToken')
    store.delete('refreshToken')
  },
}
