import {MountRoute, ReactSuspense} from "@mfront/mfront-libs";
import MRegistry from "../data/mregistry";

export default function MFrontPageManager({registry}: { registry: MRegistry }) {
    return (
        <>
            <h1>Page Manager</h1>
            <ReactSuspense fallback={registry.uiConfig.setSuspense()}>
                <MountRoute router={registry.routeConfig.getRouteMapping()}/>
            </ReactSuspense>
            {registry.uiConfig.setCentralUI()}
        </>
    )
}