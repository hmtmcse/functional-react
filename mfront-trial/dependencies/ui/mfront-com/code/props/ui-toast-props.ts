import {UINode} from "@mfront/mfront-com";

export type ToastPosition = 'topRight' | 'topCenter' | 'topLeft' | 'bottomRight' | 'bottomCenter' | 'bottomLeft';
export type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default';
export type ToastTheme = 'light' | 'dark' | 'colored';
export type ToastTransition = 'bounce' | 'slide' | 'zoom' | 'flip';

export interface UIToastProps {
    position?: ToastPosition;
    autoCloseMS?: number | false;
    pauseOnFocusLoss?: boolean;
    pauseOnHover?: boolean; // Pause the timer when the mouse hover the toast
    theme?: ToastTheme;
    transition?: ToastTransition;
}

export const UIToastPropsDefault: Partial<UIToastProps> = {
    position: "topCenter",
    autoCloseMS: 5000,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    theme: "light",
    transition: "bounce",
}

export interface UIToastActionProps {
    content: UINode
    type?: ToastType;
    onClose?: <T = {}>(props: T) => void;
    position?: ToastPosition;
    autoCloseMS?: number | false;
    theme?: ToastTheme;
    transition?: ToastTransition;
}