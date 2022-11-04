import { Text, View } from "react-native";
import { useQuiz } from "../../../../hooks/useQuiz";
import { Checkbox } from "../../../Checkbox";

export function Answers() {
  const { getActualQuestion } = useQuiz();

  return (
    <View>
      {getActualQuestion.options.map((answer, index) => (
        <Checkbox key={index} title={answer} />
      ))}
    </View>
  );
}
