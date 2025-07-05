import { MainBanner } from './home-banners/main-banner'
import { TestsBanner } from './home-banners/tests-banner'
import { AboutBanner } from './home-banners/about-banner'
import { AskedQuestions } from '@/features/asked-questions'
import { TestCardQuestions } from '@/widgets/test-card-questions'
import { getServerGqlClient } from '@/shared/graphql/client'
import { getSettledValue } from '@/shared/lib/utils'

const Home = async () => {
  const gql = await getServerGqlClient()

  const [res, faqs] = await Promise.allSettled([gql.GetHomePage(), gql.GetFAGs()])

  const resVal = getSettledValue(res)
  const faqsVal = getSettledValue(faqs)

  return (
    <>
      <MainBanner content={resVal?.HomePage.mainOfferBanner} />
      <AboutBanner content={resVal?.HomePage.aboutProjectBanner} />
      <TestCardQuestions test={resVal?.HomePage.featuredTest} />
      <AskedQuestions faqs={faqsVal?.Faqs.docs} />
      <TestsBanner content={resVal?.HomePage.diagnosticTestBanner} />
    </>
  )
}

export { Home }
