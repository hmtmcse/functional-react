import { reactCreateContext } from "@mfront/mfront-libs";

export function createContext<T>(defaultValue: T) {
    return reactCreateContext<T>(defaultValue);
}