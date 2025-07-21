import { createClient } from 'redis'

export const redis = createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
})

redis.connect().catch(console.error)
