import {reactCreateElement} from "@mfront/mfront-libs";

export function createElement(type: any, props: any, ...children: any[]) {
    return reactCreateElement(type, props, ...children)
}
