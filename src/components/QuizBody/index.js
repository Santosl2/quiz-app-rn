import { QuestionTitle } from "./Question/Title";
import { Answers } from "./Question/Answers";
import { View, Button } from "react-native";
import { Container, Box } from "./styles";
import { useQuiz } from "../../hooks/useQuiz";

export function QuizBody() {
  const { answer, handleConfirmAnswer } = useQuiz();
  return (
    <Container>
      <View>
        <QuestionTitle />
        <Answers />
      </View>

      <View>
        <Button
          title="Confirm Answer"
          color={"#462e47"}
          disabled={!answer}
          onPress={handleConfirmAnswer}
        />
      </View>
    </Container>
  );
}
