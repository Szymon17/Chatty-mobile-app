import { StyleSheet } from "react-native";
import { primaryColor } from "../../utils/styleVaribles";

const styles = StyleSheet.create({
  navigation: {
    paddingTop: "10%",
    height: "20%",
    maxHeight: 200,
    width: "100%",
    backgroundColor: primaryColor,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  container: {
    width: "100%",
    padding: 10,
  },
});

export default styles;
