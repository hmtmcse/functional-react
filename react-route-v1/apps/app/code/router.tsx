import {createBrowserRouter} from "react-router-dom"
import {userRoutes} from "@bfe/user";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
    },
    ...userRoutes
])
