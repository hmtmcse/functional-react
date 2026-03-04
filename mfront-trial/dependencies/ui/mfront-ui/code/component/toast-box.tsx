import {UIToastActionProps, UIToastProps} from "@mfront/mfront-com";
import {useUI} from "@mfront/mfront/code/core/ui-provider";
import {useAppContext} from "mfront";

export function ToastBox(props: UIToastProps) {
  const ui = useUI()
  const Impl = ui.component.ToastBox
  return <Impl {...props} />
}

export function toast(props: UIToastActionProps) {
    const {uiAction} = useAppContext.get();
    if (uiAction && uiAction.toastAction) {
        uiAction.toastAction(props)
    }
}