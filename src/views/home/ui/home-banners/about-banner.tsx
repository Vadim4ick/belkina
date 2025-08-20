import { GetHomePageQuery } from '@/shared/graphql/__generated__'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { MediaBlock } from './media-block'
import RichText from '@/shared/ui/rich-text'

const AboutBanner = ({
  content,
}: {
  content: GetHomePageQuery['HomePage']['aboutProjectBanner']
}) => {
  return (
    <section className="max-mobile:py-6 py-12">
      <Container>
        <div className="bg-light-grey max-desktop:gap-6 max-tablet:flex-col max-tablet:py-6 max-tablet:px-4 flex items-center gap-[48px] rounded-[16px]">
          <div className="max-desktop:w-[450px] max-tablet:w-full w-[570px] flex-none rounded-[16px]">
            <MediaBlock
              media={content.media}
              className="rounded-[16px]"
              aspect="aspect-[570/612]" /* можно поменять на aspect-video при видео-only */
            />
          </div>

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

              {/* <Typography
                tag="div"
                className="text-dark-grey rounded-[16px] bg-white p-6"
                variant="poppins-md-16"
              >
                {content.description}
              </Typography> */}

              {content.description && (
                <RichText
                  className="m-0 flex flex-col"
                  data={content.description}
                  enableGutter={false}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { AboutBanner }
