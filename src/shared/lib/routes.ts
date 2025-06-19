export const getRouteHome = () => "/";
export const getRouteAuth = () => "/auth/sign-in";
export const getRouteRegister = () => "/auth/sign-up";
export const getRouteProfile = () => "/profile";

export const authRoutes = [getRouteAuth(), getRouteRegister()];
export const privateRoutes = [getRouteProfile()];
