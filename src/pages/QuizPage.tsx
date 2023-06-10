import { StyleSheet, View, Text, Alert, SafeAreaView } from "react-native";
import Button from "../components/Button";
import { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import quizApi, { Question } from "../api/quizApi";
import QuizQuestion from "../components/QuizQuestion";
import ProgressBar from "../components/ProgressBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../App";
import Loading from "../components/Loading";

export default function QuizPage({
  route,
  navigation,
}: NativeStackScreenProps<AppStackParamList>) {
  const { categoryId } = route.params as {categoryId: number};

  const [questions, setQuestions] = useState<Question[]>([]);
  const [level, setLevel] = useState(0);

  const [answer, setAnswer] = useState("");
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false);

  const [score, setScore] = useState(0);
  const [disableAnswer, setDisableAnswer] = useState(false);

  const progress = ((level + 1) / questions.length) * 100;

  const goToNextQuestion = () => {
    setDisableAnswer(false);
    if (level < questions.length - 1) {
      setLevel((level) => level + 1);
      setAnswer("");
      setShouldShowAnswer(false);
    } else if (level === questions.length - 1) {
      Alert.alert("Bravo!", `You scored ${(score / questions.length) * 100}%`, [
        { text: "OK", onPress: () => navigation.navigate("QuizList") },
      ]);
    }
  };

  const checkAnswer = () => {
    setDisableAnswer(true);
    setShouldShowAnswer(true);
    if (answer === questions[level].correct_answer) {
      setScore((score) => score + 1);
    }
  };

  useEffect(() => {
    quizApi
      .getQuizQuestionsByCategoryId(categoryId)
      .then((response) => {
        setQuestions(response);
      })
      .catch((err) => console.log(err));
  }, []);

  if (questions.length === 0) {
    return (
      <Loading />
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#9A78FF", flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Level {level}</Text>
        <ProgressBar progress={progress} />

        <QuizQuestion
          question={questions[level]}
          onAnswerSelect={(answer: string) => setAnswer(answer)}
          answer={answer}
          showCorrectAnswer={shouldShowAnswer}
          disableSelect={disableAnswer}
        />

        <View style={styles.actions}>
          {!shouldShowAnswer ? (
            <Button
              style={[styles.action, styles.check_action]}
              onClick={checkAnswer}
            >
              <Text style={styles.action_title}>Check</Text>
              <Ionicons name="information-circle" size={40} color="white" />
            </Button>
          ) : (
            <Button
              style={[styles.action, styles.next_action]}
              onClick={goToNextQuestion}
            >
              <Text style={styles.action_title}>Next</Text>
              <Ionicons name="arrow-forward" size={40} color="white" />
            </Button>
          )}
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
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  action: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    columnGap: 20,
    padding: 10,
  },
  check_action: {
    backgroundColor: "#87CEFA",
  },
  next_action: {
    backgroundColor: "#FFA78F",
  },
  action_title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});
