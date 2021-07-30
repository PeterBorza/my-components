import QuizBox from "../QuizBox/QuizBox";
import styles from "./Quiz.module.scss";
import { QuizContextProvider } from "../QuizBox/quiz-data";
const Quiz = () => {
    return (
        <div className={styles.quiz_container}>
            <QuizContextProvider>
                <QuizBox />
            </QuizContextProvider>
        </div>
    );
};

export default Quiz;
