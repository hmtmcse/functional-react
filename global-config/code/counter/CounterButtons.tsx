import {useCounterStore} from "./useCounterStore.ts";
import {useContext} from "../config-loader/use-context.tsx";

export default function CounterButtons() {
    const {increment, decrement, reset} = useCounterStore();
    const config = useContext((state) => state.config);

    return (
        <div>
            {config.assetsBaseUrl} <br/>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}