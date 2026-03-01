import {MFront} from "./base/mfront";
import RouteConfig from "./router/route-config";
import {PageSlot} from "./router/route-common"
import {useRequest} from "./router/use-request"
import {Layout} from "./data/mtypes"
import type {MConfig} from "./data/mconfig"
import {ENV_NAME, getEnvValue} from "./data/mconfig"
import {reactLazy as loadPage} from "@mfront/mfront-libs";
import RoutePageData, {UIFunction, UINode} from "./router/route-page-data";
import MRegistry from "./data/mregistry";
import {createStore, MStore} from "./store/create-store";
import {useContext} from "./hooks/use-context";
import MuiConfig from "./data/mui-config";


export type {
    Layout,
    UIFunction,
    UINode,
    RoutePageData,
    MRegistry,
    MStore
}

export {
    MFront,
    RouteConfig,
    MConfig,
    MuiConfig,
    PageSlot,
    useRequest,
    loadPage,
    getEnvValue,
    ENV_NAME,
    createStore,
    useContext
}
