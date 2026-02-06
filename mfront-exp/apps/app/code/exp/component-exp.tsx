import {useEffect} from "react";
import {useCustomHook} from "./custom-hook.ts";

export default function ComponentExp() {

    const {} = useCustomHook()

    useEffect(() => {
        console.log("Called")
    })



    return "Bismillah Component"
}