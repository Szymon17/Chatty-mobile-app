import { useState, useContext, useEffect } from "react";
import styles from "./login.styles";
import mixins from "../../utils/styleMixins";
import { View, Text } from "react-native";
import FormInput from "../../components/formInput/formInput.component";
import CustomButton from "../../components/cutom-button/cutom-button.component";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { UserContext } from "../../contexts/user.context";

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        email
        firstName
        id
        lastName
        role
      }
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, tryLogin } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate("/home");
  }, [user]);

  return (
    <View style={styles.login}>
      <View style={mixins.titleContainer}>
        <Text style={mixins.navTitle}>Welcome back</Text>
      </View>
      <View style={mixins.bodyContainer}>
        <Text style={styles.description}>Log in and stay in touch with everyone!</Text>
        <View style={styles.inputsContainer}>
          <FormInput onChangeText={value => setEmail(value)} label="e-mail addres" />
          <FormInput secureText={true} onChangeText={value => setPassword(value)} label="password" />
        </View>
        <View style={styles.logInButtonCnt}>
          <CustomButton handler={() => tryLogin(email, password)} title="Log in"></CustomButton>
        </View>
      </View>
    </View>
  );
};

export default Login;
