import styles from "./custom-button.styles";
import { FC } from "react";
import { View, Text } from "react-native";

type props = {
  handler: Function;
  title: string;
};

const CustomButton: FC<props> = ({ handler, title }) => {
  const touchHandler = () => handler();

  return (
    <View onTouchEnd={touchHandler} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CustomButton;
