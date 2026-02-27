import * as React from "react"
import * as ReactDOM from "react-dom/client"

// Hooks
export const reactUseState = React.useState
export const reactUseEffect = React.useEffect
export const reactUseMemo = React.useMemo
export const reactUseCallback = React.useCallback
export const reactUseRef = React.useRef
export const reactUseContext = React.useContext
export const reactUseReducer = React.useReducer
export const reactUseLayoutEffect = React.useLayoutEffect

// Core
export const reactCreateElement = React.createElement
export const reactFragment = React.Fragment
export const ReactSuspense = React.Suspense
export const reactCreateRoot = ReactDOM.createRoot

export const reactLazy = React.lazy

export type reactNode = React.ReactNode
export type reactComponentType<P = any> = React.ComponentType<P>