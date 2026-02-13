import {reactUseCallback} from "@mfront/mfront-libs";

export function useCallback(callback: any, deps?: any[]) {
    return reactUseCallback(callback, deps)
}
