import { useState } from "react";
import styles from "./ArrayState.module.scss";

const ArrayState = () => {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
            ...items,
            { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
        ]);
    };
    return (
        <div className={styles.state}>
            <button className={styles.state__button1} onClick={addItem}>
                Add a number
            </button>
            <button className={styles.state__button2} onClick={addItem}>
                Add up
            </button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default ArrayState;
