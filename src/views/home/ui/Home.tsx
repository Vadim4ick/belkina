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
      <MainBanner content={resVal?.HomePage.mainOfferBanner} />
      <AboutBanner content={resVal?.HomePage.aboutProjectBanner} />
      <TestCardQuestions test={resVal?.HomePage.featuredTest} />
      <AskedQuestions faqs={faqsVal?.Faqs.docs} />
      <TestsBanner content={resVal?.HomePage.diagnosticTestBanner} />
      {postssVal && <SliderWrapper posts={postssVal?.Posts} />}
    </>
  )
}

export { Home }
