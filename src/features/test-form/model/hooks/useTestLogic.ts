/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useTestEvaluation } from '@/entities/test/model/useTestEvaluation'
import {
  useCreateTestResult,
  useGetTestResultById,
  useUpdateTestResult,
} from '@/shared/services/test.service'
import { questionNameFn } from '@/entities/test/model/const'
import { createStepSchema } from '@/entities/test/model/schema'
import { TestFragmentFragment } from '@/shared/graphql/__generated__'
import { useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '@/shared/hooks/use-auth-store'

export const useTestLogic = ({
  test,
  publicFlag,
}: {
  test?: TestFragmentFragment
  publicFlag: boolean
}) => {
  const questions = test?.questions || []
  const [step, setStep] = useState(0)
  const [start, setStart] = useState(false)

  const queryClient = useQueryClient()

  const session = useAuthStore((state) => state.session)

  const currentQuestion = questions[step]
  const questionName = questionNameFn(currentQuestion.id)

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

  const [publicCorrectAnswers, setPublicCorrectAnswers] = useState(0)
  const [publicCompleted, setPublicCompleted] = useState(false)

  useEffect(() => {
    const prevAnswer = testRes?.answers.find((a) => +a.question.id === +currentQuestion.id)

    if (prevAnswer) {
      reset({ [questionName]: prevAnswer.userAnswer })
      setTimeout(() => {
        trigger()
      }, 0)
    }
  }, [currentQuestion.id, questionName, reset, testRes, trigger])

  useEffect(() => {
    if (testRes?.status === 'in_progress') {
      setStart(true)
    }
  }, [testRes])

  useEffect(() => {
    return () => {
      setPublicCompleted(false)
    }
  }, [])

  const onNext = () => {
    if (!publicFlag) {
      const values = getValues() as Record<string, any>
      const isCorrect = evaluateSingle(currentQuestion.id, values)
      const isNotLast = step < questions.length - 1

      console.log('testRes', testRes)

      updateTestResult(
        {
          testResId: testRes?.id,
          questionId: currentQuestion.id,
          answerJSON: JSON.stringify(values[questionName]),
          isCorrect,
          status: isNotLast ? 'in_progress' : 'completed',
        },
        {
          onSuccess: () => {
            if (isNotLast) {
              setStep((prev) => prev + 1)
            } else {
              queryClient.invalidateQueries({
                queryKey: ['getTestResultById', session?.user?.id, test?.id],
              })
            }
          },
        },
      )
    }

    if (publicFlag) {
      if (step < questions.length - 1) {
        setStep((prev) => prev + 1)
      } else {
        setPublicCompleted(true)

        const answers = getValues()
        const { results, correctCount } = evaluate(answers)

        setPublicCorrectAnswers(correctCount)

        console.log('Ответы:', answers)
        console.log('Результаты:', results)
        console.log(`Правильных ответов: ${correctCount} из ${questions.length}`)
      }
    }
  }

  const startFn = () => {
    if (test && !publicFlag) {
      createTestResult({ testId: test.id }, { onSuccess: () => setStart(true) })
    }

    if (publicFlag) {
      setStart(true)
    }
  }

  return {
    questions,
    step,
    setStep,
    start,
    startFn,
    currentQuestion,
    isPendingUpdate,
    isPendingStart,
    form,
    onNext,
    publicCorrectAnswers,
    publicCompleted,

    isLoading,
    isFetching,
    testRes,
  }
}
