import {MAdapter, type UINode} from "mfront";
import {BootstrapAdapter} from "@mfront/mfront-bootstrap";
import type {UIAdapter} from "@mfront/mfront-ui";
import {ToastBox} from "@mfront/mfront-ui/code/component/toast-box.tsx";


export default class AppAdapter extends MAdapter {

    setCentralUI(): UINode {
        return (<>
            <ToastBox/>
        </>)
    }
    setSuspense(): UINode {
        return (<div>Loading page...</div>)
    }

    setUIAdapter(): UIAdapter {
        return BootstrapAdapter
    }

}