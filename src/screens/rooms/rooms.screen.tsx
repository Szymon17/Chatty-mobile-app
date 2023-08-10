import styles from "./rooms.styles";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ROOMS = gql`
  {
    usersRooms {
      rooms {
        name
        id
      }
      user {
        firstName
      }
    }
  }
`;

const Rooms = () => {
  const { data, error, loading } = useQuery(GET_ROOMS);

  useEffect(() => {
    console.log(data, error, loading);
  }, [data, error, loading]);

  return <Text>Conversations</Text>;
};

export default Rooms;
