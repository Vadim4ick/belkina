import { useState, useEffect, useTransition, useOptimistic } from 'react'
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

  /** Базовое состояние, «истина» после ответа сервера */
  const [answers, setAnswers] = useState<AnswerInput[]>([])
  const [step, setStep] = useState(0)

  /** Optimistic-состояния – мгновенно отражаются в UI */
  const [optimisticAnswers, addOptimisticAnswers] = useOptimistic<AnswerInput[], AnswerInput[]>(
    answers,
    (_, next) => next,
  )

  const [optimisticStep, addOptimisticStep] = useOptimistic<number, number>(step, (_, next) => next)

  /** «Переход» для плавного обновления интерфейса */
  const [, startTransition] = useTransition()

  const [start, setStart] = useState(false)
  const queryClient = useQueryClient()
  const session = useAuthStore((s) => s.session)

  /* ----------------------- текущий вопрос --------------------------- */
  const currentQuestion = questions[optimisticStep]
  const questionName = questionNameFn(currentQuestion?.id)

  /* -------------------- служебные утилиты / формы ------------------- */
  const { evaluateSingle, evaluate } = useTestEvaluation(questions.map((q) => q))
  const form = useForm({
    defaultValues: {},
    mode: 'onChange',
    resolver: zodResolver(createStepSchema(currentQuestion)),
  })
  const { getValues, reset, trigger } = form

  const { mutateAsync: createTestResult, isPending: isPendingStart } = useCreateTestResult()
  const { mutateAsync: updateTestResult, isPending: isPendingUpdate } = useUpdateTestResult()
  const { data: testResult, isLoading, isFetching } = useGetTestResultById({ testId: test?.id })

  const testRes = testResult?.TestResults?.docs[0]

  /* ------------------------- режим «публичный» ---------------------- */
  const [publicCorrectAnswers, setPublicCorrectAnswers] = useState(0)
  const [publicCompleted, setPublicCompleted] = useState(false)

  /* ------------------------------------------------------------------ */
  /*                             EFFECTS                                */
  /* ------------------------------------------------------------------ */

  /** Восстанавливаем введённые ранее ответы в форму */
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
            ? answer.userAnswer[0]
            : answer.userAnswer
    }

    reset(values)
    // триггерим в следующем тике, чтобы сработала валидация
    setTimeout(() => trigger(), 0)
  }, [testRes, reset, trigger, questions])

  /** Если у юзера уже есть черновик, сразу стартуем */
  useEffect(() => {
    if (testRes?.status === 'in_progress') setStart(true)
  }, [testRes])

  /** Превращаем ответы из бекенда в масcив AnswerInput → state */
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

  /** Восстанавливаем последний отвеченный вопрос после перезагрузки */
  useEffect(() => {
    if (testRes && questions.length) {
      const answeredIds = testRes.answers.map((a) => +a.question.id)
      const lastAnsweredIndex = questions.findIndex((q, idx) => {
        const answered = answeredIds.includes(q.id)
        const nextUnanswered = !answeredIds.includes(questions[idx + 1]?.id)
        return answered && (nextUnanswered || idx === questions.length - 1)
      })
      if (lastAnsweredIndex >= 0) setStep(lastAnsweredIndex)
    }
  }, [testRes, questions])

  /* ------------------------------------------------------------------ */
  /*                           ОБРАБОТЧИКИ                              */
  /* ------------------------------------------------------------------ */

  /** click «Далее» */
  const onNext = () => {
    /* ------------------ НЕпубличный режим (сохраняем в БД) ----------- */
    if (!publicFlag) {
      const values = getValues() as Record<string, any>
      const isCorrect = evaluateSingle(currentQuestion.id, values)
      const userAnswer = formatUserAnswer(currentQuestion.questionType, values[questionName])

      /** Новый массив ответов (с учётом возможного обновления) */
      const nextAnswers: AnswerInput[] = [
        ...optimisticAnswers.filter((a) => a.question !== currentQuestion.id),
        { question: currentQuestion.id, userAnswer, isCorrect },
      ]

      /* 1. Optimistic UI */
      startTransition(() => {
        addOptimisticAnswers(nextAnswers)
        if (optimisticStep < questions.length - 1) addOptimisticStep(optimisticStep + 1)
      })

      /* 2. Запрос на сервер */
      if (!testRes?.id) return
      const isNotLast = step < questions.length - 1

      updateTestResult(
        {
          testResId: testRes.id,
          answers: nextAnswers,
          status: isNotLast ? 'in_progress' : 'completed',
        },
        {
          onSuccess: () => {
            setAnswers(nextAnswers)
            setStep((prev) => (isNotLast ? prev + 1 : prev))
            if (!isNotLast) {
              queryClient.invalidateQueries({
                queryKey: ['getTestResultById', session?.user?.id, test?.id],
              })
            }
          },
          onError: () => {
            // Rollback – возвращаем базовые значения
            startTransition(() => {
              addOptimisticAnswers(answers)
              addOptimisticStep(step)
            })
          },
        },
      )

      return
    }

    /* ------------------------ Публичный режим ----------------------- */
    if (optimisticStep < questions.length - 1) {
      addOptimisticStep(optimisticStep + 1)
    } else {
      setPublicCompleted(true)
      const answers = getValues()
      const { correctCount } = evaluate(answers)
      setPublicCorrectAnswers(correctCount)
    }
  }

  /** Сбросить прогресс (админ-кнопка «Начать заново») */
  const resetTestRes = () => {
    if (!testRes?.id) return
    updateTestResult(
      { testResId: testRes.id, answers: [], status: 'in_progress' },
      {
        onSuccess: () => {
          setAnswers([])
          setStep(0)
          // @ts-ignore
          Object.keys(form.getValues()).forEach((name) => form.unregister(name))
          form.reset(
            {}, // newValues
            {
              keepValues: false,
              keepDirty: false,
              keepDirtyValues: false,
              keepTouched: false,
              keepDefaultValues: false,
              keepIsSubmitted: false,
              keepErrors: false,
              keepSubmitCount: false,
            },
          )
          queryClient.invalidateQueries({
            queryKey: ['getTestResultById', session?.user?.id, test?.id],
          })
        },
      },
    )
  }

  /** Пользователь нажал «Начать тест» */
  const startFn = () => {
    if (test && !publicFlag)
      createTestResult({ testId: test.id }, { onSuccess: () => setStart(true) })
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

    /* состояние (optimistic) */
    step: optimisticStep,
    start,
    publicCorrectAnswers,
    publicCompleted,

    /* лоадеры */
    isPendingUpdate,
    isPendingStart,
    isLoading,
    isFetching,

    /* методы */
    setStep, // нужен в resetTestRes
    startFn,
    onNext,
    form,
    resetTestRes,
  }
}
