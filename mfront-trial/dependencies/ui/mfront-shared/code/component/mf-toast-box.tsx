import {MUtil, UIToastActionProps, UIToastProps, UIToastPropsDefault} from "@mfront/mfront-com";
import {Bounce, Flip, Slide, toast, ToastContainer, ToastOptions, Zoom} from "react-toastify";

function getTransition(transitionType: string) {
    let transition: any = undefined
    switch (transitionType) {
        case "bounce":
            transition = Bounce
            break
        case "flip":
            transition = Flip
            break
        case "slide":
            transition = Slide
            break
        case "zoom":
            transition = Zoom
            break
    }
    return transition
}

export function MFToastBox(props: UIToastProps) {
    let _props: UIToastProps = MUtil.setPropsDefault<UIToastProps>(props, UIToastPropsDefault)
    let position: any = MUtil.camelToKebab(_props.position)
    let transition: any = getTransition(_props.transition)
    return (
        <ToastContainer
            position={position}
            autoClose={_props.autoCloseMS}
            pauseOnFocusLoss={_props.pauseOnFocusLoss}
            pauseOnHover={_props.pauseOnHover}
            theme={_props.theme}
            transition={transition}
        />
    )
}

export function mfToastAction(props: UIToastActionProps) {
    let position: any = MUtil.camelToKebab(props.position)
    let transition: any = getTransition(props.transition)
    let options: ToastOptions = {
        theme: props.theme,
        position: position,
        transition: transition,
        onClose: props.onClose,
        autoClose: props.autoCloseMS
    }
    switch (props.type) {
        case "success":
            toast.success(props.content, options)
            break
        case "error":
            toast.error(props.content, options)
            break
        case "warning":
            toast.warning(props.content, options)
            break
        case "info":
            toast.info(props.content, options)
            break
        default:
            toast(props.content, options)
    }
}