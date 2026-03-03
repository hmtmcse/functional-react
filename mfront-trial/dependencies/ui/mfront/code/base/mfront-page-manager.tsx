import {MountRoute, ReactSuspense} from "@mfront/mfront-libs";
import MRegistry from "../data/mregistry";
import {UIProvider} from "../core/ui-provider";

export default function MFrontPageManager({registry}: { registry: MRegistry }) {
    return (
        <>
            <h1>Page Manager</h1>
            <UIProvider adapter={registry.adapter.setUIAdapter()}>
                <ReactSuspense fallback={registry.adapter.setSuspense()}>
                    <MountRoute router={registry.routeConfig.getRouteMapping()}/>
                </ReactSuspense>
                {registry.adapter.setCentralUI()}
            </UIProvider>
        </>
    )
}