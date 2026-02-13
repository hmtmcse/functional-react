import {reactUseState} from "@mfront/mfront-libs";

export function useState<T>(initial: T) {
    return reactUseState(initial)
}
