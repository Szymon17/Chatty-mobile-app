import { StyleSheet } from "react-native";
import { secondaryColorLighter } from "../../utils/styleVaribles";

const styles = StyleSheet.create({
  message: {
    width: "80%",
    padding: 12,
    borderRadius: 12,
  },

  userMessage: {
    backgroundColor: secondaryColorLighter,
    marginLeft: "20%",
    borderBottomRightRadius: 0,
  },

  userText: {
    color: "white",
  },

  frendMessage: {
    backgroundColor: "white",
    borderBottomLeftRadius: 0,
  },
});

export default styles;
