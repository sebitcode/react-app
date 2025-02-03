import styles from "./Fruit.module.css"

function ListItemFood({id = 0, name = "Fruit", calories = 0}) {
    return(<li key={id} className={styles.list_item_fruit}>{name}: &nbsp; <b>{calories}</b></li>);
}

export default ListItemFood