import {RouterOutlet} from "@mfront/mfront-libs";

export function PageSlot() {
    return <RouterOutlet/>;
}

export function RouteErrorPage(){

    return (
        <>
            Router Error Page {console.log("error")}
        </>
    )
}

export function RouteNotFoundPage(){

    return (
        <>
            404 - Not Found
        </>
    )
}