import { useState, useContext } from "react";
import { QuizContext } from "../QuizBox/quiz-data";
import styles from "./QuizBox.module.scss";
const QuizBox = () => {
    const [q, correctAnswers] = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleNextQuestion = index => {
        const nextQuestion = currentQuestion + 1;

        index === correctAnswers[currentQuestion] && setScore(prev => prev + 100 / q.length);

        nextQuestion < q.length
            ? setCurrentQuestion(nextQuestion)
            : setTimeout(() => setShowScore(true), 1000);
    };

    const resetGame = () => {
        setScore(0);
        setShowScore(false);
        setCurrentQuestion(0);
    };

    return (
        <div className={styles.quizBox}>
            {!showScore ? (
                <>
                    <div>
                        <h2>
                            Question <span>{currentQuestion + 1}</span>/{q.length}
                        </h2>
                        <h1>{q[currentQuestion].question}</h1>
                    </div>
                    <div className={styles.btnWrap}>
                        {q[currentQuestion].answers.map((answer, index) => (
                            <button key={index} onClick={() => handleNextQuestion(index)}>
                                {answer}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div>
                    <h1>
                        Your score is <span>{score}%</span>
                    </h1>
                    <button onClick={resetGame}>Try Again</button>
                </div>
            )}
        </div>
    );
};

export default QuizBox;
