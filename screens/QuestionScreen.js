import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useYesNo } from "../hooks/useYesNo";

export default function QuestionScreen({ navigation }) {
  const { onYes, onNo } = useYesNo({navigation});

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.answerButton} onPress={onYes}>
        <View style={[styles.answerButton, styles.yes]}>
          <Text style={styles.answerText}>Ja</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.or}>
        <Text>eller</Text>
      </View>

      <TouchableHighlight style={styles.answerButton} onPress={onNo}>
        <View style={[styles.answerButton, styles.no]} onPress={onNo}>
          <Text style={styles.answerText}>Nei</Text>
        </View>
      </TouchableHighlight>
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
  answerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  answerText: {
    fontSize: 32,
    fontWeight: 900,
  },
  yes: {
    backgroundColor: "#00ff00",
    marginBottom: -25,
  },
  or: {
    flex: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    height: 50,
    width: 50,
    zIndex: 999,
  },
  no: {
    backgroundColor: "#ff0000",
    marginTop: -25,
  },
});
