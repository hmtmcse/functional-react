import RoutePageData from "./route-page-data";
import {Layout} from "../data/mtypes";

export interface RouteLayout {
    layoutName: string
    layout: Layout
}

export default interface RouteData extends RouteLayout {
    pages?: Array<RoutePageData>
}