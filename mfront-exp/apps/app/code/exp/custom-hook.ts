import {useEffect} from "react";

export function useCustomHook() {
    useEffect(() => {
        console.log("Called Custom hook")
    })

    const onLoad = () => {

    };

    console.log("Called Nnormal things")

    return {
        onLoad
    }
}