import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
  Outlet,
  NavLink,
  useNavigation,
  useParams,
  useLoaderData,
  useRouteError,
  redirect,
} from "react-router-dom"

export function createReactRoute(routes: any, options?: any) {
  return createBrowserRouter(routes, options)
}


export function MountRoute({router}: { router: any }) {
  return <ReactRouterProvider router={router}/>
}

// Core
export const RouterOutlet = Outlet
export const routerNavLink = NavLink

// Hooks
export const routerUseNavigation = useNavigation
export const routerUseParams = useParams
export const routerUseLoaderData = useLoaderData
export const routerUseRouteError = useRouteError

// Utils
export const routerRedirect = redirect