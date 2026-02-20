import RoutePageData from "./route-page-data";
import RouteData from "./route-data";
import {Layout} from "./../data/mtypes";
import {createReactRoute} from "@mfront/mfront-libs";

const RouteConfigName = {
    privateLayout: "private",
    publicLayout: "public",
    defaultLayout: "default",
}

function getMappingForReactRouter(routers: Map<string, RouteData>) {
    let mappings: any = []
    routers.forEach((data, layoutName) => {
        let routeMap: any = {
            element: data.layout,
            children: []
        }
        for (const page of data.pages ?? []) {
            routeMap.children.push({
                path: page.url,
                element: page.content
            })
        }
        if (data.pages?.length) {
            mappings.push(routeMap)
        }
    })
    console.log(mappings)
    return createReactRoute(mappings)
}

export default abstract class RouteConfig {
    private pageAndLayout: Map<string, RouteData> = new Map<string, RouteData>()

    abstract setPublicLayout(): Layout

    abstract setPrivateLayout(): Layout

    abstract setDefaultLayout(): Layout

    setOtherLayout(): void {}

    abstract registerRoute(routerConfig: RouteConfig): void

    initAllLayout() {
        let publicLayout: any = this.setPublicLayout()
        if (publicLayout) {
            this.setLayout(RouteConfigName.publicLayout, publicLayout)
        }
        let privateLayout: any = this.setPrivateLayout()
        if (privateLayout) {
            this.setLayout(RouteConfigName.privateLayout, privateLayout)
        }

        let defaultLayout: any = this.setDefaultLayout()
        if (defaultLayout) {
            this.setLayout(RouteConfigName.defaultLayout, defaultLayout)
        }
        this.setOtherLayout()
    }

    getRouteMapping() {
        this.initAllLayout()
        this.registerRoute(this)
        return getMappingForReactRouter(this.pageAndLayout)
    }

    setLayout(layoutName: string, layout: any) {
        if (!this.pageAndLayout.has(layoutName)) {
            this.pageAndLayout.set(layoutName, {
                layout: layout,
                layoutName: layoutName,
                pages: []
            })
        }
        return this
    }


    addPrivateRoute(page: RoutePageData) {
        this.addRoute(RouteConfigName.privateLayout, page)
    }

    addPublicRoute(page: RoutePageData) {
        this.addRoute(RouteConfigName.publicLayout, page)
    }

    addDefaultRoute(page: RoutePageData) {
        this.addRoute(RouteConfigName.defaultLayout, page)
    }

    addRoute(layoutName: string, page: RoutePageData) {
        if (this.pageAndLayout.has(layoutName)) {
            this.pageAndLayout.get(layoutName).pages.push(page)
        } else if (this.pageAndLayout.has(RouteConfigName.defaultLayout)) {
            this.pageAndLayout.get(RouteConfigName.defaultLayout).pages.push(page)
        }
        return this
    }

}