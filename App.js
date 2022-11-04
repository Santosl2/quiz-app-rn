import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { QuizBody } from "./src/components/QuizBody";
import { Title } from "./src/components/Title";
import { TotalQuestions } from "./src/components/TotalQuestions";
import { QuizProvider } from "./src/contexts/QuizContext";

export default function App() {
  return (
    <QuizProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <TotalQuestions />
          <Title />
          <View style={styles.separator} />
          <QuizBody />
        </View>
      </SafeAreaView>
    </QuizProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  box: {
    marginTop: 30,
    textAlign: "center",
    padding: 15,
  },
  separator: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
});
