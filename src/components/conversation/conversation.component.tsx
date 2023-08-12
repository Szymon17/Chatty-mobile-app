import mixins from "../../utils/styleMixins";
import styles from "./conversation.styles";
import { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import Profile from "../../../assets/icons/profile.svg";

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
      <Profile />
      <View style={styles.description}>
        <Text style={[styles.conversationTitle, mixins.fontPopins, newMessage && styles.newMessageText]}>{name}</Text>
        <Text style={[styles.lastMessage, mixins.fontPopins, newMessage && styles.newMessageText]}>{lastMessage}</Text>
      </View>
      {newMessage ? <View style={styles.newMessageStatus} /> : <Text style={styles.timeFromLastMessage}>{calculateTimeFromLastMessage()}</Text>}
    </Pressable>
  );
};

export default Conversation;
