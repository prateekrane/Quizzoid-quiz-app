import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // const [fontsloaded] = useFonts({
  //   front: require("./assets/fonts/Lobster-Regular.ttf"),
  //   regular: require("./assets/fonts/Karla-Regular.ttf"),
  //   bold: require("./assets/fonts/Karla-Bold.ttf"),
  // });
  const [fontsloaded] = useFonts({
    front: require("./assets/fonts/Lobster-Regular.ttf"),
    regular: require("./assets/fonts/Karla-Regular.ttf"),
    bold: require("./assets/fonts/Karla-Bold.ttf"),
  });
  if (!fontsloaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
