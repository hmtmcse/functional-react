import {createBrowserRouter} from "react-router-dom"
import UserProfileForm from "./form-example.tsx";
import UsersPage from "./user/UsersPage.tsx";
import ExpLanding from "./exp/exp-landing.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
    },
    {
        path: "/form",
        element: (<UserProfileForm/>)
    },
    {
        path: "/crud1",
        element: (<UsersPage/>)
    },
    {
        path: "/exp-landing",
        element: (<ExpLanding/>)
    },
])
