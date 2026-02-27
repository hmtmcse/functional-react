import CounterDisplay from "./CounterDisplay.tsx";
import CounterButtons from "./CounterButtons.tsx";
import {useContext} from "../config-loader/use-context.tsx";


export default function CounterApp() {
    const config = useContext((state) => state.config);
    return (
        <div>
            <CounterDisplay/>
            <CounterButtons/>
            <br/>
            <br/>
            {config.assetsBaseUrl}
        </div>
    );
}
