import {RouteConfig, type Layout} from "mfront";
import PublicLayout from "../layout/public-layout.tsx";
import DefaultLayout from "../layout/default-layout.tsx";
import PrivateLayout from "../layout/private-layout.tsx";
import ExampleUFR from "../feature/example/example-ufr.tsx";


export default class AppRouteConfig extends RouteConfig {
    setPublicLayout(): Layout {
        return <PublicLayout/>
    }

    setPrivateLayout(): Layout {
        return <PrivateLayout/>
    }

    setDefaultLayout(): Layout {
        return <DefaultLayout/>
    }

    registerRoute(routerConfig: RouteConfig): void {
        ExampleUFR.registerRoute(routerConfig)
    }
}