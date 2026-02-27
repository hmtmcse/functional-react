import {routerUseMatches, routerUseParams, routerUseSearchParams} from "@mfront/mfront-libs";

export function useRequest() {
    const [searchParams] = routerUseSearchParams();
    const matches = routerUseMatches();
    const current = matches.at(-1);
    return {
        urlParams: routerUseParams(),
        queryParams: Object.fromEntries(searchParams.entries()),
        routeMeta: current,
    };
}