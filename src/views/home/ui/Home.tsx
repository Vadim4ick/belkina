import { MainBanner } from './home-banners/main-banner'
import { TestsBanner } from './home-banners/tests-banner'
import { AboutBanner } from './home-banners/about-banner'
import { AskedQuestions } from '@/features/asked-questions'
import { TestCardQuestions } from '@/widgets/test-card-questions'
import { gql } from '@/shared/graphql/client'
import { getSettledValue } from '@/shared/lib/utils'
import { SliderWrapper } from '@/widgets/slider-wrapper'

const Home = async () => {
  const [res, faqs, posts] = await Promise.allSettled([
    gql.GetHomePage(),
    gql.GetFAGs(),
    gql.GetPostList({ limit: 9, page: 1 }),
  ])

  const resVal = getSettledValue(res)
  const faqsVal = getSettledValue(faqs)
  const postssVal = getSettledValue(posts)

  return (
    <>
      {resVal && resVal?.HomePage.mainOfferBanner.title && (
        <MainBanner content={resVal?.HomePage.mainOfferBanner} />
      )}

      {resVal && resVal?.HomePage.aboutProjectBanner.title && (
        <AboutBanner content={resVal?.HomePage.aboutProjectBanner} />
      )}

      {resVal && resVal?.HomePage.featuredTest && (
        <TestCardQuestions test={resVal?.HomePage.featuredTest} />
      )}

      {faqsVal && faqsVal?.Faqs?.docs?.length > 0 && <AskedQuestions faqs={faqsVal?.Faqs.docs} />}

      {resVal && resVal?.HomePage.diagnosticTestBanner.title && (
        <TestsBanner content={resVal?.HomePage.diagnosticTestBanner} />
      )}

      {postssVal && postssVal?.Posts?.docs?.length > 0 && (
        <SliderWrapper posts={postssVal?.Posts} />
      )}
    </>
  )
}

export { Home }
