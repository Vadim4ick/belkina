import payload from 'payload'

export const createQuestions = async () => {
  const questions = []

  // 1. Один правильный ответ
  questions.push(
    await payload.create({
      collection: 'questions',
      data: {
        questionText: 'Какой цвет не является основным?',
        questionType: 'single_choice',
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
        textAnswer: 'Достоевский',
      },
    }),
  )

  return questions
}
