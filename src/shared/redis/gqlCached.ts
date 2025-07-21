import { hash } from 'ohash'
import { redis } from './client'
import { CacheKeys } from './cache-keys'

const DEFAULT_TTL = 60 * 5

type Fn<T = any> = (...args: any[]) => Promise<T>

interface CacheOptions<T extends Fn> {
  ttl?: number
  tags?: (args: Parameters<T>) => string[] // динамические теги
  staticTags?: string[] // статические теги
  name?: string
}

export function withRedisCache<T extends Fn>(resolver: T, options: CacheOptions<T> = {}): T {
  const { ttl = DEFAULT_TTL, tags, staticTags = [], name } = options

  return async function (...args: Parameters<T>): Promise<ReturnType<T>> {
    const key = CacheKeys.gql(name ?? resolver.name, hash(args))

    const cached = await redis.get(key)
    if (cached) {
      return JSON.parse(cached)
    }

    const result = await resolver(...args)

    // Сохраняем
    await redis.set(key, JSON.stringify(result), { EX: ttl })

    // Индексация по тегам
    const dynamicTags = tags ? tags(args) : []
    const allTags = [...staticTags, ...dynamicTags]
    if (allTags.length) {
      const multi = redis.multi()
      allTags.forEach((tag) => {
        multi.sAdd(`index:tag:${tag}`, key)
        // (опц.) TTL самому индексу: multi.expire(`index:tag:${tag}`, ttl + 60)
      })
      await multi.exec()
    }

    return result
  } as T
}

export async function invalidateTags(...tags: string[]) {
  if (!tags.length) return

  const redisClient = redis // твой инстанс
  const multi = redisClient.multi()

  for (const tag of tags) {
    const indexKey = `index:tag:${tag}`
    const members = await redisClient.sMembers(indexKey)
    if (members.length) {
      multi.del(members)
    }
    multi.del(indexKey)
  }

  await multi.exec()
}
