export const getRouteHome = () => '/'
export const getRouteAuth = () => '/auth/sign-in'
export const getRouteRegister = () => '/auth/sign-up'
export const getRouteProfile = () => '/profile'
export const getRouteCatalog = () => '/catalog'
export const getRouteTests = () => '/tests'
export const getRouteTestById = ({ id }: { id: string | number }) => `${getRouteTests()}/${id}`
export const getRouteMyCourses = () => '/courses'
export const getRouteTariffs = () => '/tariffs'

export const authRoutes = [getRouteAuth(), getRouteRegister()]
export const privateRoutes = [getRouteProfile()]
