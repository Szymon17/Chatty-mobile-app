import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NativeRouter, Routes, Route } from "react-router-native";
import Login from "./src/screens/login/login.screen";
import { UserProvider } from "./src/contexts/user.context";

const client = new ApolloClient({
  uri: process.env.APOLLO_URI,
  cache: new InMemoryCache(),
});
console.log(process.env.APOLLO_URI);
export default function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <NativeRouter>
          <Routes>
            <Route index element={<Login />} />
          </Routes>
        </NativeRouter>
      </UserProvider>
    </ApolloProvider>
  );
}
