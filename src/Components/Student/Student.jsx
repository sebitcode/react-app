import PropTypes from "prop-types"
import styles from "./Student.module.css"

function Student({name = "Guest", age = 0, isStudent = false}) {
    return (
        <div className={styles.student}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student