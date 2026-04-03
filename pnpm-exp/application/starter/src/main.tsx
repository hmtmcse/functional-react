import {MFront} from "mfront";
import AppRegistry from "./config/app-registry";

MFront.boot({
    viewHolder: document.getElementById("bismillah"),
    registry: new AppRegistry()
})