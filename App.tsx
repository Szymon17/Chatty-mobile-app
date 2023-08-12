import { ApolloProvider } from "@apollo/client";
import { NativeRouter, Routes, Route } from "react-router-native";
import { UserProvider } from "./src/contexts/user.context";
import Login from "./src/screens/login/login.screen";
import Rooms from "./src/screens/rooms/rooms.screen";
import client from "./src/utils/gql.config";
import Chat from "./src/screens/chat/chat.screen";
import Register from "./src/screens/register/register.screen";

export default function App() {
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
