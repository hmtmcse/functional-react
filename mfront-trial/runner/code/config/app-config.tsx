import {ENV_NAME, getEnvValue, type MConfig} from "mfront";

export default class AppConfig implements MConfig {
    apiBaseUrl: string = getEnvValue(ENV_NAME.API_BASE_URL, "http://127.0.0.1:1530/assets")
}