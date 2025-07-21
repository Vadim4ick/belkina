import { MainBanner } from './home-banners/main-banner'
import { TestsBanner } from './home-banners/tests-banner'
import { AboutBanner } from './home-banners/about-banner'
import { AskedQuestions } from '@/features/asked-questions'
import { TestCardQuestions } from '@/widgets/test-card-questions'
import { getSettledValue } from '@/shared/lib/utils'
import { SliderWrapper } from '@/widgets/slider-wrapper'
import { getHomePage } from '@/shared/actions/home.action'
import { getFAQ } from '@/shared/actions/faq.action copy'
import { getPosts } from '@/shared/actions/post.action'

const Home = async () => {
  const [res, faqs, posts] = await Promise.allSettled([getHomePage(), getFAQ(), getPosts()])

  const resVal = getSettledValue(res)
  const faqsVal = getSettledValue(faqs)
  const postsVal = getSettledValue(posts)

  console.log('resVal', resVal)
  console.log('faqsVal', faqsVal)
  console.log('postsVal', postsVal)

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

      {faqsVal && faqsVal?.Faqs && faqsVal?.Faqs?.docs?.length > 0 && (
        <AskedQuestions faqs={faqsVal?.Faqs.docs} />
      )}

      {resVal &&
        resVal?.HomePage.diagnosticTestBanner &&
        resVal?.HomePage.diagnosticTestBanner.title && (
          <TestsBanner content={resVal?.HomePage.diagnosticTestBanner} />
        )}

      {postsVal && postsVal?.Posts && postsVal?.Posts?.docs?.length > 0 && (
        <SliderWrapper posts={postsVal?.Posts} />
      )}
    </>
  )
}

export { Home }
