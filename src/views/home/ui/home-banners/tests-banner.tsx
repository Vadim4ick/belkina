import { GetHomePageQuery } from '@/shared/graphql/__generated__'
import { getRouteTests } from '@/shared/lib/routes'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'

const TestsBanner = ({
  content,
}: {
  content: GetHomePageQuery['HomePage']['diagnosticTestBanner']
}) => {
  return (
    <section className="bg-light-grey max-mobile:py-6 py-12">
      <Container className="relative flex max-w-[1200px] items-center justify-center">
        <div className="bg-blue relative w-full overflow-hidden rounded-[16px]">
          <div className="max-tablet:flex-col max-mobile:py-[24px] max-mobile:px-4 max-tablet:h-full flex h-[570px] w-full items-center justify-between gap-6 px-[20px] py-[48px]">
            <div className="max-tablet:max-w-full z-10 flex h-full w-full max-w-[700px] flex-col justify-between gap-[24px]">
              <div className="flex flex-col gap-6">
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

              {/* <div className="bg-green w-fit rounded-[12px] px-4 py-3">
                <Typography className="uppercase" tag="p" variant="poppins-md-16">
                  {content.label}
                </Typography>
              </div> */}

              <Link href={getRouteTests()}>
                <Button className="w-fit" variant={'ghost'}>
                  Перейти к тестам
                </Button>
              </Link>
            </div>

            <img
              src={'/img/teacher.png'}
              alt="teacher"
              className="max-mobile:block z-10 -mr-[16px] -mb-[24px] hidden max-h-[350px] self-end"
            />
          </div>
          <div className="mobile:bottom-0 max-mobile:top-[150px] max-tablet:left-[-20px] absolute w-[1500px]">
            <img alt="line" src={'/img/bannerLine.png'} />
          </div>
          <img
            src={'/img/teacher.png'}
            alt="teacher"
            className="max-mobile:hidden absolute right-0 bottom-0 max-w-[400px]"
          />
        </div>
      </Container>
    </section>
  )
}

export { TestsBanner }
