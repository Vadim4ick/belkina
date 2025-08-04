// seeds/seedWebinars.ts
import payload from 'payload'

export const seedWebinars = async () => {
  console.log('🎓 Создание вебинаров...')

  const now = new Date()
  const later = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000) // через 3 дня

  const baseData = {
    preview: null,
    url: 'https://example.com/webinar',
  }

  const webinars = await Promise.all([
    // 🎓 Минигруппы
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Минигруппа по математике',
        type: 'minigroup',
        startsAt: now.toISOString(),
        price: 790,
        maxParticipants: 5,
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            direction: null,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '', // тоже допустимо
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: 'text',
                    text: 'Описание вебинара.',
                    format: 0,
                    detail: 0,
                    mode: 'normal',
                    style: '',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        ...baseData,
      },
    }),
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Минигруппа по русскому языку',
        type: 'minigroup',
        startsAt: later.toISOString(),
        price: 850,
        maxParticipants: 4,
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            direction: null,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '', // тоже допустимо
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: 'text',
                    text: 'Описание вебинара.',
                    format: 0,
                    detail: 0,
                    mode: 'normal',
                    style: '',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        ...baseData,
      },
    }),

    // 📚 Разбор заданий
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Разбор задания №8 — вводные слова',
        type: 'exam_practice',
        startsAt: now.toISOString(),
        price: 990,
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            direction: null,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '', // тоже допустимо
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: 'text',
                    text: 'Описание вебинара.',
                    format: 0,
                    detail: 0,
                    mode: 'normal',
                    style: '',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        ...baseData,
      },
    }),
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Разбор задания №10 — грамматическая основа',
        type: 'exam_practice',
        startsAt: later.toISOString(),
        price: 990,
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            direction: null,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '', // тоже допустимо
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: 'text',
                    text: 'Описание вебинара.',
                    format: 0,
                    detail: 0,
                    mode: 'normal',
                    style: '',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        ...baseData,
      },
    }),

    // 🎤 Бесплатные вебинары
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Как не выгореть в подготовке к ЕГЭ',
        type: 'free',
        startsAt: now.toISOString(),
        price: 0,
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            direction: null,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '', // тоже допустимо
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: 'text',
                    text: 'Описание вебинара.',
                    format: 0,
                    detail: 0,
                    mode: 'normal',
                    style: '',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        ...baseData,
      },
    }),
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Как составить план подготовки за 2 месяца',
        type: 'free',
        startsAt: later.toISOString(),
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            direction: null,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '', // тоже допустимо
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: 'text',
                    text: 'Описание вебинара.',
                    format: 0,
                    detail: 0,
                    mode: 'normal',
                    style: '',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        price: 0,
        ...baseData,
      },
    }),

    // 🧑‍🏫 Индивидуальные занятия
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Индивидуальное занятие по профильной математике',
        type: 'individual',
        startsAt: now.toISOString(),
        price: 1200,
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            direction: null,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '', // тоже допустимо
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: 'text',
                    text: 'Описание вебинара.',
                    format: 0,
                    detail: 0,
                    mode: 'normal',
                    style: '',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        ...baseData,
      },
    }),
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Индивидуальное занятие по сочинению',
        type: 'individual',
        startsAt: later.toISOString(),
        price: 1100,
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            direction: null,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '', // тоже допустимо
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: 'text',
                    text: 'Описание вебинара.',
                    format: 0,
                    detail: 0,
                    mode: 'normal',
                    style: '',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        ...baseData,
      },
    }),
  ])

  return webinars
}
