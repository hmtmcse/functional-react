import RouteConfig from "../router/route-config";
import {MConfig} from "./mconfig";
import MAdapter from "./madapter";

export default interface MRegistry {
    routeConfig: RouteConfig
    config: MConfig
    adapter: MAdapter
}