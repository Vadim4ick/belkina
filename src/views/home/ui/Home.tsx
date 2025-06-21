import { TariffList } from '@/features/tariff-list'
import { MainBanner } from './home-banners/main-banner'
import { TestsBanner } from './home-banners/tests-banner'
import { AboutBanner } from './home-banners/about-banner'
import { AskedQuestions } from '@/features/asked-questions'
import { TestCardQuestions } from '@/widgets/test-card-questions'
import { gql } from '@/shared/graphql/client'
import { getSettledValue } from '@/shared/lib/utils'

const Home = async () => {
  const [res, faqs, tarrifs] = await Promise.allSettled([
    gql.GetHomePage(),
    gql.GetFAGs(),
    gql.GetTaraffis(),
  ])

  const resVal = getSettledValue(res)
  const faqsVal = getSettledValue(faqs)
  const tarrifsVal = getSettledValue(tarrifs)

  return (
    <>
      <MainBanner content={resVal?.HomePage.mainOfferBanner} />
      <TariffList tarrifs={tarrifsVal?.Tariffs.docs} />
      <AboutBanner content={resVal?.HomePage.aboutProjectBanner} />
      <TestCardQuestions />
      <AskedQuestions faqs={faqsVal?.Faqs.docs} />
      <TestsBanner content={resVal?.HomePage.diagnosticTestBanner} />
    </>
  )
}

export { Home }
