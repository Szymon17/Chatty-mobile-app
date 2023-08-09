import styles from "./navigation.styles";
import { FC, JSX } from "react";
import { View } from "react-native";

type props = {
  children?: JSX.Element;
};

const Navigation: FC<props> = ({ children }) => {
  return (
    <View style={styles.navigation}>
      <View style={styles.container}>{children && children}</View>
    </View>
  );
};

export default Navigation;
