export const useYesNo = ({ navigation }) => {
  const onYes = () => {
    navigation.navigate("Answer", { answer: "yes" });
  };

  const onNo = () => {
    navigation.navigate("Answer", { answer: "no" });
  };

  return { onYes, onNo };
};
