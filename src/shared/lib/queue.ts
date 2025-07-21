/**
 * src/shared/lib/queue.ts
 * ————————————————————————————————
 * Общий центр очередей: даёт один экземпляр Queue
 * и поднимает Worker‑обработчик (синглтон‑режим для dev/prod).
 */
import IORedis from 'ioredis'
import { Queue, Worker } from 'bullmq'
import { gql } from '../graphql/client'

/** Подключение к Redis */
const redisOpts = {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
  password: process.env.REDIS_PASSWORD,
}

const redis = new IORedis(process.env.REDIS_URL ?? 'redis://localhost:6379', redisOpts)
const redisWorker = new IORedis(process.env.REDIS_URL ?? 'redis://localhost:6379', redisOpts)

/** Очередь */
export const expireQueue = new Queue('expire-purchases', { connection: redis })

/** Воркер */
export async function startWorker() {
  if ((global as any)._expireWorker) return

  console.log('🕑 [WORKER] initializing…')

  const worker = new Worker(
    'expire-purchases',
    async (job) => {
      console.log(`⚡️ [WORKER] processing job ${job.id} (${job.data.purchaseId})`)

      try {
        await gql.UpdatePurchasesStatus({
          id: job.data.purchaseId,
          status: 'inactive',
        })
        console.log(`✅ [WORKER] job ${job.id} complete`)
      } catch (err) {
        console.error(`❌ [WORKER] job ${job.id} failed`, err)
        throw err // чтобы попал в failed
      }
    },
    { connection: redisWorker },
  )

  worker
    .on('completed', (job) => console.log(`🎯 [WORKER] job completed: ${job.id}`))
    .on('failed', (job, err) => console.error(`💥 [WORKER] job failed: ${job?.id}`, err))
  ;(global as any)._expireWorker = worker
  console.log('✅ [WORKER] ready and listening')
}
