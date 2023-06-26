import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import AnswerScreen from "./screens/AnswerScreen";
import QuestionScreen from "./screens/QuestionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{
            title: "Spørsmål",
            headerStyle: {
              backgroundColor: "#00ff00",
            },
          }}
        />
        <Stack.Screen
          name="Answer"
          component={AnswerScreen}
          options={({ route }) => ({
            title: "Utfordring",
            headerStyle: {
              backgroundColor:
                route.params.answer === "yes" ? "#00ff00" : "#ff0000",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
