import UIComponent from "./ui-component";
import UIAction from "./ui-action";

export default interface UIAdapter {
    component: UIComponent
    action: UIAction
}