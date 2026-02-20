import {routerUseMatches, routerUseParams, routerUseSearchParams} from "@mfront/mfront-libs";

export function useRouteStore() {
    const params = routerUseParams();
    const [searchParams] = routerUseSearchParams();
    const matches = routerUseMatches();
    const current = matches.at(-1);
    return {
        urlParams: params,
        queryParams: Object.fromEntries(searchParams.entries()),
        routeMeta: current,
    };
}