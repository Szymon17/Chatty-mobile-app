import styles from "./register.styles";
import mixins from "../../utils/styleMixins";
import { useState, useContext, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { UserContext } from "../../contexts/user.context";
import FormInput from "../../components/formInput/formInput.component";
import CustomButton from "../../components/cutom-button/cutom-button.component";
import { useNavigate, Link } from "react-router-native";
import { validate } from "../../utils/functions";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/queries";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { user } = useContext(UserContext);

  const [register, { error }] = useMutation(REGISTER_USER, {
    variables: { Email: email, FirstName: firstName, LastName: lastName, Password: password, PasswordConfirmation: passwordConfirmation },
  });

  useEffect(() => {
    if (user) navigate("/rooms");
    else if (error) console.log(error);
  }, [user, error]);

  const registerHandler = () => {
    if (!validate.email(email)) console.log("bad email");
    else if (!validate.name(firstName)) console.log("bad first name");
    else if (!validate.name(lastName)) console.log(console.log("bad last name"));
    else if (!validate.password(password, passwordConfirmation)) console.log("bad passwords");
    else register().then(() => navigate("/"));
  };

  return (
    <View style={styles.register}>
      <View style={styles.title}>
        <Text style={mixins.navTitle}>Create account</Text>
      </View>
      <View style={mixins.bodyContainer}>
        <View style={styles.inputsContainer}>
          <FormInput onChangeText={value => setEmail(value)} label="e-mail addres" />
          <FormInput onChangeText={value => setFirstName(value)} label="first name" />
          <FormInput onChangeText={value => setLastName(value)} label="last name" />
          <FormInput secureText={true} onChangeText={value => setPassword(value)} label="password" />
          <FormInput secureText={true} onChangeText={value => setPasswordConfirmation(value)} label="password confirmation" />
        </View>
        <View style={mixins.bottomBtnContainer}>
          <CustomButton handler={registerHandler} title="Sing up"></CustomButton>
          <View style={styles.privacyPolicyBox}>
            <Text style={styles.whiteText}>By singing up you agree with</Text>
            <View style={mixins.flexCenterRowDisplay}>
              <Link to="/">
                <Text style={styles.blueLink}>Terms and Conditions</Text>
              </Link>
              <Text style={styles.whiteText}>and</Text>
              <Link to="/">
                <Text style={styles.blueLink}>Privacy Policy</Text>
              </Link>
            </View>
          </View>
          <View style={[mixins.flexCenterRowDisplay, styles.registerToLink]}>
            <Text style={styles.whiteText}>Don't have an account?</Text>
            <Link to={"/"}>
              <Text style={styles.link}>Log in</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
