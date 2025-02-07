import { useState } from "react"
import styles from "./ColorPicker.module.css"

function ColorPicker() {
    const [color, setColor] = useState("#0a0000")

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (<div className={styles.color_picker_container}>
                <h1 className={styles.color_title}>Color Picker</h1>
                <div className={styles.color_display} style={{backgroundColor: color}}>
                    <p>{color}</p>
                </div>
                <label>Select a Color</label>
                <input type="color" value={color} onChange={handleColorChange} /> 
            </div>);
}

export default ColorPicker