export const getRouteHome = () => '/'
export const getRouteAuth = () => '/auth/sign-in'
export const getRouteRegister = () => '/auth/sign-up'
export const getRouteProfile = () => '/profile'
export const getRouteTests = () => '/tests'
export const getRouteTestById = ({ id }: { id: string | number }) => `${getRouteTests()}/${id}`
export const getRouteCourses = () => '/courses'
export const getRouteWebinars = () => '/webinars'
export const getRouteWebinarsBySlug = ({ slug }: { slug: string }) =>
  `${getRouteWebinars()}/${slug}`
export const getRouteCourseBySlug = ({ slug, videoId }: { slug: string; videoId: string }) =>
  `${getRouteCourses()}/${slug}/${videoId}`

export const getRoutePosts = () => '/posts'
export const getRoutePostsPaginated = (pageNum: number) => `${getRoutePosts()}/page/${pageNum}`
export const getRoutePostsBySlug = (slug: string) => `${getRoutePosts()}/${slug}`

export const authRoutes = [getRouteAuth(), getRouteRegister()]
export const privateRoutes = [getRouteProfile()]
