import { FC, ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/queries";
import { userType } from "../utils/types";
import * as SecureStore from "expo-secure-store";

type userContext = {
  user: userType | null;
  dataError: ApolloError | null;
  tryLogin: (email: string, password: string) => void;
};

export const UserContext = createContext<userContext>({
  user: null,
  dataError: null,
  tryLogin: () => null,
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<userType | null>(null);
  const [dataError, setError] = useState<ApolloError | null>(null);

  const [login, { data, error, loading }] = useMutation(LOGIN_USER);

  const tryLogin = (email: string, password: string) => {
    login({ variables: { email, password } });
  };

  useEffect(() => {
    if (data) {
      const { user, token } = data.loginUser;
      if (user && token) {
        setUser(user);
        SecureStore.setItemAsync("token", token);
      }
    } else if (error) setError(error);
  }, [data, error, loading]);

  const value = { user, dataError, tryLogin };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
