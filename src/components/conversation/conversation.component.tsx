import styles from "./conversation.styles";
import { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { profile } from "../../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import { useNavigate } from "react-router-native";

export type props = {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageDate: Date;
  newMessage?: boolean;
};

const Conversation: FC<props> = ({ id, name, lastMessage, lastMessageDate, newMessage = false }) => {
  const navigate = useNavigate();

  const calculateTimeFromLastMessage = () => {
    const timeDiff = new Date().getTime() - lastMessageDate.getTime();
    const hour = 3600000;

    if (timeDiff >= hour) return `${Math.ceil(timeDiff / (1000 * 60 * 60))} h ago`;
    return `${Math.ceil(timeDiff / (1000 * 60))} m ago`;
  };

  return (
    <Pressable onPress={() => navigate(id)} style={[styles.conversation, newMessage && styles.newMessageBackground]}>
      <SvgXml xml={profile} />
      <View style={styles.description}>
        <Text style={[styles.conversationTitle, newMessage && styles.newMessageText]}>{name}</Text>
        <Text style={[styles.lastMessage, newMessage && styles.newMessageText]}>{lastMessage}</Text>
      </View>
      {newMessage ? <View style={styles.newMessageStatus} /> : <Text style={styles.timeFromLastMessage}>{calculateTimeFromLastMessage()}</Text>}
    </Pressable>
  );
};

export default Conversation;
