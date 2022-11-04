import { useQuiz } from "../../../../hooks/useQuiz";
import { Title } from "./styles";

export function QuestionTitle() {
  const { getActualQuestion } = useQuiz();

  return <Title>{getActualQuestion.question}</Title>;
}
