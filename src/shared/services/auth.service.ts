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

  async confirm(token: string, code: string) {
    try {
      const res = await axios.post('/api/auth/register/confirm', { token, code })
      return res.data
    } catch (error) {
      // @ts-ignore
      throw new Error((error as AxiosError).response?.data?.message || 'Ошибка подтверждения')
    }
  }

  async resendCode(token: string) {
    try {
      const res = await axios.post('/api/auth/resend-code', { token })
      return res.data
    } catch (error) {
      // @ts-ignore
      throw new Error((error as AxiosError).response?.data?.message || 'Ошибка отправки')
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
