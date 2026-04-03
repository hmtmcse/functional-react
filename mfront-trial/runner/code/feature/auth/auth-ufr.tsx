import {loadPage, RouteConfig} from "mfront";


const login = loadPage(() => import("./login.tsx"))

const UI_BASE_URL = "/"

export default class AuthUFR {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
    }

    static registerRoute(routerConfig: RouteConfig): void {
        routerConfig.addPrivateRoute({url: this.ui.index, content: login})
    }
}