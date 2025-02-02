function Food() {
    const [food1, food2] = ["Pizza", "Burger"];
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2}</li>
        </ul>
    );
}

export default Food;