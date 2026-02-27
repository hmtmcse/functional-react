import {useCounterStore} from "./useCounterStore.ts";

export default function CounterButtons() {
    const {increment, decrement, reset} = useCounterStore();

    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}