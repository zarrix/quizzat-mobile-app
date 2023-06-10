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
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{questionsLength} questions</Text>
        <Text>
          level: <Text style={styles[difficulty]}>easy</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    maxHeight: 250,
    borderRadius: 10,
    padding: 20,
    gap: 5,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain"
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
