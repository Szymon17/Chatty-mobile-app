import styles from "./chat.styles";
import mixins from "../../utils/styleMixins";
import { useState, useRef } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useNavigate, useParams } from "react-router-native";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { AddMessage, GET_ROOM, OnMessageAdded, OnUserTyping } from "../../utils/queries";
import { messageSnapshot, queryRoomType, userSnapshot } from "../../utils/types";
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

  const scrollViewRef = useRef<ScrollView>(null);

  const [messageToSend, setSendMessage] = useState("");
  const [messages, setMessages] = useState<messageSnapshot[]>([]);
  const [roomUser, setRoomUser] = useState<userSnapshot>();
  const [typingUserID, setTypingUserID] = useState("");
  const [clearInputState, setClearInputState] = useState(false);

  const [sendMessage] = useMutation(AddMessage, { variables: { Body: messageToSend, RoomID: ID } });

  useQuery<queryRoomType>(GET_ROOM, {
    variables: { ID },
    onCompleted: data => {
      setMessages(Array(...data.room.messages).reverse());
      setRoomUser(data.room.user);
    },
    fetchPolicy: "network-only",
  });

  useSubscription<{ messageAdded: messageSnapshot }>(OnMessageAdded, {
    variables: { RoomID: ID },
    onData: ({ data }) => {
      if (data.data && data.data.messageAdded) {
        const { user, body } = data.data.messageAdded;
        setMessages(prev => [...prev, { body, user }]);
      }
    },
  });

  useSubscription<{ typingUser: userSnapshot }>(OnUserTyping, {
    variables: { RoomID: ID },
    onData: ({ data }) => {
      if (data.data && data.data.typingUser) setTypingUserID(data.data.typingUser.id);
    },
  });

  const sendMessagehandler = () => {
    setClearInputState(true);
    sendMessage();
    setTimeout(() => setClearInputState(false), 10);
  };

  return (
    <View style={mixins.route}>
      <Navigation>
        <View style={styles.backButtonCnt}>
          <PlusIcon onTouchEnd={() => navigate("/rooms")} style={styles.backButton} />
        </View>
        <View style={styles.userBox}>
          <ProfileIcon width="44" height="44" />
          <View style={{ marginLeft: 10 }}>
            {roomUser && <Text style={styles.userName}>{`${roomUser.firstName}  ${roomUser.lastName}`}</Text>}
            <Text style={styles.activeStatus}>Active now</Text>
          </View>
        </View>
        <View style={mixins.iconsContainer}>
          <PhoneIcon />
          <VideocallIcon />
        </View>
      </Navigation>

      <ScrollView
        onContentSizeChange={() => scrollViewRef.current !== null && scrollViewRef.current.scrollToEnd()}
        ref={scrollViewRef}
        contentContainerStyle={[styles.messagesBox, typingUserID ? styles.sendMessagesBoxTypingUser : null]}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {typingUserID && (
          <View style={styles.typingUserBox}>
            <ProfileIcon width="20" />
            <View style={styles.typingUser}>
              <View style={styles.typingUserCircle} />
              <View style={styles.typingUserCircle} />
              <View style={styles.typingUserCircle} />
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.sendMessageBox}>
        <View style={{ flexGrow: 1 }}>
          <FormInput
            clear={clearInputState}
            focusStyle={true}
            onPressIn={() => {
              if (scrollViewRef.current !== null) scrollViewRef.current.scrollToEnd();
            }}
            aditionalInputStyles={{ borderBottomRightRadius: 0 }}
            onChangeText={value => setSendMessage(value)}
          />
        </View>
        <Pressable onPress={sendMessagehandler}>
          <SendIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default Chat;
