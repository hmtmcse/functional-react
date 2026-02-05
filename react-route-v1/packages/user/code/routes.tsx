import { RouteObject } from "react-router-dom"
import UserList from "./pages/UserList"
import UserDetail from "./pages/UserDetail"

export const userRoutes: RouteObject[] = [
  {
    path: "/users",
    element: <UserList />
  },
  {
    path: "/users/:id",
    element: <UserDetail />
  }
]
