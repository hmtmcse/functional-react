import {type MConfig, RouteConfig} from "mfront";
import AppRouteConfig from "./app-route-config.tsx";

export default class AppConfig implements MConfig {
    routeConfig: RouteConfig;

    constructor() {
        this.routeConfig = new AppRouteConfig()
    }

}