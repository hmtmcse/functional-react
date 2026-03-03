import {UIToastActionProps} from "@mfront/mfront-com";

export default interface UIAction {
    toastAction?: (props: UIToastActionProps) => void
}