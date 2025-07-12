/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CollectionConfig, PayloadRequest } from 'payload'

export const tariffsHooks: CollectionConfig['hooks'] = {
  beforeChange: [
    async ({ data, req, originalDoc }) => {
      if (data.isFree) {
        const { payload } = req

        const { docs: freeTariffs } = await payload.find({
          collection: 'tariffs',
          where: {
            isFree: { equals: true },
          },
          depth: 0,
        })

        for (const doc of freeTariffs) {
          if (doc.id === originalDoc?.id) continue

          await payload.update({
            collection: 'tariffs',
            id: doc.id,
            data: { isFree: false },
          })

          // сохраним старый freeTariffId для afterChange
          // @ts-ignore
          ;(req as PayloadRequest & { oldFreeTariffId?: string }).oldFreeTariffId = doc.id
        }
      }

      return data
    },
  ],

  afterChange: [
    async ({ doc, req }) => {
      if (doc.isFree) {
        const { payload } = req

        const newFreeTariffId = doc.id
        const oldFreeTariffId = (req as PayloadRequest & { oldFreeTariffId?: string })
          .oldFreeTariffId

        console.log('newFreeTariffId', newFreeTariffId, 'oldFreeTariffId', oldFreeTariffId)

        setTimeout(async () => {
          const where = oldFreeTariffId
            ? {
                or: [{ tariff: { equals: null } }, { tariff: { equals: oldFreeTariffId } }],
              }
            : {
                tariff: { equals: null },
              }

          const { docs: usersToUpdate } = await payload.find({
            collection: 'users',
            // @ts-ignore
            where,
            depth: 1,
          })

          for (const user of usersToUpdate) {
            await payload.update({
              collection: 'users',
              id: user.id,
              data: { tariff: newFreeTariffId },
            })
          }
        }, 100)
      }
    },
  ],

  beforeDelete: [
    async ({ id, req }) => {
      const { payload } = req

      console.log(`Удаляем recomendations и courses для тарифа ${id}`)

      await payload.delete({
        collection: 'recomendations',
        where: { tariff: { equals: id } },
      })

      await payload.delete({
        collection: 'courses',
        where: { tariff: { equals: id } },
      })

      await payload.delete({
        collection: 'tests',
        where: { tariff: { equals: id } },
      })
    },
  ],
}
