import {createBrowserRouter} from "react-router-dom"
import UseEffectExamples from "./components/use-effect-examples.tsx";

export const router = createBrowserRouter([
    {path: "/", element: <h1>Home</h1>},
    {path: "/use-effect", element: <UseEffectExamples/>},
])
