import {MConfig, MConfigDefault} from "../data/mconfig";
import {createStore} from "./../store/create-store";
import {UIAction} from "@mfront/mfront-ui";


type ContextDefinition = {
    config: MConfig;
    setConfig: (newConfig: Partial<MConfig>) => void;
    uiAction?: UIAction;
    setUiAction: (action: Partial<UIAction>) => void;
};

export const useAppContext = createStore<ContextDefinition>((set) => ({
    config: new MConfigDefault(),
    setConfig: (newConfig) => set((state: any) => ({
            config: {...state.config, ...newConfig}
        })
    ),
    setUiAction: (action: Partial<UIAction>) => set((state: any) => ({
            uiAction: {...state.uiAction, ...action}
        })
    ),
}))