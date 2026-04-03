import {loadPage, MRoute} from "mfront";


const tablePage = loadPage(() => import("./book-table-page"))

const UI_BASE_URL = "/book"
export default class BookUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.index, component: tablePage})
    }
}