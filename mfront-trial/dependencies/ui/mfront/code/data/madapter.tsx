import {UINode} from "../router/route-page-data";
import {UIAdapter} from "@mfront/mfront-ui";

export default abstract class MAdapter {
    abstract setCentralUI(): UINode
    abstract setSuspense(): UINode
    abstract setUIAdapter(): UIAdapter
}