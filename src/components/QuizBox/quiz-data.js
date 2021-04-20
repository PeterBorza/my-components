import { createContext } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
    const q = [
        {
            question: "Why do I have to do this all over again?",
            answers: ["no", "yes", "maybe"],
            id: "1",
        },
        {
            question: "Why do I have to do this all over again?",
            answers: ["no", "yes", "maybe"],
            id: "2",
        },
    ];
    const correctAnswers = [0, 1];

    return <QuizContext.Provider value={[q, correctAnswers]}>{children}</QuizContext.Provider>;
};
