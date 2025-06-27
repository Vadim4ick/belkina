import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'

const TestsPage = ({ title = 'Тесты' }: { title?: string }) => {
  return (
    <section className="max-mobile:py-6 py-12">
      <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
        {title}
      </Typography>
      <TestsList />
      <TestsList title="Пройденные" />
      <TestsList title="Тесты доступные в другом тарифе" />
    </section>
  )
}

export { TestsPage }
