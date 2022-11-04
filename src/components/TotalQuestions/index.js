import { useQuiz } from "../../hooks/useQuiz";

import { SubTitleText, CustomView } from "./styles";

export function TotalQuestions() {
  const { actualQuestionStep, totalQuestions, score } = useQuiz();

  return (
    <CustomView>
      <SubTitleText>
        Question {actualQuestionStep}/{totalQuestions}
      </SubTitleText>
      <SubTitleText>Score: {score}</SubTitleText>
    </CustomView>
  );
}
