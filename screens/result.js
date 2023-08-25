import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  // console.log(params);
  return (
    <LinearGradient colors={["#7dcfb6", "white"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>RESULT</Text>
        </View>
        <View style={styles.logocontainer}>
          <Image
            source={
              { score } >= 60
                ? require("../assets/victorylogo.png")
                : require("../assets/faillogo.png")
            }
            style={{ height: 300, width: 300 }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.scoretxt}>{score}/100</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.txt}>HOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Result;

const styles = StyleSheet.create({
  logocontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "bold",
    fontSize: 40,
  },
  btn: {
    height: 50,
    width: "50%",
    backgroundColor: "#7dcfb6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginTop: 50,
  },
  txt: {
    fontFamily: "regular",
    fontSize: 20,
  },
  scoretxt: {
    fontFamily: "bold",
    fontSize: 25,
  },
});
