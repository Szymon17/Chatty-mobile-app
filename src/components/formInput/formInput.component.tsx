import styles from "./formInput.styles";
import { FC, useState } from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";
import { SvgXml } from "react-native-svg";
import { vision, visionLow } from "../../../assets/icons/icons";

type params = TextInputProps & { label: string; secureText?: boolean };

const FormInput: FC<params> = ({ label, secureText, ...otherProps }) => {
  const [isSecure, setSecureState] = useState(secureText);

  return (
    <View style={styles.formInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput secureTextEntry={isSecure} style={styles.input} {...otherProps}></TextInput>
      {secureText && (
        <View style={styles.secureBox}>
          <SvgXml onPress={() => setSecureState(!isSecure)} xml={isSecure ? visionLow : vision} />
        </View>
      )}
    </View>
  );
};

export default FormInput;
