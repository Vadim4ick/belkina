/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, { AxiosError } from 'axios'

export class AuthService {
  async login(email: string, password: string) {
    try {
      await axios.post('/api/auth/login', { email, password })
      return true
    } catch (error) {
      // @ts-ignore
      throw new Error((error as AxiosError).response?.data?.message || 'Ошибка авторизации')
    }
  }

  async register(email: string, password: string) {
    try {
      const res = await axios.post('/api/auth/register', { email, password })
      return res.data.token as string
    } catch (error) {
      // @ts-ignore
      throw new Error((error as AxiosError).response?.data?.message || 'Ошибка регистрации')
    }
  }

  async confirm(token: string, code: string, onlyCheck = false) {
    try {
      const res = await axios.post('/api/auth/register/confirm', { token, code, onlyCheck })
      return res.data
    } catch (error) {
      // @ts-ignore
      throw new Error((error as AxiosError).response?.data?.message || 'Ошибка подтверждения')
    }
  }

  async resendCode({ token, email }: { token?: string; email?: string }) {
    try {
      const res = await axios.post('/api/auth/resend-code', {
        ...(token && { token }),
        ...(email && { email }),
      })

      return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Ошибка при повторной отправке кода')
    }
  }

  async logout() {
    await axios.post('/api/auth/logout')
  }

  async refresh() {
    try {
      await axios.post('/api/auth/refresh')
      return true
    } catch {
      throw new Error('Не удалось обновить токен')
    }
  }

  async getMe() {
    try {
      const res = await axios.get('/api/auth/me')
      return res.data
    } catch {
      throw new Error('Не удалось получить данные пользователя')
    }
  }

  async resendCodeToEmail(email: string) {
    try {
      const res = await axios.post('/api/auth/resend-code-to-email', { email })
      return res.data
    } catch {
      throw new Error('Не удалось отправить код на почту')
    }
  }
}

export const authService = new AuthService()
