import { TariffList } from '@/features/tariff-list'
import { MainBanner } from './home-banners/main-banner'
import { TestsBanner } from './home-banners/tests-banner'
import { AboutBanner } from './home-banners/about-banner'
import { AskedQuestions } from '@/features/asked-questions'
import { TestCardQuestions } from '@/widgets/test-card-questions'
import { gql } from '@/shared/graphql/client'

const Home = async () => {
  const res = await gql.GetHomePage()

  return (
    <>
      <MainBanner content={res.HomePage.mainOfferBanner} />
      <TariffList />
      <AboutBanner content={res.HomePage.aboutProjectBanner} />
      <TestCardQuestions />
      <AskedQuestions />
      <TestsBanner content={res.HomePage.diagnosticTestBanner} />
    </>
  )
}

export { Home }
