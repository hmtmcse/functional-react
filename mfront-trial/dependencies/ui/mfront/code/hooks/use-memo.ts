import {reactUseMemo} from "@mfront/mfront-libs";

export function useMemo(factory: any, deps?: any[]) {
    return reactUseMemo(factory, deps)
}
