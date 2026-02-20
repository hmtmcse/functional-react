import {MConfig} from "./../data/mconfig";
import {MountRoute} from "@mfront/mfront-libs";

export default function MFrontPageManager({config}: { config: MConfig }) {
    console.log(config.routeConfig.getRouteMapping())
    return (
        <>
            <h1>Page Manager</h1>
            <MountRoute router={config.routeConfig.getRouteMapping()}/>
        </>
    )
}