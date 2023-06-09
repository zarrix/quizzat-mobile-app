import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";
import { Question } from "../api/quizApi";
import { decode } from "he";

type Props = {
  question: Question;
  answer: string;
  onAnswerSelect: (answer: string) => void;
  showCorrectAnswer: boolean;
  disableSelect: boolean;
};

export default function QuizQuestion({
  question,
  answer,
  onAnswerSelect,
  showCorrectAnswer,
  disableSelect,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.question_container}>
        <Text style={styles.question}>{decode(question.question)}</Text>
      </View>
      <View style={styles.answers_container}>
        {question.incorrect_answers
          .concat(question.correct_answer)
          .map((ans, index) => (
            <Button
              disabled={disableSelect}
              key={index}
              style={[
                styles.answer,
                ans === answer ? styles.selected_answer : undefined,
                ans === question.correct_answer && showCorrectAnswer
                  ? styles.correct_answer
                  : undefined,
              ]}
              onClick={() => onAnswerSelect(ans)}
            >
              <Text style={{ fontWeight: "700", fontSize: 15 }}>
                {index + 1}. {decode(ans)}
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
    width: "100%",
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
    fontSize: 24,
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
  correct_answer: {
    backgroundColor: "#78FF9A",
  },
});
