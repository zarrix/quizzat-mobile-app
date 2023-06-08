import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface Props {
  progress: number;
  style?: StyleProp<ViewStyle>;
  barStyle?: StyleProp<ViewStyle>;
}

export default function ProgressBar(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.progress, { width: `${props.progress}%` }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    height: 10,
    borderRadius: 10,
  },
  progress: {
    backgroundColor: "#FFA78F",
    height: "100%",
    borderRadius: 10,
  },
});
