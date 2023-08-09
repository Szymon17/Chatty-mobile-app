import { FC, ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";

type user = {
  id: string;
};

type userContext = {
  user: user | null;
  token: string | null;
  tryLogin: (email: string, password: string) => void;
};

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        email
        firstName
        id
        lastName
        role
      }
    }
  }
`;

export const UserContext = createContext<userContext>({
  user: null,
  token: null,
  tryLogin: () => null,
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<user | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const [login, { loading, error, data }] = useMutation(LOGIN_USER);

  const tryLogin = (email: string, password: string) => {
    login({ variables: { email, password } });
    console.log("trayed");
  };

  useEffect(() => {
    if (data) {
      const { user, token } = data.loginUser;
      if (user && token) {
        setUser(user);
        setToken(token);
      }
    }
  }, [data]);

  const value = { user, token, tryLogin };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
