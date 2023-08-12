import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../utils/styleVaribles";
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
    ...mixins.fontPopins,
    marginTop: 50,
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },

  inputsContainer: {
    ...mixins.inputsContainer,
    marginTop: "20%",
    flexGrow: 1,
    display: "flex",
    gap: 30,
  },

  registerToLink: {
    marginTop: 30,
  },

  whiteText: {
    color: "white",
  },

  link: {
    color: secondaryColor,
    fontWeight: "700",
  },
});

export default styles;
