import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { QuizDifficulty } from "../api/quizApi";

type Props = {
  title: string;
  image: ImageSourcePropType;
  questionsLength: number;
  difficulty: QuizDifficulty;
  onClick?: () => void;
};

export default function QuizCard({
  title,
  image,
  questionsLength,
  difficulty,
  onClick,
}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{questionsLength} questions</Text>
      <Text>
        level: <Text style={styles[difficulty]}>easy</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    padding: 20,
    gapRow: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    height: 250,
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    margin: "auto",
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  easy: {
    color: "green",
  },
  medium: {
    color: "orange",
  },
  hard: {
    color: "red",
  },
  description: {
    color: "#B0B1B0",
  },
});
