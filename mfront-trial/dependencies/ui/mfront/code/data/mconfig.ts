export const ENV_NAME = {
    API_BASE_URL: "API_BASE_URL",
    ASSETS_BASE_URL: "ASSETS_BASE_URL",
}

export function getEnvValue(key: string, fallback: string) {
    if (typeof (globalThis as any)[key] !== 'undefined') {
        return (globalThis as any)[key]
    }
    return fallback
}

export interface MConfig {
    apiBaseUrl?: string
    assetsBaseUrl?: string
}

export class MConfigDefault implements MConfig {}