import {MConfig, MConfigDefault} from "../data/mconfig";
import {createStore} from "./../store/create-store";


type ContextDefinition = {
    config: MConfig;
    setConfig: (newConfig: Partial<MConfig>) => void;
};

export const useAppContext = createStore<ContextDefinition>((set) => ({
    config: new MConfigDefault(),
    setConfig: (newConfig) => set((state: any) => ({
            config: {...state.config, ...newConfig}
        })
    ),
}))