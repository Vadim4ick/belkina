import { TariffCard } from '@/entities/tariff'
import { auth } from '@/entities/user/auth'
import { GetTaraffisQuery } from '@/shared/graphql/client'
import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'

const TariffList = async ({
  title = 'Тарифы',
  tarrifs,
}: {
  title?: string
  tarrifs?: GetTaraffisQuery['Tariffs']['docs']
}) => {
  const session = await auth()

  if (!tarrifs) return null

  return (
    <section className="max-mobile:py-6 py-12">
      <Container>
        <div className="flex flex-col gap-12">
          <Typography tag="h2" variant="visuelt-bold-48">
            {title}
          </Typography>

          <div className="max-tablet:grid-cols-1 grid grid-cols-3 gap-6">
            {tarrifs.map((item, idx) => (
              <TariffCard
                key={idx}
                currentTariffId={session?.user.tariffId}
                item={item}
                className={cn(idx === 1 && 'border-blue border')}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export { TariffList }
