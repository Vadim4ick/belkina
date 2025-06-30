/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'

import { useTestEvaluation } from '@/entities/test/model/useTestEvaluation'
import {
  useCreateTestResult,
  useGetTestResultById,
  useUpdateTestResult,
} from '@/shared/services/test.service'
import { questionNameFn } from '@/entities/test/model/const'
import { createStepSchema } from '@/entities/test/model/schema'
import {
  MutationTestResultUpdate_AnswersInput,
  TestFragmentFragment,
} from '@/shared/graphql/__generated__'
import { useAuthStore } from '@/shared/hooks/use-auth-store'
import { formatUserAnswer } from '../const'

export type AnswerInput = Omit<MutationTestResultUpdate_AnswersInput, 'id'>

export const useTestLogic = ({
  test,
  publicFlag,
}: {
  test?: TestFragmentFragment
  publicFlag: boolean
}) => {
  /* ------------------------- исходные данные ------------------------ */
  const questions = test?.questions || []

  const [step, setStep] = useState(0)
  const [start, setStart] = useState(false)

  const queryClient = useQueryClient()
  const session = useAuthStore((s) => s.session)

  /* ----------------------- текущий вопрос --------------------------- */
  const currentQuestion = questions[step]
  const questionName = questionNameFn(currentQuestion.id)

  /* ----------------------- ответы пользователя ---------------------- */
  const [answers, setAnswers] = useState<AnswerInput[]>([]) // ВСЕГДА массив

  /* -------------------- служебные утилиты/хуки ---------------------- */
  const { evaluateSingle, evaluate } = useTestEvaluation(questions.map((q) => q))
  const form = useForm({
    defaultValues: {},
    mode: 'onChange',
    resolver: zodResolver(createStepSchema(currentQuestion)),
  })
  const { getValues, reset, trigger } = form

  const { mutateAsync: createTestResult, isPending: isPendingStart } = useCreateTestResult()
  const { mutateAsync: updateTestResult, isPending: isPendingUpdate } = useUpdateTestResult()
  const {
    data: testResult,
    isLoading,
    isFetching,
  } = useGetTestResultById({
    testId: test?.id,
  })

  const testRes = testResult?.TestResults?.docs[0]

  /* ------------------------- режим «публичный» ---------------------- */
  const [publicCorrectAnswers, setPublicCorrectAnswers] = useState(0)
  const [publicCompleted, setPublicCompleted] = useState(false)

  /* ------------------------------------------------------------------ */
  /*                             EFFECTS                                */
  /* ------------------------------------------------------------------ */

  // заполняем форму предыдущими ответом
  useEffect(() => {
    if (!testRes) return

    const values: Record<string, any> = {}

    for (const answer of testRes.answers) {
      const key = questionNameFn(+answer.question.id)
      const questionType = questions.find((q) => q.id === +answer.question.id)?.questionType

      if (!questionType) continue

      values[key] =
        questionType === 'multiple_choice'
          ? answer.userAnswer
          : Array.isArray(answer.userAnswer)
            ? answer.userAnswer[0] // ❗️Восстанавливаем строку из массива
            : answer.userAnswer
    }

    reset(values)
    setTimeout(() => trigger(), 0)
  }, [testRes, reset, trigger, questions])

  // если результат уже существует и в статусе in_progress — сразу стартуем
  useEffect(() => {
    if (testRes?.status === 'in_progress') setStart(true)
  }, [testRes])

  // превращаем ответы с сервера в массив AnswerInput
  useEffect(() => {
    if (testRes) {
      const prepared: AnswerInput[] = testRes.answers.map((a) => ({
        question: +a.question.id,
        userAnswer: a.userAnswer,
        isCorrect: a.isCorrect,
      }))

      setAnswers(prepared)
    }
  }, [testRes])

  // при перезагрузке страницы восстанавливаем номер последнего отвеченного вопроса
  useEffect(() => {
    if (testRes && questions.length > 0) {
      const answeredIds = testRes.answers.map((a) => +a.question.id)

      // Найти индекс последнего отвеченного вопроса
      const lastAnsweredIndex = questions.findIndex((q, idx) => {
        const isAnswered = answeredIds.includes(q.id)
        const isNextUnanswered = !answeredIds.includes(questions[idx + 1]?.id)
        return isAnswered && (isNextUnanswered || idx === questions.length - 1)
      })

      if (lastAnsweredIndex >= 0) {
        setStep(lastAnsweredIndex)
      }
    }
  }, [testRes, questions])

  /* ------------------------------------------------------------------ */
  /*                           ОБРАБОТЧИКИ                              */
  /* ------------------------------------------------------------------ */

  /** нажали «Далее» */
  const onNext = () => {
    /* ------------------ НЕпубличный (записываем в БД) ---------------- */
    if (!publicFlag) {
      const values = getValues() as Record<string, any>
      const isCorrect = evaluateSingle(currentQuestion.id, values)

      const userAnswer = formatUserAnswer(currentQuestion.questionType, values[questionName])

      // если ответ на вопрос уже есть — перезаписываем
      const nextAnswers: AnswerInput[] = [
        ...answers.filter((a) => a.question !== currentQuestion.id),
        {
          question: currentQuestion.id,
          userAnswer: userAnswer,
          isCorrect,
        },
      ]

      console.log('nextAnswers', nextAnswers)

      setAnswers(nextAnswers) // локально обновили

      const isNotLast = step < questions.length - 1

      if (!testRes?.id) return // на всякий случай

      updateTestResult(
        {
          testResId: testRes.id,
          answers: nextAnswers, // без поля id
          status: isNotLast ? 'in_progress' : 'completed',
        },
        {
          onSuccess: () => {
            if (isNotLast) setStep((s) => s + 1)
            else
              queryClient.invalidateQueries({
                queryKey: ['getTestResultById', session?.user?.id, test?.id],
              })
          },
        },
      )

      return // дальше публичная ветка нам не нужна
    }

    /* ---------------------- ПУБЛИЧНЫЙ ПРОСМОТР ---------------------- */
    if (step < questions.length - 1) {
      setStep((s) => s + 1)
    } else {
      setPublicCompleted(true)

      const answers = getValues()
      const { correctCount } = evaluate(answers)

      setPublicCorrectAnswers(correctCount)

      // you can drop these console logs later
      // console.log('Ответы:', answers)
      // console.log('Результаты:', results)
      // console.log(`Правильных ответов: ${correctCount} из ${questions.length}`)
    }
  }

  const resetTestRes = () => {
    if (testRes?.id) {
      updateTestResult(
        {
          testResId: testRes.id,
          answers: [],
          status: 'in_progress',
        },
        {
          onSuccess: () => {
            setStep(0)

            queryClient.invalidateQueries({
              queryKey: ['getTestResultById', session?.user?.id, test?.id],
            })
          },
        },
      )
    }
  }

  /** пользователь нажал «Начать тест» */
  const startFn = () => {
    if (test && !publicFlag) {
      createTestResult({ testId: test.id }, { onSuccess: () => setStart(true) })
    }

    if (publicFlag) setStart(true)
  }

  /* ------------------------------------------------------------------ */
  /*                           ВОЗВРАЩАЕМ                               */
  /* ------------------------------------------------------------------ */

  return {
    /* данные */
    questions,
    currentQuestion,
    testRes,

    /* состояние */
    step,
    start,
    publicCorrectAnswers,
    publicCompleted,

    /* лоадеры */
    isPendingUpdate,
    isPendingStart,
    isLoading,
    isFetching,

    /* методы */
    setStep,
    startFn,
    onNext,
    form,

    resetTestRes,
  }
}
