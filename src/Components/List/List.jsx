import PropTypes from "prop-types"
import styles from "./List.module.css"
import ListItemFood from "../ListItem/Food";

function List({type = null, category = null, items = []}) {
    let result = null;

    if (items.length == 0 || category === null || type === null) {
        return result
    }

    if (type === "food") {
        // items.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical
        // items.sort((a, b) => b.name.localeCompare(a.name)) // Alphabetical Reverse
        // items.sort((a, b) => a.calories - b.calories) // Numeric 
        // items.sort((a, b) => b.calories - a.calories) // Numeric Reverse

        const lowCalItems = items.filter(item => item.calories < 100);
        const highCalItems = items.filter(item => item.calories >= 100);

        const listItems = items.map(item => <ListItemFood key={item.id} {...item} />  )
        const listLowItems = lowCalItems.map(item => <ListItemFood key={item.id} {...item} />)
        const listHighItems = highCalItems.map(item => <ListItemFood key={item.id} {...item} />)
        result = (
            <div className={styles.wrapper}>
                <h2 className={styles.list_title}>{category}</h2>
                <ul className={styles.list}>{listItems}</ul>
                <h2 className={styles.list_title}>Low Calorie {category}</h2>
                <ul className={styles.list}>{listLowItems}</ul>
                <h2 className={styles.list_title}>High Calorie {category}</h2>
                <ul className={styles.list}>{listHighItems}</ul>
            </div>
        )
    }
    return result
}
List.propTypes = {
    type: PropTypes.string,
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
}

export default List