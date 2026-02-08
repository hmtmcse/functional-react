import {useState, useEffect} from "react";

export default function UseEffectExamples() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // 1️⃣ Runs after every render (no dependency array)
    useEffect(() => {
        console.log("Effect 1: Runs after every render");
    });

    // 2️⃣ Runs only once (componentDidMount)
    useEffect(() => {
        console.log("Effect 2: Runs only once when component mounts");

        // Example: simulate fetching data
        const timer = setTimeout(() => {
            console.log("Data fetched!");
        }, 1000);

        // Cleanup example (runs on unmount)
        return () => {
            clearTimeout(timer);
            console.log("Effect 2 cleanup: Component unmounted");
        };
    }, []);

    // 3️⃣ Runs only when 'count' changes
    useEffect(() => {
        console.log("Effect 3: Count changed to", count);
    }, [count]);

    // 4️⃣ Runs when multiple dependencies change
    useEffect(() => {
        console.log("Effect 4: Count or Name changed:", count, name);
    }, [count, name]);

    // 5️⃣ Cleanup example with intervals
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Effect 5: Interval running every 2 seconds");
        }, 2000);

        return () => {
            clearInterval(interval);
            console.log("Effect 5 cleanup: Interval cleared");
        };
    }, []);

    return (
        <div style={{padding: 20}}>
            <h2>useEffect Examples</h2>

            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>

            <div style={{marginTop: 20}}>
                <p>Name: {name}</p>
                <input
                    type="text"
                    value={name}
                    placeholder="Type your name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
}

