import { TestForm } from '@/features/test-form'
import { TestFragmentFragment } from '@/shared/graphql/__generated__'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'

const TestCardQuestions = ({ test }: { test?: TestFragmentFragment }) => {
  if (!test) return null

  return (
    <section className="max-mobile:py-12 bg-[#F6F6F6] py-20">
      <Container className="max-mobile:gap-6 flex flex-col gap-20">
        <Typography
          tag="h2"
          variant="visuelt-bold-48"
          className="max-mobile:text-[32px] max-w-[600px]"
        >
          Пройди тест и получи бесплатный видеоурок
        </Typography>

        <TestForm test={test} />
      </Container>
    </section>
  )
}

export { TestCardQuestions }
