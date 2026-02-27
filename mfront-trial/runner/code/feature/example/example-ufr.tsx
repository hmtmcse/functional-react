import {loadPage, RouteConfig} from "mfront";


const Bismillah = loadPage(() => import("./bismillah"))

const UI_BASE_URL = "/example"
const API_BASE_URL = "api/v1/package-disburse-log/"

export default class ExampleUFR {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL
    }

    static registerRoute(routerConfig: RouteConfig): void {
        routerConfig.addPublicRoute({url: this.ui.index, content: Bismillah})
    }
}