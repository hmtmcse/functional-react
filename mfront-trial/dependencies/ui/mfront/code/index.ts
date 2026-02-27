import {MFront} from "./base/mfront";
import RouteConfig from "./router/route-config";
import {PageSlot} from "./router/route-common"
import {useRequest} from "./router/use-request"
import {Layout} from "./data/mtypes"
import type {MConfig} from "./data/mconfig"
import {reactLazy as loadPage} from "@mfront/mfront-libs";
import RoutePageData, { UIFunction } from "./router/route-page-data";
import MRegistry from "./data/mregistry";


export type {
    Layout,
    UIFunction,
    RoutePageData
}

export {
    MFront,
    RouteConfig,
    MConfig,
    PageSlot,
    useRequest,
    loadPage,
    MRegistry
}
