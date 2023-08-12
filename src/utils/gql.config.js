import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { hasSubscription } from "@jumpn/utils-graphql";
import * as AbsintheSocket from "@absinthe/socket";
import * as SecureStore from "expo-secure-store";

class AuthenticatedSocket {
  constructor(path, authURL) {
    this.params = {};
    this.socket = new PhoenixSocket(path, { params: () => this.params });
    this.socket.onError(() => {
      this.socket.disconnect();
      this.scheduleReconnect();
    });
  }

  connect() {
    this.fetchOneTimeToken(token => {
      this.params["token"] = token;
      this.socket.connect();
    });
  }

  async fetchOneTimeToken(callback) {
    const token = await SecureStore.getItemAsync("token");
    callback(token);
  }

  scheduleReconnect() {
    setTimeout(() => this.connect(), 1000);
  }
}

const httpLink = createHttpLink({
  uri: process.env.APOLLO_URI,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const authedHttpLink = authLink.concat(httpLink);

//            OLD PHONEX SOCKET
// const phoenixSocket = new PhoenixSocket(process.env.APOLLO_WS, {
//   params: () => {
//     if (token) {
//       return { token };
//     } else {
//       return {};
//     }
//   },
// });

const phoenixSocket = new AuthenticatedSocket(process.env.APOLLO_WS);

const absintheSocket = AbsintheSocket.create(phoenixSocket.socket);

const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(operation => hasSubscription(operation.query), websocketLink, authedHttpLink);
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;

// const httpLink = createHttpLink({
//   uri: process.env.APOLLO_URI,
// });

// const authLink = setContext(async (_, { headers }) => {
//   const token = await SecureStore.getItemAsync("token");
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// export default client;
