import {reactUseReducer} from "@mfront/mfront-libs";

export function useReducer(reducer: any, initialState: any) {
    return reactUseReducer(reducer, initialState)
}
