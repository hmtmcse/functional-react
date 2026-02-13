import {reactCreateRoot} from "@mfront/mfront-libs";

export function createApp(App: any, container: HTMLElement) {
    const root = reactCreateRoot(container)
    root.render(App)
}
