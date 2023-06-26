import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAnswer } from "../hooks/useAnswer";

export default function AnswerScreen({ navigation, route }) {
  const { result, title, onContinue } = useAnswer({
    answer: route.params.answer,
    navigation,
  });

  return (
    <View style={[styles.container, styles[route.params.answer]]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.answerContainer}>
        <Text style={styles.answerText}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Fortsett" onPress={onContinue}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  answerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  titleText: {
    fontSize: 48,
    fontWeight: 900,
  },
  answerText: {
    fontSize: 32,
    fontWeight: 900,
  },
  yes: {
    backgroundColor: "#00ff00",
  },
  no: {
    backgroundColor: "#ff0000",
  },
});
