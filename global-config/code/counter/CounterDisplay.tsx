import {useCounterStore} from "./useCounterStore.ts";

export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count)
  return <h2>Count: {count}</h2>;
}