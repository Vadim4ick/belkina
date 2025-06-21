import { GetHomePageQuery } from '@/shared/graphql/__generated__'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import Image from 'next/image'

const AboutBanner = ({
  content,
}: {
  content: GetHomePageQuery['HomePage']['aboutProjectBanner']
}) => {
  return (
    <section className="max-mobile:py-6 py-12">
      <Container>
        <div className="bg-light-grey max-desktop:gap-6 max-tablet:flex-col max-tablet:py-6 max-tablet:px-4 flex gap-[48px] rounded-[16px]">
          <Image
            src="/img/about.png"
            alt="about"
            width={570}
            height={612}
            unoptimized
            className="max-desktop:w-[450px] max-tablet:w-full max-tablet:max-h-[450px] rounded-[16px]"
          />

          <div className="tablet:py-[40px] tablet:pr-[22px] max-tablet:gap-6 flex h-auto flex-col justify-between gap-10">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <Typography tag="h2" variant="visuelt-bold-48">
                  {content.title}
                </Typography>

                <Typography tag="p" variant="poppins-md-16">
                  {content.subtitle}
                </Typography>
              </div>

              <Typography
                tag="div"
                className="text-dark-grey rounded-[16px] bg-white p-6"
                variant="poppins-md-16"
              >
                {content.description}
              </Typography>
            </div>

            <Button size={'xl'}>Пройти тест</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { AboutBanner }
