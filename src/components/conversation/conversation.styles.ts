import { StyleSheet } from "react-native";
import { secondaryColor } from "../../utils/styleVaribles";

const styles = StyleSheet.create({
  conversation: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 90,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },

  newMessageBackground: {
    backgroundColor: secondaryColor,
  },

  newMessageText: {
    color: "white",
  },

  newMessageStatus: {
    position: "absolute",
    top: 5,
    right: 10,
    width: 10,
    height: 10,
    backgroundColor: "#A8FF76",
    borderRadius: 5,
  },

  timeFromLastMessage: {
    position: "absolute",
    top: 5,
    right: 10,
    color: "#9FA2B2",
    fontSize: 10,
  },

  description: {
    paddingHorizontal: 10,
  },

  conversationTitle: {
    fontWeight: "600",
    fontSize: 14,
  },

  lastMessage: {
    fontWeight: "500",
    marginTop: 5,
    fontSize: 12,
  },
});

export default styles;
