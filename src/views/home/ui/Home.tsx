import { TariffList } from '@/features/tariff-list'
import { MainBanner } from './home-banners/main-banner'
import { TestsBanner } from './home-banners/tests-banner'
import { AboutBanner } from './home-banners/about-banner'
import { AskedQuestions } from '@/features/asked-questions'
import { TestCardQuestions } from '@/widgets/test-card-questions'

const Home = () => {
  return (
    <>
      <MainBanner />
      <TariffList />
      <AboutBanner />
      <TestCardQuestions />
      <AskedQuestions />
      <TestsBanner />
    </>
  )
}

export { Home }
