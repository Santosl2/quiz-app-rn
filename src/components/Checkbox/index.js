import { CustomTouchableOpacity, CustomText } from "./styles";
import { useQuiz } from "../../hooks/useQuiz";

export function Checkbox({ title }) {
  const { handleUpdateAnswer, answer } = useQuiz();

  return (
    <CustomTouchableOpacity
      onPress={() => handleUpdateAnswer(title)}
      isChecked={answer === title}
    >
      <CustomText>{title}</CustomText>
    </CustomTouchableOpacity>
  );
}
