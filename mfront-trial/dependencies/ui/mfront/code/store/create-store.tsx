import {zustandCreate, zustandDevtools, zustandPersist, zustandSubscribeWithSelector} from "@mfront/mfront-libs";

export type MStore<T> = {
    <U>(selector: (state: T) => U): U
    get: () => T
    set: (partial: Partial<T> | ((state: T) => Partial<T>)) => void
    subscribe: (listener: (state: T) => void) => () => void
}


export function createStore<T extends object>(
    initializer: (set: any, get: any) => T,
    options?: {
        devtools?: boolean
        persist?: { name: string }
    }
): MStore<T> {
    let stateCreator: any = initializer
    if (options?.persist) {
        stateCreator = zustandPersist(stateCreator, options.persist)
    }

    if (options?.devtools) {
        stateCreator = zustandDevtools(stateCreator)
    }

    stateCreator = zustandSubscribeWithSelector(stateCreator)
    const useStore = zustandCreate<T>()(stateCreator)
    const store = ((selector: (state: T) => any) => useStore(selector)) as unknown as MStore<T>
    store.get = useStore.getState
    store.set = useStore.setState
    store.subscribe = useStore.subscribe

    return store
}

// https://chatgpt.com/c/69a2a4ee-fb20-8323-b988-83b87e94e7be