import styles from "./custom-button.styles";
import { FC } from "react";
import { Text, Pressable } from "react-native";

type props = {
  handler: Function;
  title: string;
};

const CustomButton: FC<props> = ({ handler, title }) => {
  const touchHandler = () => handler();

  return (
    <Pressable onPress={touchHandler} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
