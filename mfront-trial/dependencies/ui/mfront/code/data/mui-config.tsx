import {UINode} from "../router/route-page-data";

export default abstract class MuiConfig {

    setCentralUI(): UINode {
        return (<></>)
    }

    setSuspense(): UINode {
        return (<div>Loading page...</div>)
    }

    setUIImplementation() {

    }

    showToast(){

    }

}