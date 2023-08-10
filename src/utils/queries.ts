import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
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

export const GET_ROOMS = gql`
  {
    usersRooms {
      rooms {
        name
        id
      }
    }
  }
`;

export const GET_ROOM = gql`
  query GetRoom($ID: ID!) {
    room(id: $ID) {
      id
      user {
        id
        firstName
        lastName
      }
      messages {
        body
        user {
          id
        }
      }
    }
  }
`;
