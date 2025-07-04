export const getRouteHome = () => '/'
export const getRouteAuth = () => '/auth/sign-in'
export const getRouteRegister = () => '/auth/sign-up'
export const getRouteProfile = () => '/profile'
export const getRouteTests = () => '/tests'
export const getRouteTestById = ({ id }: { id: string | number }) => `${getRouteTests()}/${id}`
export const getRouteCourses = () => '/courses'
export const getRouteCourseBySlug = ({ slug }: { slug: string }) => `${getRouteCourses()}/${slug}`
export const getRouteTariffs = () => '/tariffs'

export const authRoutes = [getRouteAuth(), getRouteRegister()]
export const privateRoutes = [getRouteProfile()]
