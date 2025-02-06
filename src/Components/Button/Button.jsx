import styles from "./Button.module.css"
import React, {useState} from "react";

function Button() {
    let count = 0;
    const [message, setMessage] = useState("Sebas click me");
    const handleClick = (e, name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            e.target.textContent = `${name} stop clicking me`;
        }
    }

    const hadleDoubleClick = () => setMessage("OUCH! :C")

    return(
        <button className={styles.button} onClick={(e) => handleClick(e, "Sebas")} onDoubleClick={hadleDoubleClick}>{message}</button>
    );
}

export default Button