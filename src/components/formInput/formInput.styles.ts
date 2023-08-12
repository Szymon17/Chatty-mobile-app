import mixins from "../../utils/styleMixins";
import { StyleSheet } from "react-native";
import { secondaryColor } from "../../utils/styleVaribles";

const styles = StyleSheet.create({
  formInput: {
    width: "100%",
    position: "relative",
  },

  label: {
    ...mixins.fontPopins,
    position: "absolute",
    left: 0,
    top: -20,
    color: "white",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 5,
  },

  input: {
    height: 35,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  inputFocus: {
    borderWidth: 2,
    borderColor: secondaryColor,
  },

  secureBox: {
    position: "absolute",
    right: 10,
    bottom: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default styles;
