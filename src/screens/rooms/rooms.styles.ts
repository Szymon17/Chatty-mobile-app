import { StyleSheet } from "react-native";
import mixins from "../../utils/styleMixins";
import { primaryColorLighter } from "../../utils/styleVaribles";

export default StyleSheet.create({
  rooms: {
    ...mixins.route,
    backgroundColor: primaryColorLighter,
  },

  conversations: {
    ...mixins.routeBody,
    paddingTop: 20,
  },
});
