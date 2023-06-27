import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import QuizCard from "../components/QuizCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../App";

const cards = [
  { title: "General", image: require("../../assets/general.png"), categoryId: 9 },
  { title: "Sports", image: require("../../assets/sports.png"), categoryId: 21 },
  { title: "Animals", image: require("../../assets/animals.png"), categoryId: 27 },
  {
    title: "Science",
    image: require("../../assets/science_nature.png"),
    categoryId: 17,
  },
  {
    title: "Geography",
    image: require("../../assets/geography.png"),
    categoryId: 22,
  },
  {
    title: "History",
    image: require("../../assets/history.png"),
    categoryId: 23,
  },
];

export default function Home({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) {
  return (
    <SafeAreaView style={{ backgroundColor: "#9A78FF", flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            style={{ width: "100%" }}
            data={cards}
            numColumns={2}
            ListHeaderComponent={<Text style={styles.title}>Let's Play</Text>}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <QuizCard
                title={item.title}
                image={item.image}
                questionsLength={10}
                difficulty={"easy"}
                onClick={() =>
                  navigation.navigate("QuizPage", { categoryId: item.categoryId })
                }
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
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
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "100%",
  },
});
