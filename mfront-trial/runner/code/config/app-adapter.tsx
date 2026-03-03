import {MAdapter, type UINode} from "mfront";
import {BootstrapAdapter} from "@mfront/mfront-bootstrap";
import type {UIAdapter} from "@mfront/mfront-ui";


export default class AppAdapter extends MAdapter {

    setCentralUI(): UINode {
        return (<></>)
    }
    setSuspense(): UINode {
        return (<div>Loading page...</div>)
    }

    setUIAdapter(): UIAdapter {
        return BootstrapAdapter
    }

}