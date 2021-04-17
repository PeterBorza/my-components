import { MyContext } from "../../MyContext";
import { useContext } from "react";
import styles from "./HomePage.module.scss";
const HomePage = () => {
  const { counter, setCounter } = useContext(MyContext);
  return (
    <div className="homePage">
      <h1>HomePage</h1>
      <button
        className={styles.button__style}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        {counter}
      </button>
    </div>
  );
};

export default HomePage;
