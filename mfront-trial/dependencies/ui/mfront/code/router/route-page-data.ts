import {reactComponentType, reactNode} from "@mfront/mfront-libs";
export type UIFunction<P = any> = reactNode | reactComponentType<P>
export type UINode = reactNode

export default interface RoutePageData {
    url: string
    title?: string
    pageKey?: string
    content: UIFunction
}