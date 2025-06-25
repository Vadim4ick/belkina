import { Recomendations } from '@/views/recomendations'
import { ProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import { TestsHistory } from '@/widgets/tests-history'

const mockProducts = [
  {
    id: '1',
    title: 'Информационная обработка письменных текстов',
    categories: ['ЕГЭ', 'Платно'],
    duration: '11:30:20',
    description:
      'В этом материале будут основные правила по русскому языку, которые пригодятся на ЕГЭ',
    price: 3790,
    discount: 10,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Физика: Разбор задач на кинематику',
    categories: ['ОГЭ', 'Бесплатно'],
    duration: '05:12:00',
    description:
      'Подробный разбор задач на движение тел. Подходит для подготовки к ОГЭ и олимпиадам.',
    price: 0,
    discount: 0,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Математика: Производные и интегралы',
    categories: ['ЕГЭ', 'Платно'],
    duration: '08:45:10',
    description: 'Разбор тем по высшей математике для студентов и старшеклассников.',
    price: 2990,
    discount: 15,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'История России: XX век',
    categories: ['ОГЭ', 'Платно'],
    duration: '07:00:00',
    description:
      'Курс охватывает ключевые события, реформы и личности России XX века. Курс охватывает ключевые события, реформы и личности России XX века.',
    price: 1590,
    discount: 5,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Основы программирования на Python',
    categories: ['ЕГЭ', 'Платно'],
    duration: '12:20:00',
    description: 'Базовый курс по Python для школьников и начинающих разработчиков.',
    price: 4490,
    discount: 20,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
]

function Profile() {
  return (
    <div className="pb-10">
      <Recomendations />
      <TestsHistory />
      <ProductCardsGridCatalog title="Бесплатные материалы">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductCardsGridCatalog>
      <ProductCardsGridCatalog title="Каталог">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductCardsGridCatalog>
    </div>
  )
}

export default Profile
