import {RouteConfig, type MConfig, type MRegistry, MAdapter} from "mfront";
import AppRouteConfig from "./app-route-config.tsx";
import AppConfig from "./app-config.tsx";
import AppAdapter from "./app-adapter.tsx";


export default class AppRegistry implements MRegistry {
    routeConfig: RouteConfig;
    config: MConfig;
    adapter: MAdapter;

    constructor() {
        this.routeConfig = new AppRouteConfig()
        this.config = new AppConfig()
        this.adapter = new AppAdapter()
    }
}