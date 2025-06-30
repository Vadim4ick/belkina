import payload from 'payload'

export const createQuestions = async (recommendationId: number) => {
  const questions = []

  console.log('🌱 Сидим вопросы...')

  // 1. Один правильный ответ
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Какой цвет не является основным?',
        questionType: 'single_choice',
        recommendation: recommendationId,
        answers: [
          { label: 'Красный', value: 'red', isCorrect: false },
          { label: 'Синий', value: 'blue', isCorrect: false },
          { label: 'Зелёный', value: 'green', isCorrect: false },
          { label: 'Оранжевый', value: 'orange', isCorrect: true },
        ],
      },
    }),
  )

  // 2. Несколько правильных ответов
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Выберите чётные числа',
        questionType: 'multiple_choice',
        answers: [
          { label: '1', value: '1', isCorrect: false },
          { label: '2', value: '2', isCorrect: true },
          { label: '3', value: '3', isCorrect: false },
          { label: '4', value: '4', isCorrect: true },
        ],
      },
    }),
  )

  // 3. Соответствие
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Соотнесите страну и столицу',
        questionType: 'matching',
        matchingPairs: [
          { left: 'Франция', right: 'Париж' },
          { left: 'Италия', right: 'Рим' },
          { left: 'Япония', right: 'Токио' },
        ],
      },
    }),
  )

  // 4. Текстовый ответ
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Кто написал "Преступление и наказание"?',
        questionType: 'text_input',
        recommendation: recommendationId,
        textAnswer: 'Достоевский',
      },
    }),
  )

  // 5. Один правильный ответ (новый)
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Какой металл самый лёгкий?',
        questionType: 'single_choice',
        recommendation: recommendationId,
        answers: [
          { label: 'Железо', value: 'iron', isCorrect: false },
          { label: 'Алюминий', value: 'aluminum', isCorrect: false },
          { label: 'Литий', value: 'lithium', isCorrect: true },
          { label: 'Медь', value: 'copper', isCorrect: false },
        ],
      },
    }),
  )

  // 6. Несколько правильных ответов (новый)
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Выберите планеты-гиганты',
        questionType: 'multiple_choice',
        recommendation: recommendationId,
        answers: [
          { label: 'Земля', value: 'earth', isCorrect: false },
          { label: 'Юпитер', value: 'jupiter', isCorrect: true },
          { label: 'Сатурн', value: 'saturn', isCorrect: true },
          { label: 'Марс', value: 'mars', isCorrect: false },
        ],
      },
    }),
  )

  // 7. Соответствие (новый)
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Соотнесите автора и произведение',
        questionType: 'matching',
        recommendation: recommendationId,
        matchingPairs: [
          { left: 'Пушкин', right: 'Евгений Онегин' },
          { left: 'Толстой', right: 'Война и мир' },
          { left: 'Гоголь', right: 'Мёртвые души' },
        ],
      },
    }),
  )

  // 8. Текстовый ответ (новый)
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Что такое гравитация?',
        questionType: 'text_input',
        recommendation: recommendationId,
        textAnswer: 'Сила притяжения тел к Земле',
      },
    }),
  )

  return questions
}
