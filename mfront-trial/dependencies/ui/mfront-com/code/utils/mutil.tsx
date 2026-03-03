export const MUtil = {
    setPropsDefault<T>(incoming: Partial<T>, defaults: Partial<T>): T {
        return {...defaults, ...incoming} as T
    },
    camelToKebab(str: string): string {
        if (!str) {
            return undefined
        }
        return str
            .replace(/([a-z])([A-Z0-9])/g, '$1-$2') // split before uppercase or numbers
            .replace(/([0-9])([a-zA-Z])/g, '$1-$2') // split numbers followed by letters
            .toLowerCase()
    }
}