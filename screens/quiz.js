import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=20&category=18&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const handlerNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };
  const handlerPrevPress = () => {
    setQues(ques - 1);
    setOptions(generateOptionsAndShuffle(questions[ques - 1]));
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);

    return options;
  };

  const handlerSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 5);
    }
    if (ques !== 19) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
  };

  const handlerShowResult = () => {
    navigation.navigate("Result", { score: score });
  };

  return (
    <LinearGradient colors={["#7dcfb6", "white"]} style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/thinkbacklogo.png")}
        style={{ height: "100%", width: "100%" }}
        resizeMode="stretch"
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.container}>
          {questions && (
            <View style={{ height: "100%", width: "100%" }}>
              <View style={styles.top}>
                <ScrollView>
                  <Text style={styles.question}>
                    Q.{decodeURIComponent(questions[ques].question)}
                  </Text>
                </ScrollView>
              </View>

              <View>
                <ScrollView style={{ height: 380 }}>
                  <TouchableOpacity
                    onPress={() => handlerSelectedOption(options[0])}
                    style={{
                      borderWidth: 1,
                      borderRadius: 7,
                      backgroundColor: "#7dcfb6",
                      marginVertical: 10,
                    }}
                  >
                    <View style={styles.optionsbtn}>
                      <Text style={styles.options}>
                        {decodeURIComponent(options[0])}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handlerSelectedOption(options[1])}
                    style={{
                      borderWidth: 1,
                      borderRadius: 7,
                      backgroundColor: "#7dcfb6",
                      marginVertical: 10,
                    }}
                  >
                    <View style={styles.optionsbtn}>
                      <Text style={styles.options}>
                        {decodeURIComponent(options[1])}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handlerSelectedOption(options[2])}
                    style={{
                      borderWidth: 1,
                      borderRadius: 7,
                      backgroundColor: "#7dcfb6",
                      marginVertical: 10,
                    }}
                  >
                    <View style={styles.optionsbtn}>
                      <Text style={styles.options}>
                        {decodeURIComponent(options[2])}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handlerSelectedOption(options[3])}
                    style={{
                      borderWidth: 1,
                      borderRadius: 7,
                      backgroundColor: "#7dcfb6",
                      marginVertical: 10,
                    }}
                  >
                    <View style={styles.optionsbtn}>
                      <Text style={styles.options}>
                        {decodeURIComponent(options[3])}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
                <View style={styles.bottombtn}>
                  {ques >= 1 && (
                    <View style={styles.btn}>
                      <TouchableOpacity onPress={handlerPrevPress}>
                        <Text style={styles.btntxt}>PREV</Text>
                      </TouchableOpacity>
                    </View>
                  )}

                  {ques !== 19 && (
                    <View style={styles.btn}>
                      <TouchableOpacity onPress={handlerNextPress}>
                        <Text style={styles.btntxt}>SKIP</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {ques === 19 && (
                    <View style={styles.btn}>
                      <TouchableOpacity onPress={handlerShowResult}>
                        <Text style={styles.btntxt}>SHOW RESULT</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
    height: 180,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottombtn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  btn: {
    height: 50,
    width: 80,
    backgroundColor: "#7dcfb6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  btntxt: {
    fontSize: 18,
  },
  question: {
    fontSize: 25,
    fontFamily: "regular",
  },
  options: {
    fontSize: 18,
    fontFamily: "regular",
  },
  optionsbtn: {
    paddingVertical: 12,
    marginVertical: 10,
    backgroundColor: "#2A9D8F ",
    borderRadius: 7,
    paddingHorizontal: 12,
  },
});
