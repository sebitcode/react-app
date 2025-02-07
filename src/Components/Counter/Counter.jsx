import {useState} from "react";
import styles from "./Counter.module.css"

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1)

    const decrement = () => setCounter(counter - 1)

    const reset = () => setCounter(0)

    return(
        <div className={styles.counter_container}>
            <p className={styles.count_display}>{counter}</p>
            <button className={styles.counter_button} onClick={decrement}>Decrement</button>
            <button className={styles.counter_button} onClick={reset}>Reset</button>
            <button className={styles.counter_button} onClick={increment}>Increment</button>
        </div>
    );

}

export default Counter