import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import { memo } from 'react'

const CompletedInfo = memo(
  ({
    totalCorrectAnswers,
    countQuestions,
    publicFlag,
    publicCorrectAnswers,
  }: {
    totalCorrectAnswers: number
    countQuestions: number
    publicFlag: boolean
    publicCorrectAnswers: number
  }) => {
    if (publicFlag) {
      return (
        <div className="border-blue mx-auto flex max-w-md flex-col items-center justify-center gap-8 rounded-2xl border bg-white p-10 text-center shadow-lg">
          <div className="text-4xl">🎉</div>

          <Typography tag="h2" variant="poppins-md-16" className="font-semibold text-green-400">
            Вы успешно прошли тест! <br />
            {`Количество правильных ответов: ${publicCorrectAnswers} из ${countQuestions}`}
          </Typography>

          <Typography tag="p" variant="poppins-md-16" className="text-dark-grey">
            Для получения бесплатного видеоурока укажите свой e-mail
          </Typography>

          <div className="flex w-full flex-col gap-4">
            <Input type="email" name="email" placeholder="Ваш e-mail" />

            <Button>Отправить</Button>
          </div>
        </div>
      )
    }

    return (
      <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-8 p-10 text-center">
        <div className="text-4xl">🎉</div>

        <Typography tag="h2" variant="poppins-md-16" className="font-semibold text-green-400">
          Вы успешно прошли тест! <br />
          {`Количество правильных ответов: ${totalCorrectAnswers} из ${countQuestions}`}
        </Typography>

        <Button type="button">Пройти снова</Button>
      </div>
    )
  },
)

export { CompletedInfo }
