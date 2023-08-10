import { FC, ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/queries";
import { userType } from "../utils/types";
import * as SecureStore from "expo-secure-store";

type userContext = {
  user: userType | null;
  tryLogin: (email: string, password: string) => void;
};

export const UserContext = createContext<userContext>({
  user: null,
  tryLogin: () => null,
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<userType | null>(null);

  const [login, { data }] = useMutation(LOGIN_USER);

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
    }
  }, [data]);

  const value = { user, tryLogin };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
