import {RouteConfig, type MConfig, type MRegistry} from "mfront";
import AppRouteConfig from "./app-route-config.tsx";
import AppConfig from "./app-config.tsx";


export default class AppRegistry implements MRegistry {
    routeConfig: RouteConfig;
    config: MConfig;

    constructor() {
        this.routeConfig = new AppRouteConfig()
        this.config = new AppConfig()
    }

}