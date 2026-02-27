import {MConfig} from "./../data/mconfig";
import {MountRoute, ReactSuspense} from "@mfront/mfront-libs";

export default function MFrontPageManager({config}: { config: MConfig }) {
    return (
        <>
            <h1>Page Manager</h1>
            <ReactSuspense fallback={<div>Loading page...</div>}>
                <MountRoute router={config.routeConfig.getRouteMapping()}/>
            </ReactSuspense>
        </>
    )
}