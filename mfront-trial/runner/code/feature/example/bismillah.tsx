import {useRouteStore} from "mfront";

export default function Bismillah() {
    const {urlParams, routeMeta, queryParams} = useRouteStore();
    console.log(urlParams)
    console.log(routeMeta)
    console.log(queryParams)
    return (
        <>Bismillah Page</>
    )
}