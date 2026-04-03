import * as React from "react"

export type mmReactNode = React.ReactNode
export type mmReactComponentType<P = any> = React.ComponentType<P>

export const mmReactUseState = React.useState
export const mmReactUseRef = React.useRef
export const mmReactUseContext = React.useContext

export const mmReactCreateContext = React.createContext
export const mmReactLazy = React.lazy

export const MmReactSuspense = React.Suspense