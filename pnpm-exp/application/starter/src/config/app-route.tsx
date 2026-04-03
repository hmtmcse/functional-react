import {MRoute, type LayoutComponent, type PageComponent} from "mfront";
import DefaultLayout from "../layouts/default-layout";
import PrivateLayout from "../layouts/private-layout";
import PublicLayout from "../layouts/public-layout";
import NotFoundPage from "../common/not-found-page";
import BookUr from "../features/book/book-ur";


export default class AppRoute extends MRoute {

    setPublicLayout(): LayoutComponent {
        return PublicLayout
    }

    setPrivateLayout(): LayoutComponent {
        return PrivateLayout
    }

    setDefaultLayout(): LayoutComponent {
        return DefaultLayout
    }

    setNotFoundPage(): PageComponent {
        return NotFoundPage
    }

    registerRoute(route: MRoute): void {
        BookUr.registerRoute(route)
    }

}