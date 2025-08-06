const V = 'v1'

function join(...parts: (string | number | undefined | null)[]) {
  return parts
    .filter((p) => p !== undefined && p !== null && p !== '')
    .map(String)
    .join(':')
}

export const CacheKeys = {
  gql(resolverName: string, argsHash: string) {
    return join(V, 'gql', resolverName || 'anon', argsHash)
  },

  tags: {
    examsAll: () => join(V, 'exams', 'all'),
    subjectsAll: () => join(V, 'subjects', 'all'),

    // purchasesByUser: (userId: string | number) => join(V, 'purchases', 'user', userId),
    // purchasesAll: () => join(V, 'purchases', 'all'),

    getMe: (userId: string | number) => join(V, 'me', userId),

    getHomePage: () => join(V, 'homePage'),

    getFAQ: () => join(V, 'faq'),

    courseBySlug: ({ slug }: { slug: string }) => join(V, 'courses', slug),

    fetchAllTestsIds: () => join(V, 'fetchAllTestsIds'),

    testById: (id: string | number) => join(V, 'test', id),
    recommendations: (userId: string | number) => join(V, 'recommendations', userId),
    recommendationsAll: () => join(V, 'recommendations'),

    testHistory: (userId: string | number) => join(V, 'testHistory', userId),

    posts: () => join(V, 'posts'),
    postBySlug: ({ slug }: { slug: string }) => join(V, 'posts', slug),
    postsByPage: ({ page }: { page: number }) => join(V, 'posts', page),

    webinars: () => join(V, 'webinars'),
    webinarBySlug: ({ slug }: { slug: string }) => join(V, 'webinars', slug),
  },
} as const
