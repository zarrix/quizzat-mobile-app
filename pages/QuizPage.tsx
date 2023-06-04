import { StyleSheet, View, Text, Alert, SafeAreaView } from "react-native";
import Button from "../components/Button";
import { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import quizApi from "../api/quizApi";
import QuizQuestion from "../components/QuizQuestion";

const answers = ["Soufiane", "Soufiane Zarrouki", "Zarrouki"];

export default function QuizPage() {
  const questions = quizApi.getQuizQuestions();
  const [level, setLevel] = useState(0);

  useEffect(() => {
    console.log(level);
  }, [level]);

  const goToNextQuestion = () => {
    Alert.alert("success");
    if (level < questions.length - 1) setLevel((level) => level + 1);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#9A78FF", flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Level {level}</Text>

        <QuizQuestion question={questions[level]} />

        <View style={styles.actions}>
          <Button style={styles.action} onClick={() => Alert.alert("next")}>
            <Ionicons name="arrow-back" size={40} color="white" />
          </Button>
          <Button style={styles.action} onClick={goToNextQuestion}>
            <Ionicons name="arrow-forward" size={40} color="white" />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    flex: 1,
    backgroundColor: "#9A78FF",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  quiz_container: {
    minHeight: "30%",
    width: "100%",
    display: "flex",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  quiz_question: {
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Gill Sans",
  },
  answers_container: {
    display: "flex",
    gap: 10,
    width: "100%",
  },
  answer: {
    textColor: "white",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 4,
    padding: 20,
  },
  selected_answer: {
    backgroundColor: "#87CEFA",
  },
  actions: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  action: {
    backgroundColor: "#FFA78F",
    borderRadius: 10,
    padding: 10,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#9A78FF",
    padding: 20,
    borderRadius: 4,
  },
});
