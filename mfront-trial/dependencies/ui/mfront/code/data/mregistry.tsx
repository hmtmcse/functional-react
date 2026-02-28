import RouteConfig from "../router/route-config";
import {MConfig} from "./mconfig";

export default interface MRegistry {
    routeConfig: RouteConfig
    config: MConfig
}