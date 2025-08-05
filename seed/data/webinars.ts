// seeds/seedWebinars.ts
import payload from 'payload'

// ➜ хелпер для копии даты с нужным временем
const at = (d: Date, h: number, m = 0) => new Date(new Date(d).setHours(h, m, 0, 0))

export const seedWebinars = async () => {
  console.log('🎓 Создание вебинаров...')

  const now = new Date() // сегодня
  const later = new Date(now.getTime() + 3 * 864e5) // + 3 дня

  const baseData = {
    url: 'https://example.com/webinar',
  }

  const webinars = await Promise.all([
    // 🎓 Минигруппы
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Минигруппа по математике',
        type: 'minigroup',
        startsAt: at(now, 10).toISOString(), // сегодня 10:00
        price: 790,
        maxParticipants: 5,
        slug: 'minigroup-matematika',
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
        slug: 'minigroup-russian',
        type: 'minigroup',
        startsAt: at(later, 10).toISOString(), // через 3 дня 10:00
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
        slug: 'razbor-zadaniya-8-vvodnye-slova',
        type: 'exam_practice',
        startsAt: at(now, 13).toISOString(), // сегодня 13:00
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
        slug: 'razbor-zadaniya-10-grammaticheskaya-osnova',
        type: 'exam_practice',
        startsAt: at(later, 13).toISOString(), // через 3 дня 13:00
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
        slug: 'kak-ne-vygoret-v-podgotovke-k-eges',
        type: 'free',
        startsAt: at(now, 16).toISOString(), // сегодня 16:00
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
        slug: 'kak-sostavit-plan-podgotovki-za-2-mesyac',
        type: 'free',
        startsAt: at(later, 16).toISOString(), // через 3 дня 16:00
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

    // 🧑‍🏫 Индивидуальные занятия
    payload.create({
      collection: 'webinars',
      data: {
        title: 'Индивидуальное занятие по профильной математике',
        slug: 'individualnoe-zanyatie-po-profilnoy-matematike',
        type: 'individual',
        startsAt: at(now, 19).toISOString(), // сегодня 19:00
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
        slug: 'individualnoe-zanyatie-po-sochineniyu',
        type: 'individual',
        startsAt: at(later, 19).toISOString(), // через 3 дня 19:00
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
