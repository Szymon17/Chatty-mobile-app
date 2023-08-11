import styles from "./chat.styles";
import mixins from "../../utils/styleMixins";
import { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigate, useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_ROOM } from "../../utils/queries";
import { messageSnapshot, queryRoomType } from "../../utils/types";
import Navigation from "../../components/navigation/navigation.component";
import FormInput from "../../components/formInput/formInput.component";
import PlusIcon from "../../../assets/icons/plus.svg";
import ProfileIcon from "../../../assets/icons/profile.svg";
import PhoneIcon from "../../../assets/icons/phone.svg";
import VideocallIcon from "../../../assets/icons/videocall.svg";
import SendIcon from "../../../assets/icons/send.svg";
import Message from "../../components/message/message.component";

const Chat = () => {
  const navigate = useNavigate();
  const ID = useParams()["*"];

  const scrollViewRef = useRef<any>(null);

  const { data, error } = useQuery<queryRoomType>(GET_ROOM, { variables: { ID } });
  const [sendMessage, setSendMessage] = useState("");
  const [messages, setMessages] = useState<messageSnapshot[]>([]);

  useEffect(() => {
    if (data) setMessages(Array(...data.room.messages).reverse());
    else if (error) navigate("/login");
  }, [data, error]);

  return (
    <View style={mixins.route}>
      <Navigation>
        <View style={styles.backButtonCnt}>
          <PlusIcon onTouchEnd={() => navigate("/rooms")} style={styles.backButton} />
        </View>
        <View style={styles.userBox}>
          <ProfileIcon width="44" height="44" />
          <View style={{ marginLeft: 10 }}>
            {data && <Text style={styles.userName}>{`${data.room.user.firstName}  ${data.room.user.lastName}`}</Text>}
            <Text style={styles.activeStatus}>Active now</Text>
          </View>
        </View>
        <View style={mixins.iconsContainer}>
          <PhoneIcon />
          <VideocallIcon />
        </View>
      </Navigation>

      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false })}
        contentContainerStyle={styles.messagesBox}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ScrollView>
      <View style={styles.sendMessageBox}>
        <View style={{ flexGrow: 1 }}>
          <FormInput focusStyle={true} aditionalInputStyles={{ borderBottomRightRadius: 0 }} onChangeText={value => setSendMessage(value)} />
        </View>
        <SendIcon />
      </View>
    </View>
  );
};

export default Chat;
