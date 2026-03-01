import {MFront} from "./base/mfront";
import RouteConfig from "./router/route-config";
import {PageSlot} from "./router/route-common"
import {useRequest} from "./router/use-request"
import {Layout} from "./data/mtypes"
import type {MConfig} from "./data/mconfig"
import {ENV_NAME, getEnvValue} from "./data/mconfig"
import {reactLazy as loadPage} from "@mfront/mfront-libs";
import RoutePageData, {UIComponent, UIFunction, UINode} from "./router/route-page-data";
import MRegistry from "./data/mregistry";
import {createStore, MStore} from "./store/create-store";
import {useAppContext} from "./hooks/use-app-context";
import MAdapter from "./data/madapter";


export type {
    Layout,
    UIFunction,
    UINode,
    UIComponent,
    RoutePageData,
    MRegistry,
    MStore
}

export {
    MFront,
    RouteConfig,
    MConfig,
    MAdapter,
    PageSlot,
    useRequest,
    loadPage,
    getEnvValue,
    ENV_NAME,
    createStore,
    useAppContext
}
