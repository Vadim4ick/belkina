import { FeedbackForm } from '@/features/feedback-form'
import { GetHomePageQuery } from '@/shared/graphql/__generated__'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'

const MainBanner = ({ content }: { content: GetHomePageQuery['HomePage']['mainOfferBanner'] }) => {
  return (
    <section className="bg-light-grey max-tablet:h-full max-mobile:pb-6 max-mobile:pt-[calc(var(--header-height)_+_24px)] h-[calc(100vh_-_var(--header-height))]">
      <Container className="flex items-center justify-center">
        <div className="bg-blue max-tablet:flex-col max-mobile:py-[24px] max-mobile:px-4 flex h-fit w-full items-center justify-between gap-6 rounded-[16px] px-[40px] py-[48px]">
          <div className="max-tablet:max-w-full flex w-full max-w-[485px] flex-col gap-[24px]">
            <div className="bg-green flex w-fit items-center gap-[10px] rounded-[12px] px-4 py-3">
              <Typography className="uppercase" tag="p" variant="poppins-md-16">
                {content.label}
              </Typography>
            </div>

            <Typography
              className="max-mobile:text-[32px] text-white"
              tag="h1"
              variant="visuelt-bold-48"
            >
              {content.title}
            </Typography>

            <Typography className="text-white" tag="p" variant="poppins-md-16">
              {content.description}
            </Typography>

            <div className="max-mobile:p-4 flex flex-col gap-4 rounded-[12px] bg-[#0033B9] px-6 py-4">
              {content.options.map((option) => (
                <div key={option.id} className="flex items-center gap-4">
                  <div className="flex h-[36px] w-full max-w-[50px] items-center justify-center rounded-[120px] bg-black">
                    🔥
                  </div>
                  <Typography className="text-white" tag="p" variant="poppins-reg-14">
                    {option.text}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <FeedbackForm />
        </div>
      </Container>
    </section>
  )
}

export { MainBanner }
