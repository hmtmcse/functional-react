import {UINode} from "../router/route-page-data";

export default abstract class MAdapter {

    setCentralUI(): UINode {
        return (<></>)
    }

    setSuspense(): UINode {
        return (<div>Loading page...</div>)
    }

    setUIAdapter() {

    }

}