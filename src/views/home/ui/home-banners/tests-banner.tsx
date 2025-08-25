import { GetHomePageQuery } from '@/shared/graphql/__generated__'
import { getRouteTests } from '@/shared/lib/routes'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'
import Image from 'next/image' // Используем next/image для оптимизации

const TestsBanner = ({
  content,
}: {
  content: GetHomePageQuery['HomePage']['diagnosticTestBanner']
}) => {
  return (
    <section className="bg-light-grey max-mobile:py-6 py-12">
      <Container className="relative flex max-w-[1440px] items-center justify-center">
        <div className="bg-blue relative w-full overflow-hidden rounded-[16px]">
          <div className="max-tablet:flex-col max-mobile:py-[24px] max-mobile:px-4 max-tablet:h-full flex h-[510px] w-full items-center justify-between gap-6 px-[40px] py-[48px]">
            <div className="max-tablet:max-w-full max- z-10 flex h-full w-full flex-col justify-center gap-[24px] lg:max-w-[70%]">
              <div className="flex w-full flex-col gap-6 md:max-w-3/4 lg:max-w-full">
                <Typography
                  className="max-mobile:text-[32px] text-white"
                  tag="h1"
                  variant="visuelt-bold-48"
                >
                  {content.title}
                </Typography>

                <Typography className="text-white" tag="p" variant="poppins-md-16">
                  {content.subtitle}
                </Typography>
              </div>

              <Link href={getRouteTests()}>
                <Button className="w-fit" variant={'ghost'}>
                  Перейти к тестам
                </Button>
              </Link>
            </div>

            {/* Мобильная версия изображения */}
            <div className="max-mobile:block z-10 -mr-[16px] -mb-[24px] hidden h-full self-end">
              <Image
                src="/img/teacher.png"
                alt="teacher"
                width={300}
                height={400}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Десктопная версия изображения */}
          <div className="max-mobile:hidden absolute right-0 bottom-0 z-10 h-full max-w-[400px]">
            <Image
              src="/img/teacher.png"
              alt="teacher"
              width={400}
              height={510}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Фоновый элемент */}
          <div className="mobile:bottom-0 max-mobile:top-[150px] max-tablet:left-[-20px] absolute w-[1500px] opacity-40">
            <Image
              alt="Фоновая линия" // alt для декоративных изображений лучше оставлять пустым ""
              src={'/img/bannerLine.png'}
              fill // Растягиваем на весь родительский div
              className="object-contain" // Сохраняем пропорции
              quality={50} // Для фоновых изображений можно снизить качество
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { TestsBanner }
