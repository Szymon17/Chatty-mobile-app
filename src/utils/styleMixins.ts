import { secondaryColor } from "./styleVaribles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navTitle: {
    color: secondaryColor,
    fontSize: 30,
    fontWeight: "700",
  },

  titleContainer: {
    width: "100%",
    height: "20%",
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "flex-end",
  },

  bodyContainer: {
    position: "relative",
    height: "80%",
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  inputsContainer: {
    paddingHorizontal: 20,
  },

  button: {
    height: 30,
    backgroundColor: secondaryColor,
    color: "white",
  },
});
