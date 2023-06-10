import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import QuizCard from "../components/QuizCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../App";

export default function QuizList({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) {
  return (
    <SafeAreaView style={{ backgroundColor: "#9A78FF", flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Let's Play</Text>
          <View style={styles.quiz_container}>
            <QuizCard
              title={"General"}
              image={require("../../assets/general.png")}
              questionsLength={10}
              difficulty={"easy"}
              onClick={() => navigation.navigate("QuizPage", { categoryId: 9 })}
            />
            <QuizCard
              title={"Sports"}
              image={require("../../assets/sports.png")}
              questionsLength={10}
              difficulty={"easy"}
              onClick={() =>
                navigation.navigate("QuizPage", { categoryId: 21 })
              }
            />
            <QuizCard
              title={"Animals"}
              image={require("../../assets/animals.png")}
              questionsLength={10}
              difficulty={"easy"}
              onClick={() =>
                navigation.navigate("QuizPage", { categoryId: 27 })
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 20,
    flex: 1,
    backgroundColor: "#9A78FF",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
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
    display: "flex",
    columnGap: 10,
    rowGap: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
});
