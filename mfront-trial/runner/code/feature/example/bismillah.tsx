import {useRequest} from "mfront";
import {toast} from "@mfront/mfront-ui/code/component/toast-box.tsx";

export default function Bismillah() {
    const {urlParams, routeMeta, queryParams} = useRequest();
    console.log(urlParams)
    console.log(routeMeta)
    console.log(queryParams)
    return (
        <>
            Bismillah Page
            <br/>
            <button onClick={() => {
                toast({
                    content: "Bismillah Message",
                    type: "success",
                    theme: "dark",
                    // position: "bottomRight",
                    transition: "flip"
                })
            }}>Show tost
            </button>
        </>
    )
}