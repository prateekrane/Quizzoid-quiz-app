import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/title";
const Home = ({ navigation }) => {
  return (
    <LinearGradient colors={["#7dcfb6", "white"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Title />
        <View style={styles.logocontainer}>
          <Image
            source={require("../assets/logo.png")}
            style={{ height: 300, width: 300 }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
          <View style={styles.btncontainer}>
            <Text style={styles.btn}>START</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
  },
  logocontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  btncontainer: {
    height: 50,
    width: 200,
    backgroundColor: "#7dcfb6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginTop: 80,
  },
  btn: {
    fontFamily: "regular",
    fontSize: 20,
    // color: "white",
  },
});
