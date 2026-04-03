import {MAdapter, type MConfig, type MRegistry, type MRoute} from "mfront";
import AppConfig from "./app-config";
import AppAdapter from "./app-adapter";
import AppRoute from "./app-route";

export default class AppRegistry implements MRegistry {
    config: MConfig;
    adapter: MAdapter;
    route: MRoute;

    constructor() {
        this.route = new AppRoute()
        this.config = new AppConfig()
        this.adapter = new AppAdapter()
    }
}