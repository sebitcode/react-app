import PropTypes from "prop-types"
import styles from "./UserGreeting.module.css"

function UserGreeting({username = "Guest", isLoggedIn = false}) {
    const welcomeMessage = <h2 className={styles.welcome_message}>Welcome {username}</h2>
    const loginPrompt = <h2 className={styles.login_prompt}>Please log in to continue</h2>
    return isLoggedIn ? welcomeMessage : loginPrompt  
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
export default UserGreeting