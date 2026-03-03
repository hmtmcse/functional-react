import {useContext} from "./../hooks/use-context";
import {createContext} from "./create-context";
import {UIAdapter} from "@mfront/mfront-ui";

const UIContext = createContext<UIAdapter | null>(null)

export function UIProvider({adapter, children}: { adapter: UIAdapter, children: any }) {
    return (
        <UIContext.Provider value={adapter}>
            {children}
        </UIContext.Provider>
    )
}

export function useUI(): UIAdapter {
    const ctx = useContext(UIContext)
    if (!ctx) {
        throw new Error("UIProvider not found. Wrap your app with UIProvider.")
    }
    return ctx
}