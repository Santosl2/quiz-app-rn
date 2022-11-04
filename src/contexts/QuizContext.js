import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Alert } from "react-native";
import { QUESTIONS } from "../config/questions";

export const QuizContext = createContext({});

export function QuizProvider({ children }) {
  const [actualQuestionStep, setActualQuestionStep] = useState(1);
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);

  const getActualQuestion = useMemo(
    () => QUESTIONS.find((question) => question.id === actualQuestionStep),
    [actualQuestionStep]
  );

  const totalQuestions = useMemo(() => QUESTIONS.length, [QUESTIONS]);

  const handleUpdateAnswer = useCallback((answer) => {
    setAnswer(answer);
  }, []);

  const setQuestionStep = useCallback(() => {
    if (actualQuestionStep >= totalQuestions) {
      return Alert.alert("Quiz Finished", `Your final score is ${score}`);
    }

    setActualQuestionStep(actualQuestionStep + 1);
  }, [actualQuestionStep, totalQuestions]);

  const verifyAnswer = useCallback(() => {
    if (answer === getActualQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    setAnswer("");
    setQuestionStep();
  }, [answer, getActualQuestion, setQuestionStep]);

  return (
    <QuizContext.Provider
      value={{
        actualQuestionStep,
        setActualQuestionStep,
        totalQuestions,
        getActualQuestion,
        handleUpdateAnswer,
        answer,
        score,
        verifyAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
