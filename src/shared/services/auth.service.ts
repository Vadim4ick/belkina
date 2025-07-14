export class AuthService {
  async login(email: string, password: string) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.error || 'Ошибка авторизации')
    }

    return true
  }

  async register(email: string, password: string) {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.error || 'Ошибка регистрации')
    }

    return true
  }

  async logout() {
    await fetch('/api/auth/logout', {
      method: 'POST',
    })
  }

  async refresh() {
    const res = await fetch('/api/auth/refresh', {
      method: 'POST',
    })

    if (!res.ok) {
      throw new Error('Не удалось обновить токен')
    }

    return true
  }

  async getMe() {
    const res = await fetch('/api/auth/me', {
      method: 'GET',
    })

    if (!res.ok) {
      throw new Error('Не удалось получить данные пользователя')
    }

    return res.json()
  }
}

export const authService = new AuthService()
