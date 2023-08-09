import { StyleSheet } from "react-native";
import { secondaryColor } from "../../utils/styleVaribles";

export default StyleSheet.create({
  button: {
    position: "relative",
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: secondaryColor,
    borderRadius: 20,
  },

  text: {
    color: "white",
    fontWeight: "700",
  },
});
