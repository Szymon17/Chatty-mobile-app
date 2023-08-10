import { ApolloProvider } from "@apollo/client";
import { NativeRouter, Routes, Route } from "react-router-native";
import { UserProvider } from "./src/contexts/user.context";
import Login from "./src/screens/login/login.screen";
import Rooms from "./src/screens/rooms/rooms.screen";
import client from "./src/utils/gql.config";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <NativeRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
        </NativeRouter>
      </UserProvider>
    </ApolloProvider>
  );
}
