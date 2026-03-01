import {MuiConfig, RouteConfig, type MConfig, type MRegistry} from "mfront";
import AppRouteConfig from "./app-route-config.tsx";
import AppConfig from "./app-config.tsx";
import AppUIConfig from "./app-ui-config.tsx";


export default class AppRegistry implements MRegistry {
    routeConfig: RouteConfig;
    config: MConfig;
    uiConfig: MuiConfig;

    constructor() {
        this.routeConfig = new AppRouteConfig()
        this.config = new AppConfig()
        this.uiConfig = new AppUIConfig()
    }
}