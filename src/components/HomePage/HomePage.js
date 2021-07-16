import { MyContext } from "../../MyContext";
import { useContext } from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    const { counter, setCounter } = useContext(MyContext);
    return (
        <div className={styles.homePage}>
            <h1>HomePage</h1>
            <div className={styles.counter_box}>
                <button
                    className={styles.button__style}
                    onClick={() => setCounter(prev => prev - 1)}
                >
                    -
                </button>
                <button
                    className={styles.button__style}
                    onClick={() => setCounter(prev => prev + 1)}
                >
                    +
                </button>
                <button
                    className={styles.button__style}
                    onClick={() => setCounter(0)}
                >
                    Reset
                </button>
                <p>{counter}</p>
            </div>
        </div>
    );
};

export default HomePage;
