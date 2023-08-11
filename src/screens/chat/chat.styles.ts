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

  scrollBox: {
    flexGrow: 1,
  },

  messagesBox: {
    paddingLeft: 40,
    paddingRight: 20,
    paddingVertical: "10%",
    gap: 30,
  },

  sendMessagesBoxTypingUser: {
    paddingBottom: "20%",
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

  typingUserBox: {
    position: "absolute",
    left: "5%",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  typingUser: {
    paddingHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 10,
    width: 70,
    height: 30,
    backgroundColor: "white",
    borderRadius: 12,
    borderBottomLeftRadius: 0,
  },

  typingUserCircle: {
    width: 8,
    height: 8,
    backgroundColor: primaryColor,
    borderRadius: 5,
  },
});

export default styles;
