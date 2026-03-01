import RouteConfig from "../router/route-config";
import {MConfig} from "./mconfig";
import MuiConfig from "./../data/mui-config";

export default interface MRegistry {
    routeConfig: RouteConfig
    config: MConfig
    uiConfig: MuiConfig
}