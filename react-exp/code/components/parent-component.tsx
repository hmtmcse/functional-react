import ChildComponent from "./child-component.tsx";
import {useState} from "react";
import OwnFeatureChildComponent from "./own-feature-child-component.tsx";

export default function ParentComponent() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
            <ChildComponent count={count}/>
            <OwnFeatureChildComponent/>
        </>
    )
}