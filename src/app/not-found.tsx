import Link from 'next/link'

import './../shared/assets/css/globals.css'

const NotFoundPage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">Страница не найдена</h1>

      <Link
        href="/"
        className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Вернуться на главную
      </Link>
    </section>
  )
}

export default NotFoundPage
