import {reactUseContext} from "@mfront/mfront-libs";
import * as React from "react";

export function useContext<T>(context: React.Context<T>): T {
    return reactUseContext(context)
}
