import RoutePageData from "./route-page-data";

export interface RouteLayout {
    layoutName: string
    layout: any
}

export default interface RouteData extends RouteLayout {
    pages?: Array<RoutePageData>
}