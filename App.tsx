import { ApolloProvider } from "@apollo/client";
import { NativeRouter, Routes, Route } from "react-router-native";
import { UserProvider } from "./src/contexts/user.context";
import Login from "./src/screens/login/login.screen";
import Rooms from "./src/screens/rooms/rooms.screen";
import client from "./src/utils/gql.config";
import Chat from "./src/screens/chat/chat.screen";
import Register from "./src/screens/register/register.screen";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Black.ttf"),
    PoppinsExtra: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <NativeRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/*" element={<Chat />} />
          </Routes>
        </NativeRouter>
      </UserProvider>
    </ApolloProvider>
  );
}
