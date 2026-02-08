import {useView} from "./useView";
import {counterView} from "./counterView";

export default function CounterPage() {
    const view = useView(counterView);

    return (
        <div style={{padding: 20}}>
            <h2>State Change PoC</h2>

            <p>Count: <strong>{view.count}</strong></p>

            {view.loading && <p>Updating...</p>}

            <button onClick={view.decrement} disabled={view.loading}>
                -
            </button>

            <button onClick={view.increment} disabled={view.loading}>
                +
            </button>

            <button onClick={view.reset}>
                Reset
            </button>
        </div>
    );
}
