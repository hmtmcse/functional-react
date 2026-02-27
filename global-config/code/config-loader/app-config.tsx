export const ENV_NAME = {
    API_BASE_URL: "API_BASE_URL",
    ASSETS_BASE_URL: "ASSETS_BASE_URL",
}

export function getEnv(key: string, fallback: string) {
    if (typeof (globalThis as any)[key] !== 'undefined') {
        return (globalThis as any)[key]
    }
    return fallback
}


export default class AppConfig {
    apiBaseUrl: string = getEnv(ENV_NAME.API_BASE_URL, "http://127.0.0.1:1530/assets")
    assetsBaseUrl: string = getEnv(ENV_NAME.ASSETS_BASE_URL, "http://127.0.0.1:1530/assets")
}