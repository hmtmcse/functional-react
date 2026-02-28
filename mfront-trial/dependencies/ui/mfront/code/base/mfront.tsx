import {BootProps} from "./../data/boot-props";
import {createApp} from "./../core/create-app";
import MFrontPageManager from "./../base/mfront-page-manager";

export const MFront = {
    boot({viewHolder, registry}: BootProps) {
        return createApp(<MFrontPageManager
            registry={registry}
        />, viewHolder)
    }
}