import payload from 'payload'

export const seedExams = async () => {
  console.log('📚 Обновление экзаменов...')

  // Удаляем существующие экзамены
  const { docs: existingExams } = await payload.find({
    collection: 'exams',
    limit: 100,
  })

  for (const exam of existingExams) {
    await payload.delete({
      collection: 'exams',
      id: exam.id,
    })
  }

  // Создаём новые экзамены
  const exams = await Promise.all([
    payload.create({
      collection: 'exams',
      data: {
        title: 'ОГЭ',
        code: 'oge',
      },
    }),
    payload.create({
      collection: 'exams',
      data: {
        title: 'ЕГЭ',
        code: 'ege',
      },
    }),
    payload.create({
      collection: 'exams',
      data: {
        title: 'ВПР',
        code: 'vpr',
      },
    }),
  ])

  return exams
}

export const seedSubjects = async () => {
  console.log('📖 Обновление предметов...')

  // Удаляем существующие предметы
  const { docs: existingSubjects } = await payload.find({
    collection: 'subjects',
    limit: 100,
  })

  for (const subject of existingSubjects) {
    await payload.delete({
      collection: 'subjects',
      id: subject.id,
    })
  }

  // Создаём новые предметы
  const subjects = await Promise.all([
    payload.create({
      collection: 'subjects',
      data: { title: 'Русский язык', code: 'russian' },
    }),
    payload.create({
      collection: 'subjects',
      data: { title: 'Математика', code: 'math' },
    }),
    payload.create({
      collection: 'subjects',
      data: { title: 'Обществознание', code: 'social' },
    }),
    payload.create({
      collection: 'subjects',
      data: { title: 'Физика', code: 'physics' },
    }),
    payload.create({
      collection: 'subjects',
      data: { title: 'Информатика', code: 'informatics' },
    }),
    payload.create({
      collection: 'subjects',
      data: { title: 'Биология', code: 'biology' },
    }),
    payload.create({
      collection: 'subjects',
      data: { title: 'История', code: 'history' },
    }),
    payload.create({
      collection: 'subjects',
      data: { title: 'География', code: 'geography' },
    }),
    payload.create({
      collection: 'subjects',
      data: { title: 'Английский язык', code: 'english' },
    }),
    // Добавь ещё, если надо
  ])

  return subjects
}
