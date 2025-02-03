import styles from "./Card.module.css"
import profilePic from "../../assets/garfielopt200x.jpg"

function Card() {
    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={profilePic} alt="profile picture" />
            <h2 className={styles.cardTitle}>Mr Garfield</h2>
            <p className={styles.cardText}>I make code to gain money</p>
        </div>
    );
}

export default Card;