import {UIAction, UIAdapter, UIComponent} from "@mfront/mfront-ui";
import {mfToastAction, MFToastBox} from "@mfront/mfront-shared";

export const BootstrapComponent: UIComponent = {
    ToastBox: MFToastBox
}

export const BootstrapAction: UIAction = {
    toastAction: mfToastAction
}

export const BootstrapAdapter: UIAdapter = {
    component: BootstrapComponent,
    action: BootstrapAction
}