import {reactUseRef} from "@mfront/mfront-libs";

export function useRef<T>(initial: T) {
    return reactUseRef(initial)
}
