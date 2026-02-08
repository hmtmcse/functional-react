import {createBrowserRouter} from "react-router-dom"
import UseEffectExamples from "./components/use-effect-examples.tsx";
import ParentComponent from "./components/parent-component.tsx";

export const router = createBrowserRouter([
    {path: "/", element: <h1>Home</h1>},
    {path: "/use-effect", element: <UseEffectExamples/>},
    {path: "/parent-child", element: <ParentComponent/>},
])
