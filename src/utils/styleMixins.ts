import { secondaryColor } from "./styleVaribles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navTitle: {
    color: secondaryColor,
    fontSize: 30,
    fontWeight: "800",
  },

  titleContainer: {
    width: "100%",
    height: "20%",
    maxHeight: 200,
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

  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },

  icon: {
    width: 0,
    height: 0,
  },

  route: {
    height: "100%",
    display: "flex",
  },

  routeBody: {
    flexGrow: 1,
  },
});
