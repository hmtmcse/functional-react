import {BootProps} from "./../data/boot-props";
import {createApp} from "./../core/create-app";
import MFrontPageManager from "./../base/mfront-page-manager";
import { useAppContext } from "../hooks/use-app-context";

export const MFront = {
    boot({viewHolder, registry}: BootProps) {
        const {setConfig} = useAppContext.get()
        setConfig({...registry.config})
        return createApp(<MFrontPageManager
            registry={registry}
        />, viewHolder)
    }
}