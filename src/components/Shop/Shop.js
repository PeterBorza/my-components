import QuizBox from "../QuizBox/QuizBox";
import styles from "./Shop.module.scss";
import { QuizContextProvider } from "../QuizBox/quiz-data";
const Shop = () => {
    return (
        <div className={styles.shop_container}>
            <QuizContextProvider>
                <QuizBox />
            </QuizContextProvider>
        </div>
    );
};

export default Shop;
