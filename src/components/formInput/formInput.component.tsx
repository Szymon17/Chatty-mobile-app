import styles from "./formInput.styles";
import { FC, useState, useEffect, useRef } from "react";
import { TextInput, View, Text, TextInputProps, StyleProp, TextStyle } from "react-native";
import VisionLowIcon from "../../../assets/icons/vision-low.svg";
import VisionIcon from "../../../assets/icons/vision.svg";

type params = TextInputProps & {
  label?: string;
  secureText?: boolean;
  aditionalInputStyles?: StyleProp<TextStyle>;
  focusStyle?: boolean;
  clear?: boolean;
};

const FormInput: FC<params> = ({ label, secureText, aditionalInputStyles, clear, focusStyle = false, ...otherProps }) => {
  const [isSecure, setSecureState] = useState(secureText);
  const [inputState, setInputState] = useState<"blur" | "focus">("blur");
  const ref = useRef<TextInput>(null);

  useEffect(() => {
    if (clear && ref.current) ref.current.clear();
  }, [clear]);

  return (
    <View style={styles.formInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={ref}
        onFocus={focusStyle ? () => setInputState("focus") : () => null}
        onBlur={focusStyle ? () => setInputState("blur") : () => null}
        secureTextEntry={isSecure}
        selectionColor="black"
        style={[styles.input, inputState === "focus" && styles.inputFocus, aditionalInputStyles && aditionalInputStyles]}
        {...otherProps}
      ></TextInput>
      {secureText && (
        <View style={styles.secureBox}>
          {isSecure ? <VisionLowIcon onPress={() => setSecureState(!isSecure)} /> : <VisionIcon onPress={() => setSecureState(!isSecure)} />}
        </View>
      )}
    </View>
  );
};

export default FormInput;
