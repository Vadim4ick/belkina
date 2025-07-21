import { createClient } from 'redis'

export const redis = createClient({
  url: process.env.REDIS_URL,
})

// redis.on('connect', () => console.log('✅ Redis connected'))
// redis.on('error', console.error)

redis.connect().catch(console.error)
