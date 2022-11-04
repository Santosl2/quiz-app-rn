import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

export function useQuiz() {
  const ctx = useContext(QuizContext);

  return ctx;
}
