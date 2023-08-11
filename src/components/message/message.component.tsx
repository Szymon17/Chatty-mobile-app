import styles from "./message.styles";
import { FC, useContext, useEffect } from "react";
import { messageSnapshot } from "../../utils/types";
import { View, Text } from "react-native";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-native";

type props = { message: messageSnapshot };

const Message: FC<props> = ({ message }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <View style={[styles.message, user?.id === message.user.id ? styles.userMessage : styles.frendMessage]}>
      <Text style={user?.id === message.user.id && styles.userText}>{message.body}</Text>
    </View>
  );
};

export default Message;
