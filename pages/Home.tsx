import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from "react-native";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../App";

import { Ionicons } from "@expo/vector-icons";

export default function Home({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) {
  const gotoQuizPage = () => {
    navigation.navigate("QuizPage");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#9A78FF", flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.app_image}
          source={require("../assets/question_mark.png")}
        />

        <View>
          <Text style={styles.title}>
            Qui<Text style={{ color: "#FFA78F" }}>ZZ</Text>at!
          </Text>
          <Text style={styles.description}>Intersting QUIZ awaits you!</Text>
        </View>

        <View style={styles.actions_container}>
          <Button style={styles.play_action} onClick={gotoQuizPage}>
            <Ionicons name="play" size={60} color="white" />
          </Button>
          <Button
            style={styles.info_action}
            onClick={() =>
              Alert.alert(
                "How To Play...",
                "Answer all the quiz questions to win. simple as this XD!"
              )
            }
          >
            <Ionicons name="information-circle" size={60} color="white" />
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
  app_image: {
    height: 450,
    width: 450,
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 50,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Gill Sans",
  },
  description: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  actions_container: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
    textAlign: "center",
  },
  play_action: {
    backgroundColor: "#FFA78F",
    borderRadius: 10,
    padding: 10,
  },
  info_action: {
    backgroundColor: "#78D9FF",
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
