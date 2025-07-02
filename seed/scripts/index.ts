import payload from 'payload'

import config from '../../src/payload.config'
import { seed } from '../seed'

const run = async () => {
  try {
    await payload.init({
      config: config,
    })

    await seed()

    console.log('✅ Сидеры успешно выполнены.')
    process.exit(0)
  } catch (err) {
    console.error('❌ Ошибка при запуске сидеров:', err)
    process.exit(1)
  }
}

run()
