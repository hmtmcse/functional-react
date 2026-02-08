import {useEffect, useRef, useState} from "react";

export function useView<T extends object>(factory: () => T): T {
    const ref = useRef<T | null>(null);
    const [, rerender] = useState(0);

    if (!ref.current) {
        const raw = factory();
        ref.current = new Proxy(raw, {
            get(target, prop) {
                const value = (target as any)[prop];
                if (typeof value === "function") {
                    return value.bind(ref.current);
                }

                return value;
            },

            set(target, prop, value) {
                (target as any)[prop] = value;
                rerender(n => n + 1);
                return true;
            }
        });
    }

    useEffect(() => {
        (ref.current as any)?.onLoad?.();
        return () => (ref.current as any)?.onDestroy?.();
    }, []);

    return ref.current!;
}
