import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../utils/styleVaribles";
import mixins from "../../utils/styleMixins";

const styles = StyleSheet.create({
  title: {
    ...mixins.titleContainer,
    height: "20%",
  },

  register: {
    backgroundColor: primaryColor,
    height: "100%",
  },

  inputsContainer: {
    ...mixins.inputsContainer,
    marginTop: 30,
    flexGrow: 1,
    display: "flex",
    gap: 30,
  },

  privacyPolicyBox: {
    marginTop: 10,
  },

  registerToLink: {
    marginTop: 10,
  },

  whiteText: {
    color: "white",
    textAlign: "center",
  },

  blueLink: {
    color: "#259DFA",
  },

  link: {
    color: secondaryColor,
    fontWeight: "700",
  },
});

export default styles;
