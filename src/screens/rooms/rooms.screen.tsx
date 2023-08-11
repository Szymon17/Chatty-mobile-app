import styles from "./rooms.styles";
import mixins from "../../utils/styleMixins";
import { queryRoomsType } from "../../utils/types";
import { View, Text } from "react-native";
import { GET_ROOMS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import RoomsIcon from "../../../assets/icons/rooms.svg";
import SearchIcon from "../../../assets/icons/search.svg";
import Conversation from "../../components/conversation/conversation.component";
import Navigation from "../../components/navigation/navigation.component";

const Rooms = () => {
  const { data } = useQuery<queryRoomsType>(GET_ROOMS);

  return (
    <View style={styles.rooms}>
      <Navigation>
        <Text style={mixins.navTitle}>Rooms</Text>
        <View style={mixins.iconsContainer}>
          <SearchIcon />
          <RoomsIcon />
        </View>
      </Navigation>
      <View style={styles.conversations}>
        {data?.usersRooms &&
          data.usersRooms.rooms.map(({ name, id }, index) => (
            <Conversation key={index} lastMessageDate={new Date()} lastMessage="test message" name={name} id={id} />
          ))}
      </View>
    </View>
  );
};

export default Rooms;
