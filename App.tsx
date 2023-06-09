import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import QuizPage from "./src/pages/QuizPage";

export type AppStackParamList = {
  Home: undefined;
  QuizPage: {
    categoryId: number,
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QuizPage" component={QuizPage} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
