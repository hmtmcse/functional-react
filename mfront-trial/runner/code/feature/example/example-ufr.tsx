import {loadPage, RouteConfig} from "mfront";


const bismillah = loadPage(() => import("./bismillah"))
const page2 = loadPage(() => import("./page2"))
const page3 = loadPage(() => import("./page3"))

const UI_BASE_URL = "/example"
const API_BASE_URL = "api/v1/package-disburse-log/"

export default class ExampleUFR {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
        page2: UI_BASE_URL + "/page2",
        page3: UI_BASE_URL + "/page3",
    }

    static registerRoute(routerConfig: RouteConfig): void {
        routerConfig.addPublicRoute({url: this.ui.index, content: bismillah})
        routerConfig.addPublicRoute({url: this.ui.page2, content: page2})
        routerConfig.addPublicRoute({url: this.ui.page3, content: page3})
    }
}