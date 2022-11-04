import { useMemo } from "react";
import { Text, View } from "react-native";
import { useQuiz } from "../../../../hooks/useQuiz";
import { Checkbox } from "../../../Checkbox";

export function Answers() {
  const { getActualQuestion } = useQuiz();

  const randomAnswers = useMemo(
    () =>
      getActualQuestion.options
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort),

    [getActualQuestion]
  );

  return (
    <View>
      {randomAnswers.map(({ value }, index) => (
        <Checkbox key={index} title={value} />
      ))}
    </View>
  );
}
