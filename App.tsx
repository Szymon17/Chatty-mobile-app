import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NativeRouter } from "react-router-native";

const client = new ApolloClient({
  uri: process.env.APOLLO_URI,
  cache: new InMemoryCache(),
});

export default function App() {
  return <NativeRouter></NativeRouter>;
}
