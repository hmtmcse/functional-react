import {createBrowserRouter} from "react-router-dom"
import CounterApp from "./counter/CounterApp.tsx";
import PropsTest from "./basic/props-test.tsx";

export const router = createBrowserRouter([
    {path: "/", element: <CounterApp/>},
    {path: "/props-test", element: <PropsTest position={"top"} autoCloseMS={100}/>},
])
