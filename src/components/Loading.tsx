import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

export default function Loading() {
  return (
    <SafeAreaView style={{ backgroundColor: "#9A78FF", flex: 1 }}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
});
