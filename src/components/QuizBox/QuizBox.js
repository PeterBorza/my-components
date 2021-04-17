import { useContext, useState } from "react";
import { MyContext } from "../../MyContext";
import styles from "./QuizBox.module.scss";
const QuizBox = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const {
    q,
    correctAnswers,
    showScore,
    score,
    setScore,
    setShowScore,
  } = useContext(MyContext);

  const handleNextQuestion = (index) => {
    const nextQuestion = currentQuestion + 1;

    index === correctAnswers[currentQuestion] &&
      setScore((prev) => prev + 100 / q.length);

    nextQuestion < q.length
      ? setCurrentQuestion(nextQuestion)
      : setTimeout(() => setShowScore(true), 1000);
  };

  return (
    <div className={styles.quizBox}>
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
    </div>
  );
};

export default QuizBox;
