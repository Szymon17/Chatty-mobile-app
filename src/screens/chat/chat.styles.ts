import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../utils/styleVaribles";

const styles = StyleSheet.create({
  backButtonCnt: { overflow: "hidden" },

  backButton: {
    transform: [{ translateX: -21.5 }, { rotateZ: "45deg" }],
  },

  userBox: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },

  userName: {
    color: secondaryColor,
    fontWeight: "600",
  },

  activeStatus: {
    color: "white",
    fontSize: 12,
  },

  messagesBox: {
    flexGrow: 1,
  },

  sendMessageBox: {
    width: "100%",
    height: "15%",
    minHeight: 75,
    padding: 10,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: primaryColor,
  },
});

export default styles;
