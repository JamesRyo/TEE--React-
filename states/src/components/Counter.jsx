import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default Counter;