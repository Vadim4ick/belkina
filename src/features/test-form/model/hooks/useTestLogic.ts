'use client'

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'

import { useTestEvaluation } from '@/entities/test/model/useTestEvaluation'
import {
  QUERY_KEYS,
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

import { formatUserAnswer } from '../const'
import { useProfileStore } from '@/entities/user/use-profile-store'

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

  /** «Истинные» значения после ответа сервера */
  const [answers, setAnswers] = useState<AnswerInput[]>([])
  const [step, setStep] = useState(0)

  /** Публичный режим */
  const [publicStep, setPublicStep] = useState(0)
  const [publicCorrectAnswers, setPublicCorrectAnswers] = useState(0)
  const [publicCompleted, setPublicCompleted] = useState(false)

  /** Прочее */
  const [start, setStart] = useState(false)
  const queryClient = useQueryClient()
  const { profile } = useProfileStore()

  /* ----------------------- текущий вопрос --------------------------- */

  const renderStep = publicFlag ? publicStep : step
  const renderSetStep = publicFlag ? setPublicStep : setStep

  const currentQuestion = questions[renderStep]
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

    reset(values, { keepDirty: false })
    setTimeout(() => trigger(), 0)
  }, [testRes, reset, trigger, questions])

  /** Если у юзера уже есть черновик, сразу стартуем */
  useEffect(() => {
    if (testRes?.status === 'in_progress') setStart(true)
  }, [testRes])

  /** Превращаем ответы из бекенда в state */
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

  /** Восстанавливаем последний отвеченный вопрос */
  useEffect(() => {
    if (publicFlag) return
    if (testRes && questions.length) {
      const answeredIds = testRes.answers.map((a) => +a.question.id)
      const lastAnsweredIndex = questions.findIndex((q, idx) => {
        const answered = answeredIds.includes(q.id)
        const nextUnanswered = !answeredIds.includes(questions[idx + 1]?.id)
        return answered && (nextUnanswered || idx === questions.length - 1)
      })
      if (lastAnsweredIndex >= 0) setStep(lastAnsweredIndex)
    }
  }, [testRes, questions, publicFlag])

  /* ------------------------------------------------------------------ */
  /*                           ОБРАБОТЧИКИ                              */
  /* ------------------------------------------------------------------ */

  const onNext = async () => {
    /* ------------------ НЕпубличный режим --------------------------- */
    if (!publicFlag) {
      const values = getValues() as Record<string, any>
      const isCorrect = evaluateSingle(currentQuestion.id, values)
      const userAnswer = formatUserAnswer(currentQuestion.questionType, values[questionName])

      /** Новый массив ответов */
      const nextAnswers: AnswerInput[] = [
        ...answers.filter((a) => a.question !== currentQuestion.id),
        { question: currentQuestion.id, userAnswer, isCorrect },
      ]

      if (!testRes?.id) return
      const isNotLast = step < questions.length - 1

      try {
        await updateTestResult({
          testResId: testRes.id,
          answers: nextAnswers,
          status: isNotLast ? 'in_progress' : 'completed',
        })

        setAnswers(nextAnswers)
        if (isNotLast) setStep((prev) => prev + 1)
        if (!isNotLast) {
          queryClient.invalidateQueries({
            queryKey: QUERY_KEYS.testResult(profile?.id, test?.id),
          })
        }
      } catch (e) {
        /* при ошибке ничего не меняем */
        console.error('Ошибка обновления теста', e)
      }

      return
    }

    /* ------------------------ Публичный режим ----------------------- */
    if (publicFlag) {
      if (publicStep < questions.length - 1) {
        setPublicStep(publicStep + 1)
      } else {
        setPublicCompleted(true)
        const answers = getValues()
        const { correctCount } = evaluate(answers)
        setPublicCorrectAnswers(correctCount)
      }
    }
  }

  /** Сбросить прогресс (админ‑кнопка «Начать заново») */
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
          form.reset({}, { keepValues: false })
          queryClient.invalidateQueries({
            queryKey: QUERY_KEYS.testResult(profile?.id, test?.id),
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

    /* состояние */
    step: renderStep,
    start,
    publicCorrectAnswers,
    publicCompleted,

    /* лоадеры */
    isPendingUpdate,
    isPendingStart,
    isLoading,
    isFetching,

    /* методы */
    setStep: renderSetStep,
    startFn,
    onNext,
    form,
    resetTestRes,
  }
}
