import { StyleSheet, View, Text, Alert } from "react-native";
import Button from "../components/Button";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Question } from "../api/quizApi";

type Props = {
  question: Question;
};

export default function QuizQuestion({ question }: Props) {
  const [answer, setAnswer] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.question_container}>
        <Text style={styles.question}>
          {question.question}
        </Text>
      </View>
      <View style={styles.answers_container}>
        {question.answers.map((ans, index) => (
          <Button
            key={index}
            style={[
              styles.answer,
              ans.answer === answer ? styles.selected_answer : undefined,
            ]}
            onClick={() => setAnswer(ans.answer)}
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>
              {index + 1}. {ans.answer}
            </Text>
          </Button>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: '100%'
  },
  question_container: {
    minHeight: "30%",
    width: "100%",
    display: "flex",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  question: {
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
