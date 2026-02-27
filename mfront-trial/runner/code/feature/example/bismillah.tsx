import {useRequest} from "mfront";

export default function Bismillah() {
    const {urlParams, routeMeta, queryParams} = useRequest();
    console.log(urlParams)
    console.log(routeMeta)
    console.log(queryParams)
    return (
        <>Bismillah Page</>
    )
}