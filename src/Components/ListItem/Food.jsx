import styles from "./Fruit.module.css"

function ListItemFood({name = "Fruit", calories = 0}) {
    return(<li className={styles.list_item_fruit}>{name}: &nbsp; <b>{calories}</b></li>);
}

export default ListItemFood