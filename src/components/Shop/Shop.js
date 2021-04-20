import QuizBox from "../QuizBox/QuizBox";
import { QuizContextProvider } from "../QuizBox/quiz-data";
const Shop = () => {
    return (
        <div>
            <QuizContextProvider>
                <QuizBox />
            </QuizContextProvider>
        </div>
    );
};

export default Shop;
