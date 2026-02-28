import {MFront} from "mfront";
import AppRegistry from "./config/app-registry.tsx";

MFront.boot({
    viewHolder: document.getElementById("root"),
    registry: new AppRegistry()
})