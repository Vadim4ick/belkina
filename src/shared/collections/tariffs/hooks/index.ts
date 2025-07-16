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
        const newFreeTariffId = doc.id
        const oldFreeTariffId = (req as PayloadRequest & { oldFreeTariffId?: string })
          .oldFreeTariffId

        console.log('newFreeTariffId', newFreeTariffId, 'oldFreeTariffId', oldFreeTariffId)
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
