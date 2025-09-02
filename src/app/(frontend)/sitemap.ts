import type { MetadataRoute } from 'next'

const baseUrl = 'https://belkina.online'

const sitemap: MetadataRoute.Sitemap = [
  {
    url: baseUrl + '/',
    changeFrequency: 'weekly',
    lastModified: new Date(),
    priority: 1.0,
  },
  {
    url: baseUrl + '/webinars',
    changeFrequency: 'weekly',
    lastModified: new Date(),
    priority: 0.8,
  },
  {
    url: baseUrl + '/faq',
    changeFrequency: 'monthly',
    lastModified: new Date(),
    priority: 0.7,
  },
  {
    url: baseUrl + '/tests',
    changeFrequency: 'weekly',
    lastModified: new Date(),
    priority: 0.9,
  },
  {
    url: baseUrl + '/posts',
    changeFrequency: 'weekly',
    lastModified: new Date(),
    priority: 0.8,
  },
  {
    url: baseUrl + '/support',
    changeFrequency: 'monthly',
    lastModified: new Date(),
    priority: 0.5,
  },
  {
    url: baseUrl + '/privacy-policy',
    changeFrequency: 'yearly',
    lastModified: new Date(),
    priority: 0.3,
  },
]

export default function sitemapFunc(): MetadataRoute.Sitemap {
  return sitemap
}
