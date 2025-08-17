import { MainBanner } from './home-banners/main-banner'
import { TestsBanner } from './home-banners/tests-banner'
import { AboutBanner } from './home-banners/about-banner'
import { TestCardQuestions } from '@/widgets/test-card-questions'
import { getSettledValue } from '@/shared/lib/utils'
import { SliderWrapper } from '@/widgets/slider-wrapper'
import { getHomePage } from '@/shared/actions/home.action'
import { getPosts } from '@/shared/actions/post.action'
import { VerifyEmail } from '@/widgets/verify-email'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await getHomePage()
    const meta = res?.HomePage?.Meta || {}

    return {
      title: meta.seo_title || 'Подготовка к ЕГЭ по русскому языку | BELKINA.ONLINE | Главная',
      description:
        meta.seo_description ||
        'Эффективно готовьтесь к ЕГЭ по русскому с персональной программой на платформе BELKINA.ONLINE',
    }
  } catch (error) {
    console.error('Failed to generate metadata:', error)
    return {
      title: 'Подготовка к ЕГЭ по русскому языку | BELKINA.ONLINE | Главная',
      description:
        'Эффективно готовьтесь к ЕГЭ по русскому с персональной программой на платформе BELKINA.ONLINE',
    }
  }
}

const Home = async () => {
  const [res, posts] = await Promise.allSettled([getHomePage(), getPosts()])

  const resVal = getSettledValue(res)
  const postsVal = getSettledValue(posts)

  return (
    <>
      {resVal && resVal?.HomePage && resVal?.HomePage?.mainOfferBanner?.title && (
        <MainBanner content={resVal?.HomePage?.mainOfferBanner} />
      )}

      {resVal && resVal?.HomePage && resVal?.HomePage.aboutProjectBanner.title && (
        <AboutBanner content={resVal?.HomePage.aboutProjectBanner} />
      )}

      {resVal && resVal?.HomePage && resVal?.HomePage?.featuredTest && (
        <TestCardQuestions test={resVal?.HomePage?.featuredTest} />
      )}

      {resVal &&
        resVal?.HomePage.diagnosticTestBanner &&
        resVal?.HomePage.diagnosticTestBanner.title && (
          <TestsBanner content={resVal?.HomePage.diagnosticTestBanner} />
        )}

      {postsVal && postsVal?.Posts && postsVal?.Posts?.docs?.length > 0 && (
        <SliderWrapper posts={postsVal?.Posts} />
      )}

      <VerifyEmail />
    </>
  )
}

export { Home }
