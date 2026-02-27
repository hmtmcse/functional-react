import {create} from "zustand";
import AppConfig from "./app-config.tsx";

type ContextDefinition = {
    config: AppConfig;
    setConfig?: (newConfig: Partial<AppConfig>) => void;
};

export const useContext = create<ContextDefinition>((set) => ({
    config: new AppConfig(),
    setConfig: (newConfig) =>
    set(() => ({
      config: new AppConfig(),
      ...newConfig,
    })),
}))