import { StyleSheet } from "react-native";
import { primaryColor } from "../../utils/styleVaribles";
import mixins from "../../utils/styleMixins";

const styles = StyleSheet.create({
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
    marginTop: 15,
    height: "70%",
  },

  logInButtonCnt: {
    width: "100%",
    height: "30%",
  },
});

export default styles;
