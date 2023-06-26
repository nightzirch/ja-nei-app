import answers from "../data/answers";

export const useAnswer = ({ answer, navigation }) => {
  const result =
    answers[answer][Math.floor(Math.random() * answers[answer].length)];

  const title = { yes: "Ja", no: "Nei" }[answer];

  const onContinue = () => {
    navigation.navigate("Question");
  };

  return { result, title, onContinue };
};
