import styles from "./Button.module.css"

function Button() {
    let count = 0;
    const handleClick = (e, name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            e.target.textContent = `${name} stop clicking me`;
        }
    }

    const hadleDoubleClick = () => console.log("OUCH! :C")

    return(
        <button className={styles.button} onClick={(e) => handleClick(e, "Sebas")} onDoubleClick={hadleDoubleClick}>Click me</button>
    );
}

export default Button