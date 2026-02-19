import {RouteConfig} from "mfront";


export default class AppRouteConfig extends RouteConfig {
    setPublicLayout() {
        throw new Error("Method not implemented.");
    }

    setPrivateLayout() {
        throw new Error("Method not implemented.");
    }

    setDefaultLayout() {
        throw new Error("Method not implemented.");
    }

    setOtherLayout(): void {
        throw new Error("Method not implemented.");
    }

    registerRoute(routerConfig: RouteConfig): void {
        throw new Error("Method not implemented.");
    }

}