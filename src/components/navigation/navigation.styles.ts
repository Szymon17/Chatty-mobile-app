import { StyleSheet } from "react-native";
import { primaryColor } from "../../utils/styleVaribles";
import styleMixins from "../../utils/styleMixins";

const styles = StyleSheet.create({
  navigation: {
    ...styleMixins.titleContainer,
    backgroundColor: primaryColor,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  container: {
    width: "100%",
    height: "65%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
