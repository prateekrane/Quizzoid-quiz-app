import { View, Text, StyleSheet } from "react-native";

const Title = () => {
  return (
    <View>
      <Text style={styles.txt}>QUIZZOID</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  txt: {
    fontFamily: "bold",
    fontSize: 50,
  },
});
