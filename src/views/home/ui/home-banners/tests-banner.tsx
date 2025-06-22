import { FeedbackForm } from '@/features/feedback-form'
import { GetHomePageQuery } from '@/shared/graphql/__generated__'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'

const TestsBanner = ({
  content,
}: {
  content?: GetHomePageQuery['HomePage']['diagnosticTestBanner']
}) => {
  if (!content) return null
  return (
    <section className="bg-light-grey max-mobile:py-6 py-12">
      <Container className="relative flex items-center justify-center">
        <div className="relative w-full overflow-hidden">
          <div className="bg-blue max-tablet:flex-col max-mobile:py-[24px] max-mobile:px-4 max-tablet:h-full flex h-[570px] w-full items-center justify-between gap-6 rounded-[16px] px-[20px] py-[48px]">
            <div className="max-tablet:max-w-full z-10 flex h-full w-full max-w-[485px] flex-col justify-between gap-[24px]">
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

              <div className="bg-green w-fit rounded-[12px] px-4 py-3">
                <Typography className="uppercase" tag="p" variant="poppins-md-16">
                  {content.label}
                </Typography>
              </div>
            </div>

            <FeedbackForm className="max-tablet:items-start max-tablet:justify-start max-mobile:items-center z-10" />

            <img
              src={'/img/teacher.png'}
              alt="teacher"
              className="max-mobile:block z-10 -mb-[24px] hidden max-h-[350px]"
            />
          </div>
          <div className="mobile:bottom-0 max-mobile:top-[150px] max-tablet:left-[-20px] absolute right-[20px] w-[1500px] px-4">
            <img alt="line" src={'/img/bannerLine.png'} />
          </div>
          <img
            src={'/img/teacher.png'}
            alt="teacher"
            className="max-tablet:right-0 tablet:left-1/2 tablet:-translate-x-1/2 max-mobile:hidden absolute bottom-0 max-[1200px]:max-h-[450px]"
          />
        </div>
      </Container>
    </section>
  )
}

export { TestsBanner }
