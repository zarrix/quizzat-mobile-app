import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
  QuizPage: undefined;
};

import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";

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
