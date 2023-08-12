import { primaryColorLighter, secondaryColor } from "./styleVaribles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navTitle: {
    color: secondaryColor,
    fontSize: 28,
    fontFamily: "PoppinsExtra",
  },

  titleContainer: {
    width: "100%",
    height: 120,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "flex-end",
  },

  bodyContainer: {
    position: "relative",
    height: "80%",
    paddingHorizontal: 10,
  },

  bottomBtnContainer: {
    marginTop: 30,
    width: "100%",
    marginBottom: 20,
  },

  flexCenterRowDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
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
    backgroundColor: primaryColorLighter,
  },

  fontPopins: {
    fontFamily: "PoppinsRegular",
  },

  routeBody: {
    flexGrow: 1,
  },
});
