import styles from "./login.styles";
import mixins from "../../utils/styleMixins";
import { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigate, Link } from "react-router-native";
import { UserContext } from "../../contexts/user.context";
import FormInput from "../../components/formInput/formInput.component";
import CustomButton from "../../components/cutom-button/cutom-button.component";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, dataError, tryLogin } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate("/rooms");
    else if (dataError) console.log(dataError.cause);
  }, [user, dataError]);

  return (
    <View style={styles.login}>
      <View style={styles.title}>
        <Text style={mixins.navTitle}>Welcome back</Text>
      </View>
      <View style={mixins.bodyContainer}>
        <Text style={styles.description}>Log in and stay in touch with everyone!</Text>
        <View style={styles.inputsContainer}>
          <FormInput onChangeText={value => setEmail(value)} label="e-mail addres" />
          <FormInput secureText={true} onChangeText={value => setPassword(value)} label="password" />
        </View>
        <View style={mixins.bottomBtnContainer}>
          <CustomButton handler={() => tryLogin(email, password)} title="Log in"></CustomButton>
          <View style={[mixins.flexCenterRowDisplay, styles.registerToLink]}>
            <Text style={styles.whiteText}>Don't have an account?</Text>
            <Link to={"/register"}>
              <Text style={styles.link}>Sing up</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
