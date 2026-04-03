import {mmReactCreateContext, mmReactUseContext} from "mmcore";
import {MFrontException} from "mfront-core";
import {UIAdapterData} from "./ui-adapter-data";

const UIAdapterContext = mmReactCreateContext<UIAdapterData | null>(null)

export function UIAdapterProvider({adapter, children}: { adapter: UIAdapterData, children: any }) {
    return (
        <UIAdapterContext.Provider value={adapter}>
            {children}
        </UIAdapterContext.Provider>
    )
}

export function useUI(): UIAdapterData {
    const ctx = mmReactUseContext(UIAdapterContext)
    if (!ctx) {
        throw new MFrontException("UIAdapterData not found. Wrap your app with UIAdapterProvider.")
    }
    return ctx
}