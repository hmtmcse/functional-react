import {MFront} from "./base/mfront";
import RouteConfig from "./router/route-config";
import {PageSlot} from "./router/route-common"
import {useRouteStore} from "./router/route-store"
import {Layout} from "./data/mtypes"
import type {MConfig} from "./data/mconfig"

export type {
    Layout
}

export {
    MFront,
    RouteConfig,
    MConfig,
    PageSlot,
    useRouteStore
}
