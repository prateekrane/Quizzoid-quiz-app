import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Result from "../screens/result";
import Quiz from "../screens/quiz";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, statusBarColor: "#7dcfb6" }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{ headerShown: false, statusBarColor: "#7dcfb6" }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false, statusBarColor: "#7dcfb6" }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
