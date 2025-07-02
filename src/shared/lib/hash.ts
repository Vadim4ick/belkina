// src/shared/lib/hash.ts

export const HashService = {
  /**
   * Хэширует пароль с помощью PBKDF2
   */
  async hash(password: string): Promise<string> {
    const encoder = new TextEncoder()
    const salt = window.crypto.getRandomValues(new Uint8Array(16))

    const baseKey = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      { name: 'PBKDF2' },
      false,
      ['deriveBits'],
    )

    const derivedBits = await window.crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: salt.buffer,
        iterations: 100000,
        hash: 'SHA-256',
      },
      baseKey,
      256,
    )

    // Сохраняем соль и хэш вместе (в Base64)
    const buffer = new Uint8Array(salt.byteLength + derivedBits.byteLength)
    buffer.set(new Uint8Array(salt), 0)
    buffer.set(new Uint8Array(derivedBits), salt.byteLength)

    return this.arrayBufferToBase64(buffer)
  },

  /**
   * Сравнивает пароль с хэшированным значением
   */
  async compare(password: string, hash: string): Promise<boolean> {
    const encoder = new TextEncoder()
    const combinedBuffer = this.base64ToArrayBuffer(hash)
    const salt = combinedBuffer.slice(0, 16)
    const storedKey = combinedBuffer.slice(16)

    const baseKey = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      { name: 'PBKDF2' },
      false,
      ['deriveBits'],
    )

    const derivedBits = await window.crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      baseKey,
      256,
    )

    const derivedKey = new Uint8Array(derivedBits)
    const storedKeyArray = new Uint8Array(storedKey)

    // Проверка в константное время
    let match = true
    for (let i = 0; i < derivedKey.length; i++) {
      if (derivedKey[i] !== storedKeyArray[i]) {
        match = false
        break
      }
    }

    return match
  },

  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = ''
    const bytes = new Uint8Array(buffer)
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  },

  base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = atob(base64)
    const len = binaryString.length
    const bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes.buffer
  },
}
