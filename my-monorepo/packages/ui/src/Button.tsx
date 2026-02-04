import type {ReactNode} from "react";

export function Button({children}: { children: ReactNode }) {
    return (
        <button style={{padding: "8px 12px"}}>
            {children}
        </button>
    );
}
