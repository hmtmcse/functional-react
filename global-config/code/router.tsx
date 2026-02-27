import {createBrowserRouter} from "react-router-dom"
import CounterApp from "./counter/CounterApp.tsx";

export const router = createBrowserRouter([
    {path: "/", element: <CounterApp/>},
])
