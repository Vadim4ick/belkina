import payload from 'payload'

export const seedRecommendations = async () => {
  console.log('🌱 Сидим рекомендации...')

  await payload.create({
    collection: 'recomendations',
    data: {
      title: 'Орфография',
      description: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: [
            {
              tag: 'ul',
              type: 'list',
              start: 1,
              format: '',
              indent: 0,
              version: 1,
              direction: 'ltr',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  value: 1,
                  format: 'start',
                  indent: 0,
                  version: 1,
                  direction: 'ltr',
                  children: [
                    {
                      mode: 'normal',
                      text: ' Учи правила правописания приставок, корней, суффиксов и окончаний.',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                },
                {
                  type: 'listitem',
                  value: 2,
                  format: 'start',
                  indent: 0,
                  version: 1,
                  direction: 'ltr',
                  children: [
                    {
                      mode: 'normal',
                      text: 'Практикуй задания на Н/НН, –ТСЯ/–ТЬСЯ, слитное/раздельное написание.',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                },
                {
                  type: 'listitem',
                  value: 3,
                  format: 'start',
                  indent: 0,
                  version: 1,
                  direction: 'ltr',
                  children: [
                    {
                      mode: 'normal',
                      text: 'Рекомендация: делай по 10–15 заданий ежедневно, анализируя ошибки.',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  })
}
