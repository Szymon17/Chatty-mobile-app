import { StyleSheet } from "react-native";
import { primaryColor } from "../../utils/styleVaribles";
import mixins from "../../utils/styleMixins";

const styles = StyleSheet.create({
  title: {
    ...mixins.titleContainer,
    height: "20%",
  },

  login: {
    backgroundColor: primaryColor,
    height: "100%",
  },

  description: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },

  inputsContainer: {
    ...mixins.inputsContainer,
    marginTop: 40,
    height: "60%",
    display: "flex",
    gap: 30,
  },

  logInButtonCnt: {
    width: "100%",
    height: "30%",
  },
});

export default styles;
