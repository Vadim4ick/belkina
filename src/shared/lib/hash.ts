// Используем нативный bcrypt для Node.js
import bcrypt from 'bcryptjs'

export const HashService = {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  },

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  },
}
