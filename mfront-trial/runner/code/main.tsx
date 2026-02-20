import {MFront} from "mfront";
import AppConfig from "./config/app-config.tsx";

MFront.boot({
    viewHolder: document.getElementById("root"),
    config: new AppConfig()
})