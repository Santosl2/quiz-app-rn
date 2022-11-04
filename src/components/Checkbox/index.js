import { useQuiz } from "../../hooks/useQuiz";
import { CustomTouchableOpacity, CustomText } from "./styles";

export function Checkbox({ title }) {
  const { handleChangeAnswer, answer } = useQuiz();

  return (
    <CustomTouchableOpacity
      onPress={() => handleChangeAnswer(title)}
      isChecked={answer === title}
    >
      <CustomText>{title}</CustomText>
    </CustomTouchableOpacity>
  );
}
